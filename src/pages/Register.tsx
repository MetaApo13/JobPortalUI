import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff } from 'lucide-react';

const Register = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors: string[] = [];

    if (!form.fullName) newErrors.push('Full Name is required');
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) newErrors.push('Valid Email is required');
    if (!form.mobile || !/^\d{10}$/.test(form.mobile)) newErrors.push('Valid 10-digit Mobile is required');
    if (!form.password) newErrors.push('Password is required');
    if (form.password !== form.confirmPassword) newErrors.push('Passwords do not match');

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      alert('Registered successfully (demo)');
      setForm({ fullName: '', email: '', mobile: '', password: '', confirmPassword: '' });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold text-center text-gray-800">Register</h2>

        {errors.length > 0 && (
          <ul className="p-4 mb-4 text-sm text-red-600 bg-red-100 rounded">
            {errors.map((err, i) => (
              <li key={i}>• {err}</li>
            ))}
          </ul>
        )}

        <Input
          name="fullName"
          placeholder="Full Name"
          value={form.fullName}
          onChange={handleChange}
          className="w-full"
        />
        <Input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full"
        />
        <Input
          name="mobile"
          type="tel"
          placeholder="Mobile (10-digit)"
          value={form.mobile}
          onChange={handleChange}
          className="w-full"
        />

        {/* Password with toggle */}
        <div className="relative">
          <Input
            name="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full"
          />
          <div
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </div>
        </div>

        <div className="relative">
          <Input
            name="confirmPassword"
            type={showConfirm ? 'text' : 'password'}
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            className="w-full"
          />
          <div
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={() => setShowConfirm(!showConfirm)}
          >
            {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
          </div>
        </div>

        <Button onClick={handleSubmit} className="w-full">
          Register
        </Button>
      </div>
    </div>
  );
};

export default Register;
