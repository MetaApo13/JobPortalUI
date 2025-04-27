import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import Header from '@/components/dashboard/Header';
import WelcomeBanner from '@/components/dashboard/WelcomeBanner';
import DashboardStats from '@/components/dashboard/DashboardStats';
import JobHighlightsCard from '@/components/dashboard/JobHighlightsCard';
import RecommendedJobs from '@/components/dashboard/RecommendedJobs';
import { ALL_RECOMMENDED_JOBS } from '@/features/jobs/data/mockData';


import { useNavigate } from 'react-router-dom';

interface UserProfile {
    name: string;
    email: string;
    avatar?: string;
    currentPlan: string;
    planDetails: string;
}

const AVAILABLE_SKILLS: string[] = [
    'React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind',
    'Node.js', 'Python', 'Java', 'C#', 'UI/UX', 'Figma',
    'SQL', 'MongoDB', 'AWS', 'Docker', 'Git', 'Redux',
    'Network Security', 'SIEM', 'Threat Detection', 'Laravel', 'Vue.js', 'Prototyping',
    'SEO', 'Google Ads', 'Social Media', 'Analytics', 'Salesforce', 'CRM', 'Negotiation',
    'Recruiting', 'Onboarding', 'HR Software', 'Content Writing', 'SEO Writing', 'Editing'
];

const AVAILABLE_LOCATIONS: string[] = [
    'Remote', 'San Francisco, CA', 'New York, NY', 'London, UK',
    'Berlin, Germany', 'Tokyo, Japan', 'Toronto, Canada', 'Panjim, Goa',
    'Bangalore, India', 'Sydney, Australia', 'Austin, TX', 'Bombay, Maharashtra' 
];



const JOBS_PER_LOAD = 3; // Number of jobs to display per load click

const Dashboard: React.FC = () => {
    const navigate = useNavigate();

    // --- State ---
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedLocation, setSelectedLocation] = useState<string>('');

    const [user, setUser] = useState<UserProfile | null>(null);
    // State for managing displayed recommended jobs
    const [visibleJobsCount, setVisibleJobsCount] = useState<number>(6); 
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [selectedSkills, setSelectedSkills] = useState<string[]>([]); 

    // --- Data Fetching Simulation ---
    useEffect(() => {
        setIsLoading(true);
        // Simulate fetching user data
        const fetchUserData = async () => {
            await new Promise(resolve => setTimeout(resolve, 500));
            const sampleUser: UserProfile = {
                name: 'John Doe',
                email: 'john.doe@example.com',
                avatar: '/avatar.png',
                currentPlan: 'Basic',
                planDetails: '5 applications/month',
            };
            setUser(sampleUser);
        };


        const fetchJobsData = async () => {
            await new Promise(resolve => setTimeout(resolve, 800));
            
        };

        Promise.all([fetchUserData(), fetchJobsData()]).then(() => {
            setIsLoading(false);
        });
    }, []);



    const viewJobDetails = (id: string | number) => {
        navigate(`/jobs/${id}`);
      };
      ;

    const handleLogout = () => {
        console.log("Logout action triggered");
        
    };

    const handleLoadMoreJobs = () => {
        setVisibleJobsCount(prevCount =>
            Math.min(prevCount + JOBS_PER_LOAD, ALL_RECOMMENDED_JOBS.length)
        );
    };

   

    // Slice the jobs array based on the visible count
    const displayedJobs = ALL_RECOMMENDED_JOBS.slice(0, visibleJobsCount);
    const canLoadMore = visibleJobsCount < ALL_RECOMMENDED_JOBS.length;

    // --- Render Logic ---
    if (isLoading) {
        return <div className="flex h-screen items-center justify-center">Loading Dashboard...</div>; // Basic Loading Indicator
    }

    if (!user) {
        return <div className="flex h-screen items-center justify-center">Error loading user data.</div>; // Basic Error Indicator
    }
   

const handleSkillToggle = (skill: string) => {
  setSelectedSkills((prevSkills) =>
    prevSkills.includes(skill)
      ? prevSkills.filter((s) => s !== skill)
      : [...prevSkills, skill]
  );
};

const handleClearFilters = () => {
  setSelectedSkills([]);
  setSearchTerm('');
  setSelectedLocation('');
};

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <Sidebar user={user} onLogout={handleLogout} />

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <Header
  searchTerm={searchTerm}
  selectedLocation={selectedLocation}
  selectedSkills={selectedSkills}
  availableSkills={AVAILABLE_SKILLS}
  availableLocations={AVAILABLE_LOCATIONS}
  onSearchChange={setSearchTerm}
  onLocationChange={setSelectedLocation}
  onSkillToggle={handleSkillToggle}
  onClearFilters={handleClearFilters}
  onLogout={handleLogout}
  user={user}
/>


                {/* Main Content Scrollable Area */}
                <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
                    {/* Welcome Section */}
                    <div className="mb-8">
                    <WelcomeBanner name={user.name} />
                        <p className="text-gray-500 mt-1">Here's what's happening with your job search today.</p>
                    </div>

                    {/* Stats and Quick Actions */}
                    <DashboardStats user={user} />

                    <JobHighlightsCard />

                    {/* Recommended Jobs */}
                    <RecommendedJobs
  jobs={displayedJobs}
  canLoadMore={canLoadMore}
  onViewDetails={viewJobDetails}
  onLoadMore={handleLoadMoreJobs}
/>

                </main>
            </div>
        </div>
    );
};

export default Dashboard;