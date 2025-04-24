import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import Header from '@/components/dashboard/Header';
import WelcomeBanner from '@/components/dashboard/WelcomeBanner';
import DashboardStats from '@/components/dashboard/DashboardStats';
import JobHighlightsCard from '@/components/dashboard/JobHighlightsCard';
import RecommendedJobs from '@/components/dashboard/RecommendedJobs';
import { ALL_RECOMMENDED_JOBS } from '@/features/jobs/data/mockData';


import { useNavigate } from 'react-router-dom';

// import {
//     DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,
//     DropdownMenuSeparator, DropdownMenuTrigger
// } from '@/components/ui/dropdown-menu';
// import {
//     Popover, PopoverContent, PopoverTrigger,
// } from '@/components/ui/popover';


// --- Type Definitions ---
interface UserProfile {
    name: string;
    email: string;
    avatar?: string;
    currentPlan: string;
    planDetails: string;
}

// interface JobRecommendation {
//     id: number;
//     title: string;
//     company: string;
//     location: string;
//     mode: 'Remote' | 'Offline' | 'Hybrid'; // Added mode field
//     skills: string[];
//     postedDate: string;
//     logo: string;
// }

// --- Constants ---
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
    'Bangalore, India', 'Sydney, Australia', 'Austin, TX', 'Bombay, Maharashtra' // Added Bombay
];

// --- Sample Data (Combined Initial and Load More) ---
// const ALL_RECOMMENDED_JOBS: JobRecommendation[] = [
//     // Initial Set (Row 1)
//     { id: 1, title: "Frontend Developer", company: "TechCorp Inc.", location: "San Francisco, CA", mode: "Remote", skills: ["React", "TypeScript", "Tailwind CSS"], postedDate: "2 days ago", logo: "TC" },
//     { id: 2, title: "UX Designer", company: "DesignHub", location: "Remote", mode: "Remote", skills: ["Figma", "UI/UX", "Prototyping"], postedDate: "1 day ago", logo: "DH" },
//     { id: 3, title: "Backend Engineer", company: "DataStack", location: "New York, NY", mode: "Hybrid", skills: ["Node.js", "Express", "MongoDB"], postedDate: "3 days ago", logo: "DS" },
//     // New Additions (Row 2)
//     { id: 4, title: "Cybersecurity Analyst", company: "Cisco India Ltd", location: "Bombay, Maharashtra", mode: "Offline", skills: ["Network Security", "SIEM", "Threat Detection"], postedDate: "4 days ago", logo: "CI" },
//     { id: 5, title: "UI/UX Designer", company: "91 HR", location: "Panjim, Goa", mode: "Offline", skills: ["Laravel", "Vue.js", "Figma", "Prototyping"], postedDate: "1 day ago", logo: "91" },
//     { id: 6, title: "Digital Marketing Specialist", company: "Arsenal FC", location: "Remote", mode: "Remote", skills: ["SEO", "Google Ads", "Social Media", "Analytics"], postedDate: "5 days ago", logo: "AF" },
//     // Jobs to Load (Row 3)
//     { id: 7, title: "Sales Executive", company: "GrowthLead Co.", location: "Bangalore, India", mode: "Hybrid", skills: ["Salesforce", "CRM", "Negotiation", "Lead Generation"], postedDate: "6 days ago", logo: "GL" },
//     { id: 8, title: "HR Generalist", company: "PeopleFirst Solutions", location: "Remote", mode: "Remote", skills: ["Recruiting", "Onboarding", "HR Software", "Employee Relations"], postedDate: "3 days ago", logo: "PF" },
//     { id: 9, title: "Content Writer", company: "Blogosphere Inc.", location: "Panjim, Goa", mode: "Offline", skills: ["Content Writing", "SEO Writing", "Editing", "WordPress"], postedDate: "7 days ago", logo: "BI" },
//     // Add more jobs here if needed for further "Load More" clicks
// ];

const JOBS_PER_LOAD = 3; // Number of jobs to display per load click

const Dashboard: React.FC = () => {
    const navigate = useNavigate();

    // --- State ---
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedLocation, setSelectedLocation] = useState<string>('');
   // const [locationSearch, setLocationSearch] = useState<string>('');
  //  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
    const [user, setUser] = useState<UserProfile | null>(null);
    // State for managing displayed recommended jobs
    const [visibleJobsCount, setVisibleJobsCount] = useState<number>(6); // Initially show 6 jobs (2 rows)
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

        // Simulate fetching ALL jobs data (though we use sample data here)
        const fetchJobsData = async () => {
            await new Promise(resolve => setTimeout(resolve, 800));
            // In a real app, you might fetch ALL_RECOMMENDED_JOBS here
            // For now, we just use the constant.
        };

        Promise.all([fetchUserData(), fetchJobsData()]).then(() => {
            setIsLoading(false);
        });
    }, []);

    // --- Event Handlers ---
    // const handleSearch = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     let queryParams = `search=${encodeURIComponent(searchTerm)}`;
    //     if (selectedLocation) {
    //         queryParams += `&location=${encodeURIComponent(selectedLocation)}`;
    //     }
    //     if (selectedSkills.length > 0) {
    //         queryParams += `&skills=${encodeURIComponent(selectedSkills.join(','))}`;
    //     }
    //     navigate(`/job-listing?${queryParams}`);
    // };

    // const toggleSkill = (skill: string) => {
    //     setSelectedSkills(prevSkills =>
    //         prevSkills.includes(skill)
    //             ? prevSkills.filter(s => s !== skill)
    //             : [...prevSkills, skill]
    //     );
    // };

    const viewJobDetails = (id: string | number) => {
        navigate(`/jobs/${id}`);
      };
      ;

    const handleLogout = () => {
        console.log("Logout action triggered");
        // Add actual logout logic here (e.g., clear token, redirect)
        // navigate('/login');
    };

    const handleLoadMoreJobs = () => {
        setVisibleJobsCount(prevCount =>
            Math.min(prevCount + JOBS_PER_LOAD, ALL_RECOMMENDED_JOBS.length)
        );
    };

    // --- Derived State ---
    // const filteredLocations = AVAILABLE_LOCATIONS.filter(location =>
    //     location.toLowerCase().includes(locationSearch.toLowerCase())
    // );

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