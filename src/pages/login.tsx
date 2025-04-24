import { useState } from 'react'; // Removed unused React import
import { useDispatch } from 'react-redux';
import { login } from '../features/auth/authslice'; // Import the login action
import { Input } from '@/components/ui/input'; // Import the ShadCN Input component
import { Button } from '@/components/ui/button'; // Import the ShadCN Button component
import { Checkbox } from '@/components/ui/checkbox'; // Import ShadCN Checkbox component
import { Eye, EyeOff } from 'lucide-react'; // Import eye icons for reveal/hide
import type { CheckedState } from '@radix-ui/react-checkbox'; // Import CheckedState type

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState<CheckedState>(false); // Use CheckedState type
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (email && password) {
      // Faked user data — in a real app, this would come from your backend
      const user = {
        id: '1',
        name: 'John Doe',
        email,
        avatar: '', // Optional or dynamically generated
      };
  
      dispatch(login(user));
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-xl">
        {/* Branding */}
        <div className="absolute top-6 left-6 text-white font-bold text-2xl">
          CVSynk
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>

        {/* Email Input */}
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 mb-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />
        
        {/* Password Input with Show/Hide Eye Icon */}
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
            {showPassword ? <EyeOff size={20} color="#6B7280" /> : <Eye size={20} color="#6B7280" />}
          </div>
        </div>

        {/* Remember Me Checkbox */}
        <div className="flex items-center mb-4">
          <Checkbox
            id="rememberMe"
            checked={rememberMe}
            onCheckedChange={(checked) => setRememberMe(checked)} // Directly set CheckedState
            className="mr-2"
          />
          <label htmlFor="rememberMe" className="text-gray-700">Remember me</label>
        </div>

        {/* Login Button */}
        <Button
          onClick={handleLogin}
          className="w-full py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
        >
          Log In
        </Button>

        {/* Forgot Password Link */}
        <div className="text-center">
          <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
