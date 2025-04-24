// src/pages/Jobs.tsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/dashboard/Header';
import { Job } from '@/features/jobs/types';
import { Button } from '@/components/ui/button';
import { ALL_JOB_LISTINGS } from '@/features/jobs/data/mockData';

const allSkills = [
  'React', 'TypeScript', 'Tailwind CSS', 'Figma', 'UI/UX', 'Prototyping',
  'Node.js', 'Express', 'MongoDB', 'Python', 'Django', 'SQL',
  'AWS', 'Java', 'Angular', 'GraphQL'
];

const allLocations = [
  'Remote', 'San Francisco, CA', 'New York, NY',
  'Pune, Maharashtra', 'Panaji, Goa', 'Mumbai, Maharashtra',
  'Nagpur, Maharashtra', 'Margao, Goa'
];

const Jobs = () => {
  const [filters, setFilters] = useState({
    searchTerm: '',
    location: '',
    skills: [] as string[],
  });

  const [displayedJobs, setDisplayedJobs] = useState<Job[]>([]);
  const [visibleCount, setVisibleCount] = useState(12);
  const navigate = useNavigate();

  useEffect(() => {
    const filtered = ALL_JOB_LISTINGS.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(filters.searchTerm.toLowerCase());
      const matchesLocation = !filters.location || job.location === filters.location;
      const matchesSkills =
        filters.skills.length === 0 ||
        filters.skills.every((skill) => job.skills.includes(skill));
      return matchesSearch && matchesLocation && matchesSkills;
    });

    setDisplayedJobs(filtered.slice(0, visibleCount));
  }, [filters, visibleCount]);

  const loadMore = () => setVisibleCount((prev) => prev + 12);

  return (
    <div>
      <Header
        searchTerm={filters.searchTerm}
        selectedLocation={filters.location}
        selectedSkills={filters.skills}
        availableSkills={allSkills}
        availableLocations={allLocations}
        onSearchChange={(term) => setFilters((prev) => ({ ...prev, searchTerm: term }))}
        onLocationChange={(location) => setFilters((prev) => ({ ...prev, location }))}
        onSkillToggle={(skill) =>
          setFilters((prev) => ({
            ...prev,
            skills: prev.skills.includes(skill)
              ? prev.skills.filter((s) => s !== skill)
              : [...prev.skills, skill],
          }))
        }
        onClearFilters={() => setFilters((prev) => ({ ...prev, skills: [] }))}
        onLogout={() => console.log('Logging out...')}
        user={{ name: 'John Doe' }}
      />

      <div className="max-w-screen-xl mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedJobs.map((job) => (
          <div key={job.id} className="border rounded-lg p-4 shadow hover:shadow-md transition">
            <div className="flex items-center justify-between mb-2">
              <div className="text-lg font-semibold">{job.title}</div>
              <div className="text-sm bg-gray-200 rounded px-2 py-1">{job.mode}</div>
            </div>
            <div className="text-gray-600 mb-1">{job.company}</div>
            <div className="text-gray-500 text-sm">{job.location}</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {job.skills.map((skill) => (
                <span key={skill} className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                  {skill}
                </span>
              ))}
            </div>
            <Button
              size="sm"
              className="mt-4 w-full"
              onClick={() => navigate(`/jobs/${job.id}`)}
            >
              View Details
            </Button>
          </div>
        ))}
      </div>

      {visibleCount < ALL_JOB_LISTINGS.length && (
        <div className="text-center pb-10">
          <Button onClick={loadMore}>Load More</Button>
        </div>
      )}
    </div>
  );
};

export default Jobs;
