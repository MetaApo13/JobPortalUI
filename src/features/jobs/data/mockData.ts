// src/features/jobs/data/mockData.ts
import { Job } from '@/features/jobs/types'; 

export const ALL_RECOMMENDED_JOBS: Job[] = [
    // Initial Set (Row 1)
    { id: 1, title: "Frontend Developer", company: "TechCorp Inc.", location: "San Francisco, CA", mode: "Remote", skills: ["React", "TypeScript", "Tailwind CSS"], postedDate: "2 days ago", logo: "TC", experience: "1-3 years" },
    { id: 2, title: "UX Designer", company: "DesignHub", location: "Remote", mode: "Remote", skills: ["Figma", "UI/UX", "Prototyping"], postedDate: "1 day ago", logo: "DH", experience: "2-4 years" },
    { id: 3, title: "Backend Engineer", company: "DataStack", location: "New York, NY", mode: "Hybrid", skills: ["Node.js", "Express", "MongoDB"], postedDate: "3 days ago", logo: "DS", experience: "3-5 years" },
    // New Additions (Row 2)
    { id: 4, title: "Cybersecurity Analyst", company: "Cisco India Ltd", location: "Bombay, Maharashtra", mode: "Offline", skills: ["Network Security", "SIEM", "Threat Detection"], postedDate: "4 days ago", logo: "CI", experience: "5-8 years" },
    { id: 5, title: "UI/UX Designer", company: "91 HR", location: "Panjim, Goa", mode: "Offline", skills: ["Laravel", "Vue.js", "Figma", "Prototyping"], postedDate: "1 day ago", logo: "91", experience: "1-3 years" },
    { id: 6, title: "Digital Marketing Specialist", company: "Arsenal FC", location: "Remote", mode: "Remote", skills: ["SEO", "Google Ads", "Social Media", "Analytics"], postedDate: "5 days ago", logo: "AF", experience: "Freshers preferred" },
    // Jobs to Load (Row 3)
    { id: 7, title: "Sales Executive", company: "GrowthLead Co.", location: "Bangalore, India", mode: "Hybrid", skills: ["Salesforce", "CRM", "Negotiation", "Lead Generation"], postedDate: "6 days ago", logo: "GL", experience: "2-4 years" },
    { id: 8, title: "HR Generalist", company: "PeopleFirst Solutions", location: "Remote", mode: "Remote", skills: ["Recruiting", "Onboarding", "HR Software", "Employee Relations"], postedDate: "3 days ago", logo: "PF", experience: "1-3 years" },
    { id: 9, title: "Content Writer", company: "Blogosphere Inc.", location: "Panjim, Goa", mode: "Offline", skills: ["Content Writing", "SEO Writing", "Editing", "WordPress"], postedDate: "7 days ago", logo: "BI", experience: "0-2 years" },
];// src/features/jobs/data/mockData.ts (CONTINUED)
    // Additional 27 Jobs
    export const ALL_JOB_LISTINGS: Job[] = [   {
      id: 10, title: "Mobile Developer", company: "Appify Labs", location: "Pune, Maharashtra", mode: "Remote",
      skills: ["React Native", "Redux", "REST APIs"], postedDate: "1 day ago", logo: "AL", experience: "2-4 years"
    },
    {
      id: 11, title: "Full Stack Engineer", company: "StackForge", location: "Margao, Goa", mode: "Hybrid",
      skills: ["JavaScript", "Node.js", "React"], postedDate: "3 days ago", logo: "SF", experience: "1-3 years"
    },
    {
      id: 12, title: "AI Research Intern", company: "DeepThink AI", location: "Remote", mode: "Remote",
      skills: ["Python", "TensorFlow", "NLP"], postedDate: "5 days ago", logo: "DAI", experience: "Freshers"
    },
    {
      id: 13, title: "Product Manager", company: "ZoomGlobal", location: "Mumbai, Maharashtra", mode: "Offline",
      skills: ["Agile", "Scrum", "Product Strategy"], postedDate: "2 days ago", logo: "ZG", experience: "4-6 years"
    },
    {
      id: 14, title: "DevOps Engineer", company: "CloudOps", location: "Berlin, Germany", mode: "Hybrid",
      skills: ["Docker", "Kubernetes", "CI/CD"], postedDate: "1 day ago", logo: "CO", experience: "2-3 years"
    },
    {
      id: 15, title: "Frontend Intern", company: "InnoSoft", location: "Remote", mode: "Remote",
      skills: ["HTML", "CSS", "JavaScript"], postedDate: "2 days ago", logo: "IS", experience: "Freshers"
    },
    {
      id: 16, title: "QA Analyst", company: "TestifyTech", location: "Vasco, Goa", mode: "Offline",
      skills: ["Selenium", "Manual Testing", "JIRA"], postedDate: "4 days ago", logo: "TT", experience: "1-2 years"
    },
    {
      id: 17, title: "Data Engineer", company: "BigDataX", location: "Nagpur, Maharashtra", mode: "Remote",
      skills: ["Spark", "Hadoop", "Python"], postedDate: "6 days ago", logo: "BDX", experience: "3-5 years"
    },
    {
      id: 18, title: "Technical Recruiter", company: "HireWise", location: "Panaji, Goa", mode: "Offline",
      skills: ["ATS", "Interviewing", "Negotiation"], postedDate: "1 day ago", logo: "HW", experience: "2-4 years"
    },
    {
      id: 19, title: "Graphic Designer", company: "PixelPush", location: "Remote", mode: "Remote",
      skills: ["Illustrator", "Photoshop", "Branding"], postedDate: "7 days ago", logo: "PP", experience: "1-3 years"
    },
    {
      id: 20, title: "Cloud Architect", company: "SkyNetWorks", location: "Pune, Maharashtra", mode: "Hybrid",
      skills: ["AWS", "Azure", "Cloud Security"], postedDate: "2 days ago", logo: "SN", experience: "5-8 years"
    },
    {
      id: 21, title: "IT Support Engineer", company: "Supportly", location: "Mapusa, Goa", mode: "Offline",
      skills: ["Tech Support", "Windows", "Troubleshooting"], postedDate: "3 days ago", logo: "SP", experience: "0-2 years"
    },
    {
      id: 22, title: "ML Engineer", company: "VisionAI", location: "Kolhapur, Maharashtra", mode: "Remote",
      skills: ["Python", "Pandas", "Computer Vision"], postedDate: "4 days ago", logo: "VAI", experience: "2-4 years"
    },
    {
      id: 23, title: "Social Media Manager", company: "ViralMint", location: "Mumbai, Maharashtra", mode: "Hybrid",
      skills: ["Instagram", "Brand Strategy", "Content Calendar"], postedDate: "5 days ago", logo: "VM", experience: "3-5 years"
    },
    {
      id: 24, title: "Technical Writer", company: "DocuBytes", location: "Panaji, Goa", mode: "Offline",
      skills: ["Markdown", "API Docs", "English"], postedDate: "6 days ago", logo: "DB", experience: "1-2 years"
    },
    {
      id: 25, title: "Software Architect", company: "MacroSoft", location: "Remote", mode: "Remote",
      skills: ["System Design", "Microservices", "Node.js"], postedDate: "7 days ago", logo: "MS", experience: "8+ years"
    },
    {
      id: 26, title: "UI Designer", company: "Creatify", location: "Margao, Goa", mode: "Hybrid",
      skills: ["Figma", "Illustrator", "Prototyping"], postedDate: "3 days ago", logo: "CF", experience: "1-3 years"
    },
    {
      id: 27, title: "Python Developer", company: "PyLogic", location: "Aurangabad, Maharashtra", mode: "Offline",
      skills: ["Python", "Flask", "REST"], postedDate: "2 days ago", logo: "PL", experience: "2-3 years"
    },
    {
      id: 28, title: "Business Analyst", company: "AnalytIQ", location: "Remote", mode: "Remote",
      skills: ["Excel", "Dashboards", "Stakeholder Mgmt"], postedDate: "1 day ago", logo: "AQ", experience: "1-3 years"
    },
    {
      id: 29, title: "Data Analyst", company: "Insightly", location: "Kolhapur, Maharashtra", mode: "Offline",
      skills: ["Excel", "SQL", "Visualization"], postedDate: "3 days ago", logo: "IS", experience: "1-2 years"
    },
    {
      id: 30, title: "Game Developer", company: "FunBytes", location: "Remote", mode: "Remote",
      skills: ["Unity", "C#", "3D Modelling"], postedDate: "6 days ago", logo: "FB", experience: "2-5 years"
    },
    {
      id: 31, title: "Legal Advisor", company: "JustLegal", location: "Mumbai, Maharashtra", mode: "Offline",
      skills: ["Compliance", "Contracts", "Documentation"], postedDate: "4 days ago", logo: "JL", experience: "4-6 years"
    },
    {
      id: 32, title: "Operations Manager", company: "OpsPro", location: "Vasco, Goa", mode: "Offline",
      skills: ["Operations", "Leadership", "Team Mgmt"], postedDate: "1 day ago", logo: "OP", experience: "5+ years"
    },
    {
      id: 33, title: "Customer Support Executive", company: "CallLine", location: "Panjim, Goa", mode: "Hybrid",
      skills: ["Communication", "CRM", "Email Support"], postedDate: "2 days ago", logo: "CL", experience: "0-1 years"
    },
    {
      id: 34, title: "IT Auditor", company: "AuditSecure", location: "Bombay, Maharashtra", mode: "Offline",
      skills: ["Auditing", "IT Compliance", "Risk Assessment"], postedDate: "3 days ago", logo: "AS", experience: "3-5 years"
    },
    {
      id: 35, title: "Ecommerce Manager", company: "ShopifyX", location: "Remote", mode: "Remote",
      skills: ["Product Listings", "Ads", "Shopify"], postedDate: "4 days ago", logo: "SX", experience: "2-4 years"
    },
    {
      id: 36, title: "Data Visualization Specialist", company: "Chartify", location: "Pune, Maharashtra", mode: "Hybrid",
      skills: ["Power BI", "Tableau", "SQL"], postedDate: "6 days ago", logo: "CH", experience: "2-3 years"
    }
  ];
  

