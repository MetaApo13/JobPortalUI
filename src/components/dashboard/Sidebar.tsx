// src/components/dashboard/Sidebar.tsx
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Briefcase, Package, User, Calendar, LogOut } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
// import { logoutUser } from '@/features/auth/authslice';

interface SidebarProps {
  user: {
    name: string;
    email: string;
    avatar?: string;
  };
  onLogout: () => void;
}

const Sidebar: FC<SidebarProps> = ({ user, onLogout }) => {
  const navigate = useNavigate();

  return (
    <div className="hidden md:flex w-64 flex-col bg-white border-r border-gray-200">
      <div className="flex items-center gap-2 px-6 py-5 border-b">
        <div className="w-8 h-8 rounded-md bg-purple-600 flex items-center justify-center text-white font-bold">
          CV
        </div>
        <span className="text-xl font-bold text-gray-800">CVSynk</span>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-1">
        <a href="#" onClick={(e) => { e.preventDefault(); navigate('/dashboard'); }} className="flex items-center px-4 py-3 text-purple-600 bg-purple-50 rounded-lg">
          <Home className="mr-3 w-5 h-5" />
          <span>Dashboard</span>
        </a>
        <a href="#" onClick={(e) => { e.preventDefault(); navigate('/jobs'); }} className="flex items-center px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition duration-200">
          <Briefcase className="mr-3 w-5 h-5" />
          <span>Jobs</span>
        </a>
        <a href="#" onClick={(e) => { e.preventDefault(); navigate('/plans'); }} className="flex items-center px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition duration-200">
          <Package className="mr-3 w-5 h-5" />
          <span>Plans</span>
        </a>
        <a href="#" onClick={(e) => { e.preventDefault(); navigate('/profile'); }} className="flex items-center px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition duration-200">
          <User className="mr-3 w-5 h-5" />
          <span>Profile</span>
        </a>
        <a href="#" onClick={(e) => { e.preventDefault(); navigate('/applications'); }} className="flex items-center px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition duration-200">
          <Calendar className="mr-3 w-5 h-5" />
          <span>Applications</span>
        </a>
      </nav>

      <div className="p-4 border-t">
        <div className="flex items-center">
          <Avatar className="h-10 w-10 mr-3">
            <AvatarImage src={user.avatar || "/placeholder-avatar.png"} alt={user.name} />
            <AvatarFallback className="bg-purple-200 text-purple-700">
              {user.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-sm">{user.name}</p>
            <p className="text-xs text-gray-500">{user.email}</p>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="w-full mt-3 text-gray-700 hover:text-purple-600 border-gray-300"
          onClick={onLogout}
        >
          <LogOut className="w-4 h-4 mr-2" />
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
