export type TabType = 'home' | 'job_seeker' | 'post_job' | 'about';

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  workMode: 'Hybrid' | 'Remote' | 'On-site (Hub)';
  salary: string;
  salaryMin?: number;
  salaryMax?: number;
  employmentType: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  tags: string[];
  postedTime: string;
  applyType: '1-click' | 'easy' | 'apply-now';
  iconType: 'headset' | 'code' | 'mobile' | 'marketing' | 'truck' | 'building' | 'briefcase' | 'database';
  isUrgent?: boolean;
  isFresherFriendly?: boolean;
  isImmediateJoiner?: boolean;
  isVerified?: boolean;
  isWalkIn?: boolean;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  recruiterName: string;
}

export interface JobSeekerPreferences {
  highestQualification: string;
  collegeOrUniversity: string;
  graduationYear: string;
  skills: string[];
  interestedFields: string[];
  preferredEnvironment: 'In-Office' | 'Hybrid' | 'Remote';
  expectedCtcLpa: number;
  isSalaryNegotiable: boolean;
  targetLocations: string[];
  willingToRelocate: boolean;
  resumeFileName: string;
  resumeFileSize: string;
}

export interface FounderInquiry {
  category: 'Job Seeker Help' | 'Recruiter Collab' | 'Verification Support' | 'General Query';
  name: string;
  contact: string;
  message: string;
  createdAt: string;
}

export interface AppNotification {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: 'job' | 'application' | 'recruiter' | 'system';
}
