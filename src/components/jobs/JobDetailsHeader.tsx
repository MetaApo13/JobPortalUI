// src/components/JobDetailsHeader.tsx
import { useNavigate } from 'react-router-dom';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { UserCircle, ChevronDown } from 'lucide-react';

interface JobDetailsHeaderProps {
  companyName: string;
}

const JobDetailsHeader: React.FC<JobDetailsHeaderProps> = ({ companyName }) => {
  const navigate = useNavigate();

  return (
    <header className="w-full px-6 py-4 bg-white shadow flex items-center justify-between border-b border-gray-200">
      {/* Left - Branding */}
      <div
        className="text-xl font-extrabold text-indigo-600 tracking-wide cursor-pointer"
        onClick={() => navigate('/')}
      >
        CVSynk
      </div>

      {/* Center - Highlighted Company Name */}
      <div className="text-lg font-semibold text-gray-700 bg-indigo-100 px-4 py-1 rounded-md">
        {companyName}
      </div>

      {/* Right - Profile Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-2 focus:outline-none">
          <UserCircle className="h-7 w-7 text-indigo-600" />
          <ChevronDown className="h-4 w-4 text-gray-600" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem onClick={() => navigate('/profile')}>Profile</DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate('/plans')}>Subscription Plan</DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate('/settings')}>Settings</DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              // You can replace this with actual logout logic
              alert('Logging out...');
            }}
            className="text-red-600"
          >
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default JobDetailsHeader;