export const AVAILABLE_SKILLS: string[] = [
    'React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind',
    'Node.js', 'Python', 'Java', 'C#', 'UI/UX', 'Figma',
    'SQL', 'MongoDB', 'AWS', 'Docker', 'Git', 'Redux',
    'Network Security', 'SIEM', 'Threat Detection', 'Laravel', 'Vue.js', 'Prototyping',
    'SEO', 'Google Ads', 'Social Media', 'Analytics', 'Salesforce', 'CRM', 'Negotiation',
    'Recruiting', 'Onboarding', 'HR Software', 'Content Writing', 'SEO Writing', 'Editing'
];

export const AVAILABLE_LOCATIONS: string[] = [
    'Remote', 'San Francisco, CA', 'New York, NY', 'London, UK',
    'Berlin, Germany', 'Tokyo, Japan', 'Toronto, Canada', 'Panjim, Goa',
    'Bangalore, India', 'Sydney, Australia', 'Austin, TX', 'Bombay, Maharashtra'
];

// Mock Stats Data
export const DASHBOARD_STATS = {
    applications: { count: 7, inProgress: 3 },
    interviews: { count: 2, next: 'Tomorrow, 3PM', mode: 'Offline', location: 'Panjim convention center, Panjim, Goa' },
    savedJobs: { count: 12, newMatches: 5 },
};