import { Job, JobSeekerPreferences, AppNotification } from '../types';

export const INITIAL_JOBS: Job[] = [
  {
    id: 'job-1',
    title: 'Customer Support Executive (Voice)',
    company: 'Apex Connect BPO',
    location: 'Muzaffarpur Hub / Hybrid',
    workMode: 'Hybrid',
    salary: '₹18,000 – ₹28,000/mo',
    salaryMin: 18000,
    salaryMax: 28000,
    employmentType: 'Full-time',
    tags: ['Fresher Friendly', 'Inbound Calls', 'Hindi & English'],
    postedTime: 'Posted 30m ago',
    applyType: '1-click',
    iconType: 'headset',
    isFresherFriendly: true,
    isVerified: true,
    description: 'We are seeking energetic Customer Support Executives to join our Muzaffarpur regional hub. You will handle inbound queries, assist e-commerce customers, and deliver top-tier client satisfaction.',
    requirements: [
      'Fluent in Hindi & functional English communication',
      'Basic computer navigation and data entry skill',
      'Freshers and experienced candidates both welcome',
      'Available for morning and afternoon rotational shifts'
    ],
    responsibilities: [
      'Handle 60-80 inbound customer inquiries per day',
      'Log customer feedback into our CRM system',
      'Escalate high-priority tickets to regional managers',
      'Maintain an average resolution score above 92%'
    ],
    benefits: [
      'Performance incentives up to ₹6,000/month',
      'Comprehensive paid training for freshers (15 days)',
      'Subsidized transport facility within Muzaffarpur city limits',
      'Health insurance cover for employee & parents'
    ],
    recruiterName: 'Pooja Verma (HR Lead, Apex Connect)'
  },
  {
    id: 'job-2',
    title: 'Junior Frontend / Web Designer',
    company: 'CloudMatrix Studio',
    location: 'Remote / Patna',
    workMode: 'Remote',
    salary: '₹25,000 – ₹45,000/mo',
    salaryMin: 25000,
    salaryMax: 45000,
    employmentType: 'Full-time',
    tags: ['Immediate Joiner', 'Figma to Code', 'React/Tailwind'],
    postedTime: 'Posted 1h ago',
    applyType: 'easy',
    iconType: 'code',
    isImmediateJoiner: true,
    isVerified: true,
    description: 'CloudMatrix Studio is looking for a creative Junior Frontend Developer & Web Designer with a flair for modern web apps. Convert high-fidelity Figma designs into responsive React components.',
    requirements: [
      'Strong command of HTML5, CSS3, modern JavaScript/TypeScript',
      'Hands-on experience with React.js and Tailwind CSS',
      'Portfolio showcasing at least 2 real web projects or Figma prototypes',
      'Can start within 7 days (Immediate joiner priority)'
    ],
    responsibilities: [
      'Build responsive, mobile-first interfaces for client web apps',
      'Collaborate with backend engineers to integrate REST APIs',
      'Maintain clean code structure and reusable design tokens',
      'Optimize web performance and accessibility'
    ],
    benefits: [
      '100% remote flexibility with home workstation stipend',
      'Direct mentorship from Senior Product Engineers',
      'Bi-annual performance salary appraisal',
      'Paid learning subscriptions (Frontend Masters, Coursera)'
    ],
    recruiterName: 'Rohan Sinha (Design Partner, CloudMatrix)'
  },
  {
    id: 'job-3',
    title: 'Senior Flutter Developer',
    company: 'FinTech Orbit',
    location: 'Muzaffarpur / Remote',
    workMode: 'Remote',
    salary: '₹8 – 14 LPA',
    salaryMin: 800000,
    salaryMax: 1400000,
    employmentType: 'Full-time',
    tags: ['3–5 Yrs Exp', 'State Management', 'FinTech App'],
    postedTime: 'Posted 2h ago',
    applyType: 'easy',
    iconType: 'mobile',
    isVerified: true,
    description: 'Architect and scale our flagship rural banking and UPI payments application built with Flutter. Serve over 1.5 million monthly transacting users across Bihar, Jharkhand, and UP.',
    requirements: [
      '3+ years of professional mobile app development in Flutter & Dart',
      'Deep expertise in Bloc or Riverpod state management',
      'Proven experience integrating secure payment gateways & biometric auth',
      'Published at least one top-ranking app on Google Play Store'
    ],
    responsibilities: [
      'Lead the mobile architecture team for fast offline-first sync',
      'Refactor core payment modules for sub-200ms latency',
      'Conduct rigorous code reviews and mentor junior developers',
      'Ensure strict RBI data compliance and encryption standards'
    ],
    benefits: [
      'Generous ESOP pool allocation after 6 months',
      'MacBook Pro M-series workstation provided',
      'Annual tech conference travel sponsorship',
      'Flexible working hours & wellness stipend'
    ],
    recruiterName: 'Amitav Roy (VP Engineering, FinTech Orbit)'
  },
  {
    id: 'job-4',
    title: 'Digital Marketing Specialist',
    company: 'GrowthCrafters',
    location: 'Patna / Hybrid',
    workMode: 'Hybrid',
    salary: '₹4.5 – 7 LPA',
    salaryMin: 450000,
    salaryMax: 700000,
    employmentType: 'Full-time',
    tags: ['Urgent Hiring', 'Meta & Google Ads', 'Performance ROI'],
    postedTime: 'Posted Today',
    applyType: 'apply-now',
    iconType: 'marketing',
    isUrgent: true,
    isVerified: true,
    description: 'Lead high-ROI digital performance campaigns across Meta, Google Search, and regional vernacular channels for high-growth consumer brands expanding in Tier 2/3 markets.',
    requirements: [
      '2+ years managing paid ad spends exceeding ₹5 Lakhs/month',
      'Proficiency with Meta Ads Manager, Google Analytics 4, and Semrush',
      'Strong analytical mindset with deep A/B testing methodology',
      'Experience in creative copywriting and UGC video direction'
    ],
    responsibilities: [
      'Plan, execute, and optimize paid ad funnels across channels',
      'Track CPA, CAC, and ROAS across customer segments',
      'Produce creative briefs for design and video editing teams',
      'Deliver weekly analytical growth decks to company founders'
    ],
    benefits: [
      'Performance bonuses linked directly to campaign ROAS',
      'Hybrid work model (2 days office in Patna boring road, 3 days WFH)',
      'Health cover and annual wellness leave',
      'Access to premium marketing tools and masterclasses'
    ],
    recruiterName: 'Neha Shrivastava (Head of Talent, GrowthCrafters)'
  },
  {
    id: 'job-5',
    title: 'Operations & Logistics Lead',
    company: 'BharatExpress',
    location: 'Muzaffarpur Hub',
    workMode: 'On-site (Hub)',
    salary: '₹5 – 8.5 LPA',
    salaryMin: 500000,
    salaryMax: 850000,
    employmentType: 'Full-time',
    tags: ['Verified Employer', 'Supply Chain', 'Fleet Management'],
    postedTime: 'Posted 1d ago',
    applyType: 'apply-now',
    iconType: 'truck',
    isVerified: true,
    description: 'Oversee dispatch operations, 3PL hub routing, and last-mile delivery fleet for North Bihar’s fastest-growing express freight and quick-commerce network.',
    requirements: [
      'Graduate with 3+ years in logistics, supply chain, or courier operations',
      'Demonstrated experience handling warehouse staff and delivery partners',
      'Proficiency with ERP inventory management and route-optimization software',
      'Muzaffarpur resident or ready to relocate immediately'
    ],
    responsibilities: [
      'Manage day-to-day warehouse inflow, sorting, and dispatch schedules',
      'Coordinate with 40+ delivery drivers across Muzaffarpur, Sitamarhi & Vaishali',
      'Minimize transit losses and maintain delivery TAT under 24 hours',
      'Enforce hub safety protocols and vehicle maintenance checks'
    ],
    benefits: [
      'Company vehicle allowance & fuel reimbursement',
      'Quarterly operational milestone bonuses',
      'Group medical insurance for complete family',
      'Clear career progression to Regional Logistics Director'
    ],
    recruiterName: 'Sunil Kumar Jha (Operations Director, BharatExpress)'
  },
  {
    id: 'job-6',
    title: 'Operations & Field Coordinator',
    company: 'Muzaffarpur Smart Infra',
    location: 'Muzaffarpur Smart City',
    workMode: 'On-site (Hub)',
    salary: '₹20,000 – ₹32,000/mo',
    salaryMin: 20000,
    salaryMax: 32000,
    employmentType: 'Full-time',
    tags: ['Walk-in Today', 'Civil Infra', 'Site Supervision'],
    postedTime: 'Posted 4h ago',
    applyType: 'easy',
    iconType: 'building',
    isWalkIn: true,
    isVerified: true,
    description: 'Supervise daily municipal infrastructure works, fiber deployment, and contractor timelines for smart urban civic initiatives across Muzaffarpur town.',
    requirements: [
      'Diploma or Degree in Civil Engineering / Electrical / General Graduate',
      'Valid driving license and two-wheeler for local site visits',
      'Good liaison ability with site contractors and vendors',
      'Immediate walk-in interviews running at Tilak Maidan office'
    ],
    responsibilities: [
      'Conduct daily site inspections across allocated urban sectors',
      'Report vendor progress and quality verification reports via app',
      'Ensure safety standards and barrier placement during road excavations',
      'Coordinate material deliveries with central store yards'
    ],
    benefits: [
      'Daily fuel and mobile communication allowance',
      'Provident Fund (PF) + ESI government benefits',
      'Annual Diwali bonus and protective gear kit provided'
    ],
    recruiterName: 'Er. Rajesh Ranjan (Project Officer, MSI)'
  },
  {
    id: 'job-7',
    title: 'Tally ERP & Senior Accounts Executive',
    company: 'Mithila Agro Industries',
    location: 'Muzaffarpur Industrial Area',
    workMode: 'On-site (Hub)',
    salary: '₹22,000 – ₹35,000/mo',
    salaryMin: 22000,
    salaryMax: 35000,
    employmentType: 'Full-time',
    tags: ['Tally Prime', 'GST Filing', 'Banking Reconciliation'],
    postedTime: 'Posted 5h ago',
    applyType: 'easy',
    iconType: 'briefcase',
    isVerified: true,
    description: 'Lead day-to-day book-keeping, GST returns filing, vendor payouts, and bank reconciliation for an established agricultural processing conglomerate.',
    requirements: [
      'B.Com / M.Com with 2+ years practical accounting experience',
      'Mastery of Tally Prime, MS Excel (VLOOKUP, Pivot Tables)',
      'Hands-on knowledge of GST returns (GSTR-1, 3B) and TDS provisions',
      'High integrity with punctual ledger closing discipline'
    ],
    responsibilities: [
      'Enter purchase invoices, sales orders, and journal vouchers in Tally',
      'Perform monthly bank and vendor account reconciliations',
      'Prepare GST documentation for Chartered Accountant submission',
      'Process factory employee payroll and contractor disbursement'
    ],
    benefits: [
      'Fixed daytime shifts (9:30 AM – 6:00 PM)',
      'Subsidized factory lunch canteen',
      'Annual festival bonus and provident fund'
    ],
    recruiterName: 'Vikas Agarwal (Finance Director)'
  },
  {
    id: 'job-8',
    title: 'Fullstack React & Node.js Engineer',
    company: 'BihariTech Innovations',
    location: 'Patna / Remote',
    workMode: 'Remote',
    salary: '₹9 – 16 LPA',
    salaryMin: 900000,
    salaryMax: 1600000,
    employmentType: 'Full-time',
    tags: ['Next.js', 'PostgreSQL', 'TypeScript'],
    postedTime: 'Posted 6h ago',
    applyType: 'easy',
    iconType: 'code',
    isVerified: true,
    description: 'Join our core engineering squad developing scalable SaaS software for regional logistics and educational institutes across Eastern India.',
    requirements: [
      '2+ years building production web apps with React/Next.js and Node.js',
      'Solid database design with PostgreSQL or MongoDB',
      'Familiarity with cloud hosting, Docker, and CI/CD pipelines',
      'Self-driven remote worker with clean communication'
    ],
    responsibilities: [
      'Build end-to-end features from database schemas to responsive UI',
      'Write automated unit and integration tests',
      'Participate in architecture design and sprint grooming'
    ],
    benefits: [
      'Flexible remote schedule with high autonomy',
      'Generous tech stipend for hardware and monitors',
      'Health insurance cover for employee & spouse'
    ],
    recruiterName: 'Saurabh Kumar (CTO, BihariTech)'
  }
];

