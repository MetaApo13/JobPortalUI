// src/pages/JobDetails.tsx
import { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ALL_JOB_LISTINGS, ALL_RECOMMENDED_JOBS } from '@/features/jobs/data/mockData';
import { Job } from '@/features/jobs/types';
import { Button } from '@/components/ui/button';
import { Share2, Bookmark, HeartOff, Send, ArrowLeft, ArrowRight } from 'lucide-react';
import JobDetailsHeader from '@/components/jobs/JobDetailsHeader';

const ALL_JOBS = [...ALL_RECOMMENDED_JOBS, ...ALL_JOB_LISTINGS].sort(
    (a, b) => Number(a.id) - Number(b.id)
  );

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const touchStartXRef = useRef<number | null>(null);

  const jobId = parseInt(id || '', 10);
  if (isNaN(jobId)) {
    return <div className="text-center text-red-600 py-10">Invalid job ID.</div>;
  }

  const jobIndex = ALL_JOBS.findIndex((job) => job.id === jobId);
  const job: Job | undefined = jobIndex >= 0 ? ALL_JOBS[jobIndex] : undefined;

  const previousJob = jobIndex > 0 ? ALL_JOBS[jobIndex - 1] : null;
  const nextJob = jobIndex < ALL_JOBS.length - 1 ? ALL_JOBS[jobIndex + 1] : null;

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && previousJob) {
        navigate(`/jobs/${previousJob.id}`);
      } else if (e.key === 'ArrowRight' && nextJob) {
        navigate(`/jobs/${nextJob.id}`);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [previousJob, nextJob, navigate]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current !== null) {
      const deltaX = touchStartXRef.current - e.changedTouches[0].clientX;
      if (deltaX > 50 && nextJob) navigate(`/jobs/${nextJob.id}`);
      if (deltaX < -50 && previousJob) navigate(`/jobs/${previousJob.id}`);
    }
  };

  if (!job) {
    return <div className="text-center text-red-600 py-10">Job not found or unauthorized.</div>;
  }

  return (
    <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      {/* Custom header */}
      <JobDetailsHeader companyName={job.company} />

      {/* Swipe arrows */}
      <div className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20">
        {previousJob && (
          <Button size="icon" variant="ghost" onClick={() => navigate(`/jobs/${previousJob.id}`)}>
            <ArrowLeft className="w-6 h-6" />
          </Button>
        )}
      </div>
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20">
        {nextJob && (
          <Button size="icon" variant="ghost" onClick={() => navigate(`/jobs/${nextJob.id}`)}>
            <ArrowRight className="w-6 h-6" />
          </Button>
        )}
      </div>
      <Button
  variant="ghost"
  onClick={() => navigate('/dashboard')}
  className="flex items-center text-sm text-gray-600 hover:text-purple-600 transition"
>
  <ArrowLeft className="mr-1 h-4 w-4" />
  Back to Dashboard
</Button>
      <div className="max-w-5xl mx-auto px-6 py-10 transition-all duration-300 ease-in-out">
        {/* Job Title + Action Buttons */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-4 mb-6">
          <div>
            <h1 className="text-2xl font-semibold">{job.title}</h1>
            <p className="text-gray-600">{job.company}</p>
            <p className="text-sm text-gray-500">{job.postedDate}</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <Bookmark className="mr-1 h-4 w-4" /> Save
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="mr-1 h-4 w-4" /> Share
            </Button>
            <Button variant="outline" size="sm" className="text-red-500 border-red-500 hover:bg-red-100">
              <HeartOff className="mr-1 h-4 w-4" /> Ignore
            </Button>
          </div>
        </div>

        {/* Job Info */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold">Location:</p>
              <p>{job.location}</p>
            </div>
            <div>
              <p className="font-semibold">Work Mode:</p>
              <p>{job.mode}</p>
            </div>
            <div>
              <p className="font-semibold">Expected Salary:</p>
              <p>{job.salary || 'Not specified'}</p>
            </div>
            <div>
              <p className="font-semibold">Skills Required:</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {job.skills.map((skill) => (
                  <span key={skill} className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <p className="font-semibold mb-2">Job Description:</p>
            <p className="text-gray-700">{job.description}</p>
          </div>

          {/* Responsibilities & Qualifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="font-semibold mb-2">Key Responsibilities:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Design, develop and maintain front-end applications.</li>
                <li>Collaborate with cross-functional teams.</li>
                <li>Ensure application performance and responsiveness.</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">Qualifications:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Bachelor's in CS or related field.</li>
                <li>Experience with modern JS frameworks.</li>
                <li>Good communication skills.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Apply Button */}
        <div className="mt-10 text-center">
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
            <Send className="mr-2 h-4 w-4" />
            Submit Application
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
