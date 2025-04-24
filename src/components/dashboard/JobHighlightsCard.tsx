// src/components/dashboard/JobHighlightsCard.tsx
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const JobHighlightsCard: FC = () => {
  const navigate = useNavigate();

  return (
    <Card
      className="mb-8 border-none hover:shadow-lg group transition-all duration-300 cursor-pointer overflow-hidden"
      onClick={() => navigate('/jobs')}
    >
      <div className="relative overflow-hidden rounded-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <CardContent className="p-6 flex items-center justify-between relative z-10 transition-colors duration-300 group-hover:text-white">
          <div className="flex items-center">
            <div className="bg-purple-100 p-3 rounded-full mr-4 text-purple-600 group-hover:bg-white group-hover:text-purple-700 transition-all duration-300 transform group-hover:scale-110">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-white transition-colors duration-300">
                Explore All Job Listings
              </h3>
              <p className="text-gray-500 group-hover:text-purple-100 transition-colors duration-300">
                Browse thousands of curated positions
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <Button
              variant="secondary"
              className="bg-white text-purple-700 group-hover:bg-purple-100 transition-all duration-300 px-5"
            >
              Browse Jobs
            </Button>
            <ChevronRight className="w-6 h-6 text-white opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-400 ease-out ml-2" />
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default JobHighlightsCard;
