import { FC } from 'react';
import { Job } from '@/features/jobs/types';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, MapPin } from 'lucide-react';

interface JobCardProps {
  job: Job;
  onClick: (id: string | number) => void;
}

const JobCard: FC<JobCardProps> = ({ job, onClick }) => {
  return (
    <Card
      key={job.id}
      className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border-none flex flex-col"
      onClick={() => onClick(job.id)}
    >
      <CardContent className="p-5 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1 mr-3">
            <h3 className="font-bold text-lg text-gray-800 group-hover:text-purple-700 transition-colors leading-tight">
              {job.title}
            </h3>
            <p className="text-sm text-gray-600">{job.company}</p>
          </div>
          <Avatar className="h-10 w-10 flex-shrink-0 border border-gray-100">
            <AvatarFallback className="bg-purple-50 text-purple-700 font-medium text-sm">{job.logo}</AvatarFallback>
          </Avatar>
        </div>

        <div className="flex items-center text-sm text-gray-500 mb-3">
          <MapPin className="w-4 h-4 mr-1.5 flex-shrink-0" />
          <span className="truncate mr-2" title={job.location}>{job.location}</span>
          <Badge
            variant={job.mode === 'Remote' ? 'secondary' : 'outline'}
            className={`text-xs px-1.5 py-0.5 leading-none h-auto ml-auto ${
              job.mode === 'Remote' ? 'bg-green-100 text-green-800 border-green-200' :
              job.mode === 'Offline' ? 'bg-blue-100 text-blue-800 border-blue-200' :
              'bg-yellow-100 text-yellow-800 border-yellow-200'
            }`}
          >
            {job.mode}
          </Badge>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {job.skills.slice(0, 3).map((skill, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full font-normal group-hover:bg-purple-100 group-hover:text-purple-700 transition-colors"
            >
              {skill}
            </Badge>
          ))}
          {job.skills.length > 3 && (
            <Badge
              variant="secondary"
              className="px-2 py-0.5 bg-gray-100 text-gray-500 text-xs rounded-full font-normal group-hover:bg-purple-100 group-hover:text-purple-600 transition-colors"
            >
              +{job.skills.length - 3} more
            </Badge>
          )}
        </div>

        <div className="flex justify-between items-center text-xs mt-auto pt-3 border-t border-gray-100">
          <span className="text-gray-500">{job.postedDate}</span>
          <span className="text-purple-600 font-medium group-hover:underline flex items-center">
            View Details <ChevronRight className="w-3 h-3 ml-0.5" />
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;
