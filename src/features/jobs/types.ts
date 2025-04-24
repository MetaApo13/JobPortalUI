
export interface UserProfile {
    id: string | number; // Assuming ID is available from Redux state
    name: string;
    email: string;
    avatar?: string;
    // Add other relevant fields from your Redux auth state like roles, plan, etc.
    // currentPlan?: string; // Example if plan info is in auth state
}

// src/types/index.ts (or src/features/jobs/types.ts)
// export interface Job {
//     id: number | string; // Allow string IDs if fetched from API
//     title: string;
//     company: string;
//     location: string;
//     mode: 'Remote' | 'Offline' | 'Hybrid';
//     skills: string[];
//     postedDate: string; // Or Date object if you parse it
//     logo: string; // Could be initials or URL
//     description?: string; // Optional full description
//     // Add other relevant fields
// }
export interface Job {
    id: number | string;
    title: string;
    company: string;
    location: string;
    mode: 'Remote' | 'Offline' | 'Hybrid';
    skills: string[];
    postedDate: string;
    logo: string;
    description?: string;
    experience: string; 
    salary?: string; // Optional salary field
}

// Potentially types for filters
export interface JobFilters {
    searchTerm: string;
    location: string;
    skills: string[];
}