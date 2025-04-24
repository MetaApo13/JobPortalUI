// src/components/dashboard/DashboardStats.tsx
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, Calendar, BookOpen, Package, MapPin, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface DashboardStatsProps {
  user: {
    currentPlan: string;
    planDetails: string;
  };
}

const DashboardStats: FC<DashboardStatsProps> = ({ user }) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {/* Applications */}
      <Card
        className="group transition-all duration-300 hover:shadow-lg hover:shadow-purple-100 hover:scale-[1.03] cursor-pointer border-none"
        onClick={() => navigate('/applications')}
      >
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold flex items-center justify-between text-gray-700 group-hover:text-gray-900">
            <span>Applications</span>
            <span className="text-purple-500 group-hover:text-purple-600 transition-colors">
              <Briefcase className="w-5 h-5" />
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-gray-800">7</div>
          <p className="text-sm text-gray-500 mt-1">3 in progress</p>
        </CardContent>
      </Card>

      {/* Interviews */}
      <Card
        className="group transition-all duration-300 hover:shadow-lg hover:shadow-purple-100 hover:scale-[1.03] cursor-pointer border-none"
        onClick={() => navigate('/interviews')}
      >
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold flex items-center justify-between text-gray-700 group-hover:text-gray-900">
            <span>Interviews</span>
            <span className="text-purple-500 group-hover:text-purple-600 transition-colors">
              <Calendar className="w-5 h-5" />
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-gray-800">2</div>
          <div className="flex items-center mt-1 flex-wrap gap-1">
            <p className="text-sm text-gray-500 whitespace-nowrap">Next: Tomorrow, 3PM</p>
            <Badge variant="outline" className="text-xs bg-gray-100 text-gray-600 border-gray-200 px-1.5 py-0.5">
              Offline
            </Badge>
          </div>
          <div className="flex items-center mt-2 text-xs text-gray-500">
            <MapPin className="w-3 h-3 mr-1 flex-shrink-0" />
            <span className="truncate" title="Panjim convention center, Panjim, Goa">
              Panjim convention center...
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Saved Jobs */}
      <Card
        className="group transition-all duration-300 hover:shadow-lg hover:shadow-purple-100 hover:scale-[1.03] cursor-pointer border-none"
        onClick={() => navigate('/saved-jobs')}
      >
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold flex items-center justify-between text-gray-700 group-hover:text-gray-900">
            <span>Saved Jobs</span>
            <span className="text-purple-500 group-hover:text-purple-600 transition-colors">
              <BookOpen className="w-5 h-5" />
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-gray-800">12</div>
          <p className="text-sm text-gray-500 mt-1">5 new matches</p>
        </CardContent>
      </Card>

      {/* Current Plan */}
      <div
        className="relative overflow-hidden rounded-lg group cursor-pointer"
        onClick={() => navigate('/plans')}
      >
        <Card className="h-full border-none bg-gradient-to-br from-purple-50 to-white relative z-10 transition-transform duration-300 group-hover:scale-[1.03]">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-semibold flex items-center justify-between text-gray-700 group-hover:text-gray-900">
              <span>Current Plan</span>
              <span className="text-purple-500 group-hover:text-purple-600">
                <Package className="w-5 h-5" />
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold text-purple-700">{user.currentPlan}</div>
            <p className="text-sm text-gray-500 mt-1">{user.planDetails}</p>
          </CardContent>
        </Card>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-purple-600 bg-opacity-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-opacity-90 transition-all duration-300 z-20">
          <div className="text-white text-lg font-semibold flex items-center transform scale-90 group-hover:scale-100 transition-transform duration-300">
            Upgrade Plan
            <TrendingUp className="ml-2 w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;