export const INITIAL_PREFERENCES: JobSeekerPreferences = {
  highestQualification: 'B.Tech / B.E. (Computer Science / IT)',
  collegeOrUniversity: 'Babasaheb Bhimrao Ambedkar Bihar University',
  graduationYear: '2024',
  skills: ['React.js', 'Java', 'Python', 'UI/UX'],
  interestedFields: ['Software Engineer', 'Data Analyst'],
  preferredEnvironment: 'Remote',
  expectedCtcLpa: 6.5,
  isSalaryNegotiable: true,
  targetLocations: ['Muzaffarpur, Bihar', 'Bengaluru, Karnataka'],
  willingToRelocate: true,
  resumeFileName: 'Aman_Sharma_CV_2025.pdf',
  resumeFileSize: '1.8 MB'
};

export const INITIAL_NOTIFICATIONS: AppNotification[] = [
  {
    id: 'notif-1',
    title: 'Application Shortlisted! 🚀',
    message: 'Apex Connect BPO reviewed your profile for Customer Support Executive and sent an interview invite.',
    time: '12m ago',
    read: false,
    type: 'application'
  },
  {
    id: 'notif-2',
    title: 'New Hot Job in Muzaffarpur',
    message: 'FinTech Orbit posted "Senior Flutter Developer" matching your tech skill set.',
    time: '2h ago',
    read: false,
    type: 'job'
  },
  {
    id: 'notif-3',
    title: 'Recruiter Outreach Alert',
    message: 'CloudMatrix Studio talent team viewed your Aman_Sharma_CV_2025.pdf resume.',
    time: '4h ago',
    read: true,
    type: 'recruiter'
  },
  {
    id: 'notif-4',
    title: 'FEJYC Profile Score: 68%',
    message: 'Complete your verification step to unlock 3.2x faster callback prioritization.',
    time: '1d ago',
    read: true,
    type: 'system'
  }
];

