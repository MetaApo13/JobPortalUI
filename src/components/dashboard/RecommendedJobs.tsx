import { FC } from 'react';
import { Job } from '@/features/jobs/types';
import { Button } from '@/components/ui/button';
import { ChevronRight, Plus, Star } from 'lucide-react';
import JobCard from './JobCard';
import { useNavigate } from 'react-router-dom';

interface RecommendedJobsProps {
  jobs: Job[];
  canLoadMore: boolean;
  onViewDetails: (id: string | number) => void;
  onLoadMore: () => void;
}

const RecommendedJobs: FC<RecommendedJobsProps> = ({ jobs, canLoadMore, onViewDetails, onLoadMore }) => {
  const navigate = useNavigate();

  return (
    <div className="mb-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 gap-3">
        <div className="flex items-center">
          <h2 className="text-xl font-bold text-gray-800">Recommended Jobs For You</h2>
          <Star className="w-5 h-5 text-yellow-400 ml-2 flex-shrink-0" />
        </div>
        <Button
          variant="link"
          className="text-purple-600 hover:text-purple-800 px-0 h-auto justify-start sm:justify-end"
          onClick={() => navigate('/job-listing?filter=recommended')}
        >
          View All Recommendations
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </div>

      {/* Subtext */}
      <p className="text-sm text-gray-500 mb-6 -mt-2">Based on your profile, skills, and preferences.</p>

      {/* Job Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} onClick={onViewDetails} />
        ))}
      </div>

      {/* Load More */}
      {canLoadMore && (
        <div className="text-center">
          <Button
            variant="outline"
            className="border-purple-200 text-purple-700 hover:bg-purple-50 hover:shadow-sm transition-all duration-300 transform active:scale-95 px-6 group"
            onClick={onLoadMore}
          >
            <Plus className="w-4 h-4 mr-2 transform group-hover:rotate-90 transition-transform duration-300" />
            Load More Jobs
          </Button>
        </div>
      )}
    </div>
  );
};

export default RecommendedJobs;
