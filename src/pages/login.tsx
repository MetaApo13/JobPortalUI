import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginSuccess } from '../features/auth/authslice';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Eye, EyeOff } from 'lucide-react';
import type { CheckedState } from '@radix-ui/react-checkbox';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState<CheckedState>(false);
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && password) {
      const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
      const matchedUser = storedUsers.find(
        (user: any) => user.email === email && user.password === password
      );

      if (matchedUser) {
        dispatch(
          loginSuccess({
            user: matchedUser,
            token: 'dummy-token',
          })
        );
        navigate('/dashboard');
      } else {
        alert('Invalid email or password. Please try again or register.');
      }
    }
  };

  const handleGoToRegister = () => {
    navigate('/register');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
      {/* CVSynk Branding */}
      <div className="absolute top-6 left-6">
        <div className="flex items-center">
          <svg
            className="w-8 h-8 text-white"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L2 7L12 12L22 7L12 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="white"
            />
            <path
              d="M2 17L12 22L22 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="white"
            />
            <path
              d="M2 12L12 17L22 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="white"
            />
          </svg>
          <span className="ml-2 text-white font-bold text-2xl">CVSynk</span>
        </div>
      </div>

      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>

        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 mb-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />

        <div className="relative mb-4">
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
          <div
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff size={20} color="#6B7280" />
            ) : (
              <Eye size={20} color="#6B7280" />
            )}
          </div>
        </div>

        <div className="flex items-center mb-4">
          <Checkbox
            id="rememberMe"
            checked={rememberMe}
            onCheckedChange={(checked) => setRememberMe(checked)}
            className="mr-2"
          />
          <label htmlFor="rememberMe" className="text-gray-700">
            Remember me
          </label>
        </div>

        <Button
          onClick={handleLogin}
          disabled={!email || !password}
          className="w-full py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
        >
          Log In
        </Button>

        <div className="flex justify-between items-center mt-4 text-sm">
          <a href="#" className="text-blue-500 hover:underline">
            Forgot password?
          </a>
          <Button
            variant="link"
            onClick={handleGoToRegister}
            className="text-blue-500 hover:underline"
          >
            Register
          </Button>
        </div>

        <div className="relative mt-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">New to CVSynk?</span>
          </div>
        </div>

        <Button
          onClick={handleGoToRegister}
          variant="outline"
          className="w-full py-3 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 focus:ring-2 focus:ring-blue-500"
        >
          Create an account
        </Button>
      </div>
    </div>
  );
};

export default Login;