export const AVAILABLE_CITIES = [
  { city: 'Muzaffarpur', state: 'Bihar', code: 'BR', isHQ: true },
  { city: 'Patna', state: 'Bihar', code: 'BR' },
  { city: 'Bengaluru', state: 'Karnataka', code: 'KA' },
  { city: 'Delhi NCR', state: 'Delhi', code: 'DL' },
  { city: 'Darbhanga', state: 'Bihar', code: 'BR' },
  { city: 'Gaya', state: 'Bihar', code: 'BR' },
  { city: 'Ranchi', state: 'Jharkhand', code: 'JH' },
  { city: 'Kolkata', state: 'West Bengal', code: 'WB' },
  { city: 'Hyderabad', state: 'Telangana', code: 'TS' },
  { city: 'Pune', state: 'Maharashtra', code: 'MH' }
];

export const QUALIFICATIONS_LIST = [
  'B.Tech / B.E. (Computer Science / IT)',
  'B.Tech / B.E. (Civil / Mechanical / Electrical)',
  'BCA / MCA (Computer Applications)',
  'B.Com / M.Com (Finance & Accounts)',
  'MBA (Marketing, HR or Operations)',
  'B.Sc / M.Sc (Statistics, Physics or Math)',
  'B.A. / M.A. (Mass Comm / Humanities)',
  'Diploma in Engineering / PolyTech',
  'Intermediate / Higher Secondary (10+2)'
];

export const BIHAR_COLLEGES = [
  'Babasaheb Bhimrao Ambedkar Bihar University',
  'Muzaffarpur Institute of Technology (MIT)',
  'National Institute of Technology (NIT Patna)',
  'Indian Institute of Technology (IIT Patna)',
  'Patna University (PU)',
  'Aryabhatta Knowledge University (AKU)',
  'Lalit Narayan Mithila University (LNMU Darbhanga)',
  'Magadh University (Bodh Gaya)',
  'Chandragupt Institute of Management Patna (CIMP)'
];
