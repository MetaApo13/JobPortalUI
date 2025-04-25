import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Eye,
  EyeOff,
  User,
  Mail,
  Phone,
  Lock,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useDispatch } from 'react-redux';
import { loginSuccess } from '@/features/auth/authslice'; //C:\Users\nsinr\Documents\JobPortalUI\src\features\auth\authslice.ts

type FieldError = {
  fullName?: string;
  email?: string;
  mobile?: string;
  password?: string;
  confirmPassword?: string;
};

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<FieldError>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (touched[name]) validateField(name, value);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    validateField(name, value);
  };

  const validateField = (name: string, value: string) => {
    let newErrors = { ...fieldErrors };

    switch (name) {
      case 'fullName':
        !value.trim() ? newErrors.fullName = 'Full Name is required' : delete newErrors.fullName;
        break;
      case 'email':
        if (!value) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(value)) newErrors.email = 'Invalid email';
        else delete newErrors.email;
        break;
      case 'mobile':
        if (!value) newErrors.mobile = 'Mobile number is required';
        else if (!/^\d{10}$/.test(value)) newErrors.mobile = '10-digit number required';
        else delete newErrors.mobile;
        break;
      case 'password':
        if (!value) newErrors.password = 'Password is required';
        else if (value.length < 8) newErrors.password = 'Minimum 8 characters';
        else delete newErrors.password;

        if (form.confirmPassword && value !== form.confirmPassword)
          newErrors.confirmPassword = 'Passwords do not match';
        else if (form.confirmPassword)
          delete newErrors.confirmPassword;
        break;
      case 'confirmPassword':
        if (!value) newErrors.confirmPassword = 'Confirm your password';
        else if (value !== form.password) newErrors.confirmPassword = 'Passwords do not match';
        else delete newErrors.confirmPassword;
        break;
    }

    setFieldErrors(newErrors);
  };

  const validateForm = () => {
    const newErrors: FieldError = {};

    if (!form.fullName) newErrors.fullName = 'Full Name is required';
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Valid email required';
    if (!form.mobile || !/^\d{10}$/.test(form.mobile)) newErrors.mobile = 'Valid mobile required';
    if (!form.password || form.password.length < 8) newErrors.password = 'Minimum 8 characters';
    if (!form.confirmPassword || form.password !== form.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';

    setFieldErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    // Save to localStorage
    const userData = {
      fullName: form.fullName,
      email: form.email,
      mobile: form.mobile,
      password: form.password,
    };

    localStorage.setItem('registeredUser', JSON.stringify(userData));

    // Log in the user directly
    dispatch(loginSuccess({ user: userData, token: 'dummy-token' }));

    // Redirect to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 p-4">
      <div className="absolute top-6 left-6 flex items-center">
        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" fill="white" />
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" fill="white" />
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" fill="white" />
        </svg>
        <span className="ml-2 text-white font-bold text-2xl">CVSynk</span>
      </div>

      <Card className="w-full max-w-md bg-white shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl">Register</CardTitle>
          <CardDescription>Create a new CVSynk account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { label: 'Full Name', name: 'fullName', icon: <User className="w-4 h-4" /> },
            { label: 'Email', name: 'email', icon: <Mail className="w-4 h-4" /> },
            { label: 'Mobile Number', name: 'mobile', icon: <Phone className="w-4 h-4" /> },
          ].map(({ label, name, icon }) => (
            <div key={name}>
              <Label>{label}</Label>
              <div className="relative">
                {icon && <span className="absolute left-2 top-2.5 text-gray-500">{icon}</span>}
                <Input
                  type="text"
                  name={name}
                  value={form[name as keyof typeof form]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="pl-8"
                />
              </div>
              {touched[name] && fieldErrors[name as keyof FieldError] && (
                <p className="text-red-500 text-sm mt-1">{fieldErrors[name as keyof FieldError]}</p>
              )}
            </div>
          ))}

          {/* Password */}
          <div>
            <Label>Password</Label>
            <div className="relative">
              <span className="absolute left-2 top-2.5 text-gray-500"><Lock className="w-4 h-4" /></span>
              <Input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={form.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className="pl-8 pr-10"
              />
              <span
                className="absolute right-2 top-2.5 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </span>
            </div>
            {touched.password && fieldErrors.password && (
              <p className="text-red-500 text-sm mt-1">{fieldErrors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <Label>Confirm Password</Label>
            <div className="relative">
              <span className="absolute left-2 top-2.5 text-gray-500"><Lock className="w-4 h-4" /></span>
              <Input
                type={showConfirm ? 'text' : 'password'}
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className="pl-8 pr-10"
              />
              <span
                className="absolute right-2 top-2.5 cursor-pointer text-gray-500"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </span>
            </div>
            {touched.confirmPassword && fieldErrors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{fieldErrors.confirmPassword}</p>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-3">
          <Button className="w-full" onClick={handleSubmit}>Register</Button>
          <p className="text-sm text-center text-gray-600">
            Already have an account?{' '}
            <span className="text-blue-600 cursor-pointer underline" onClick={() => navigate('/login')}>
              Log in
            </span>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;
