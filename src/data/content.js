// Single source of truth for site copy.
// Every field here is drawn directly from the resume, certificates, or
// facts explicitly provided by Vansh in conversation. Nothing invented.

export const profile = {
  name: 'Vansh Chopra',
  role: 'Software Engineer',
  rolesRotating: [
    'Building scalable software systems.',
    'Designing databases that scale.',
    'Turning real-world data into useful products.',
    'Engineering backend systems end-to-end.',
  ],
  education: 'Delhi Technological University · B.Tech, Computer Science Engineering',
  gradYear: '2027',
  cgpa: '9.44',
  sgpa: '10.0',
  email: 'vanshchopra4122@gmail.com',
  phone: '7027814000',
  github: 'https://github.com/Vanshchopra777',
  linkedin: 'https://www.linkedin.com/in/vansh-chopra-a11619331/',
  location: 'New Delhi, India',
  // Live flagship product — surfaced alongside GitHub/LinkedIn as a quick link.
  liveProjectUrl: 'https://jac-delhi-college-predictor-1.onrender.com/',
  // Google Drive resume — swap the file in Drive to update the resume site-wide, no code change needed.
  resumeUrl: 'https://docs.google.com/document/d/1v1PkzFu0LAZf14_TrKelVu23Ptlrt1YN/edit?usp=sharing&ouid=118130886396223340066&rtpof=true&sd=true',
}

export const heroStats = [
  { value: '9.44', label: 'CGPA' },
  { value: '10.0', label: 'Latest SGPA' },
  { value: '450+', label: 'DSA problems solved' },
  { value: 'Top 1%', label: 'NPTEL Python (99/100)' },
]

export const skills = {
  Programming: ['C++', 'Python', 'Java', 'JavaScript', 'PHP', 'C', 'SQL'],
  'Frontend': ['React', 'Vite', 'HTML5', 'CSS3', 'JavaScript'],
  'Backend': ['FastAPI', 'PHP', 'REST APIs'],
  'Data & AI': ['NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn', 'Machine Learning', 'Deep Learning (NN)'],
  Database: ['MySQL', 'Firebase'],
  'Tools & Cloud': ['Git', 'GitHub', 'Linux', 'VS Code', 'Railway', 'Render'],
}

export const achievements = [
  { value: 'University Winner', label: 'Smart India Hackathon 2025 — National Semi-Finalist' },
  { value: '450+', label: 'DSA problems across LeetCode & Striver SDE Sheet' },
  { value: 'Top 1%', label: 'NPTEL Joy of Computing using Python (99/100)' },
  { value: '100/100', label: 'NPTEL Human-Computer Interaction — Gold Certificate (IIIT Delhi)' },
  { value: 'Top Performer', label: 'Coding Ninjas — Data Science & ML Program' },
  { value: '10.0 SGPA', label: 'Latest semester at DTU' },
]

export const timelineData = [
  { date: 'Aug 2023', text: 'Joined Delhi Technological University — B.Tech, Computer Science Engineering' },
  { date: 'Sep 2023', text: 'Elected Hostel President — coordinated administration & grievance resolution for resident students' },
  { date: 'Jan 2024', text: 'Completed the Machine Learning Specialization (Stanford Online / DeepLearning.AI)' },
  { date: 'Aug 2024', text: 'Elected Class Representative by 70+ students' },
  { date: 'May 2025', text: 'Shipped the Student Internship & Job Tracking System' },
  { date: 'Aug 2025', text: 'Earned HackerRank Advanced SQL certification' },
  { date: 'Sep 2025', text: 'Smart India Hackathon 2025 — University Winner, National Semi-Finalist' },
  { date: 'Oct 2025', text: 'Built PresencePulse, a multi-factor attendance verification system' },
  { date: 'Jan 2026', text: 'Selected for the NPTEL Winter Internship under Prof. Sudarshan Iyengar, IIT Ropar' },
  { date: '2026', text: 'Designed and shipped the JAC Delhi College Predictor, now live in production' },
  { date: '2026', text: 'Selected for Bain & Company\u2019s BrainWars case competition — Team Strategic4' },
]

export const leadership = [
  {
    title: 'Class Representative',
    period: 'Aug 2024 – Present',
    metric: '70+ students',
    detail: 'Elected by 70+ students with 90%+ support; primary faculty–student liaison.',
    points: [
      'Elected by direct student vote with over 90% support',
      'Acts as the primary communication channel between the CSE cohort and faculty',
      'Ongoing role — ~2 years of continuous responsibility alongside coursework',
    ],
  },
  {
    title: 'Hostel President',
    period: 'Sep 2023 – Oct 2024',
    metric: '1 year tenure',
    detail: 'Represented resident students, coordinating hostel administration and grievance resolution with university authorities.',
    points: [
      'Represented resident students in dealings with hostel administration',
      'Coordinated grievance resolution between students and university authorities',
      'Held the role for a full academic year during first/second year of college',
    ],
  },
  {
    title: 'Bharat Vikas Parishad — Community Impact',
    period: '',
    metric: '500+ individuals',
    detail: 'Led social welfare initiatives benefiting 500+ individuals through community outreach programs.',
    points: [
      'Led social welfare initiatives through a community outreach organization',
      'Programs reached and benefited 500+ individuals',
    ],
  },
  {
    title: 'Smart India Hackathon 2025',
    period: 'Sep 2025',
    metric: 'Team of 6',
    detail: 'Led engineering contribution within Team Spark_X, taking the team from a university win to a national semi-final placement.',
    points: [
      'Contributed as one of six members of Team Spark_X, DTU',
      'Team won the university-level internal round',
      'Advanced to the national semi-final round of SIH 2025',
    ],
  },
]

export const certifications = [
  {
    name: 'SQL (Advanced)',
    issuer: 'HackerRank Skill Certification',
    date: '09 Aug 2025',
    credentialId: '204FE0EC9977',
    skills: ['Advanced SQL', 'Query Optimization', 'Joins & Subqueries'],
    image: 'sql-cert.jpg',
  },
  {
    name: 'The Joy of Computing using Python',
    issuer: 'NPTEL / IIT Madras',
    date: 'Jul–Oct 2025',
    credentialId: 'NPTEL25CS103S1065403032',
    achievement: 'Elite, Top 1% Nationwide (99/100)',
    skills: ['Python', 'Problem Solving', 'Computational Thinking'],
    image: 'joy-of-computing-cert.jpg',
  },
  {
    name: 'Supervised Machine Learning: Regression and Classification',
    issuer: 'DeepLearning.AI & Stanford Online',
    instructor: 'Andrew Ng',
    platform: 'Coursera',
    date: '30 Dec 2023',
    skills: ['Linear Regression', 'Logistic Regression', 'Gradient Descent'],
    image: 'ml-supervised-cert.jpg',
  },
  {
    name: 'Advanced Learning Algorithms',
    issuer: 'DeepLearning.AI & Stanford Online',
    instructor: 'Andrew Ng',
    platform: 'Coursera',
    date: '2 Jan 2024',
    skills: ['Neural Networks', 'Decision Trees', 'Model Evaluation'],
    image: 'ml-advanced-cert.jpg',
  },
  {
    name: 'Unsupervised Learning, Recommenders, Reinforcement Learning',
    issuer: 'DeepLearning.AI & Stanford Online',
    instructor: 'Andrew Ng',
    platform: 'Coursera',
    date: '8 Jan 2024',
    skills: ['Clustering', 'Anomaly Detection', 'Recommender Systems', 'Reinforcement Learning'],
    image: 'ml-unsupervised-cert.jpg',
  },
  {
    name: 'Machine Learning Specialization',
    issuer: 'DeepLearning.AI & Stanford Online',
    instructor: 'Andrew Ng',
    platform: 'Coursera',
    date: '8 Jan 2024',
    achievement: 'All 3 courses completed',
    skills: ['Supervised Learning', 'Unsupervised Learning', 'Applied ML Best Practices'],
    image: 'ml-specialization-cert.jpg',
  },
  {
    name: 'Human-Computer Interaction',
    issuer: 'NPTEL / IIIT Delhi',
    date: 'Jan–Apr 2026',
    credentialId: 'NPTEL26CS70S262404917',
    achievement: 'Elite, Gold — 100/100',
    skills: ['User-Centered Design', 'Usability', 'Interaction Design'],
    image: 'hci-cert.jpg',
  },
]

export const codingProfiles = [
  {
    platform: 'GitHub',
    handle: 'Vanshchopra777',
    url: 'https://github.com/Vanshchopra777',
    stat: null,
    statLabel: 'Live profile — connect to show contribution graph',
    live: true,
  },
  {
    platform: 'LeetCode',
    handle: null,
    url: null,
    stat: '450+',
    statLabel: 'DSA problems solved (across LeetCode & Striver SDE Sheet, per resume)',
    live: false,
  },
  {
    platform: 'HackerRank',
    handle: null,
    url: null,
    stat: 'Advanced',
    statLabel: 'SQL (Advanced) certified — see Certifications',
    live: false,
  },
  {
    platform: 'Coding Ninjas',
    handle: null,
    url: null,
    stat: 'Top Performer',
    statLabel: 'Data Science & Machine Learning Program',
    live: false,
  },
]

// ---- Flagship project: JAC Delhi College Predictor ----
export const jacProject = {
  slug: 'jac-delhi-college-predictor',
  name: 'JAC Delhi College Predictor',
  tagline: 'Know your college before counselling does.',
  summary:
    'A full-stack web application that predicts eligible engineering colleges and branches for JAC Delhi counselling, replacing manual comparison of hundreds of cutoff PDFs with an instant, filtered prediction.',
  liveUrl: 'https://jac-delhi-college-predictor-1.onrender.com/',
  githubUrl: 'https://github.com/Vanshchopra777/jac-delhi-college-predictor',
  status: 'Live · Deployed',
  timeline: 'Built and iterated 2026',
  stack: {
    Frontend: ['React', 'Vite', 'JavaScript', 'CSS'],
    Backend: ['FastAPI (Python)'],
    Database: ['MySQL'],
    Deployment: ['Railway (MySQL)', 'Render (Backend)', 'Render Static Site (Frontend)'],
  },
  metrics: [
    { value: '4,046+', label: 'Historical cutoff records' },
    { value: '55', label: 'Engineering branches' },
    { value: '4', label: 'Universities covered' },
    { value: '2', label: 'Counselling years compared (2024 & 2025)' },
  ],
  universities: ['DTU', 'NSUT', 'IIIT Delhi', 'IGDTUW'],
  datasetDimensions: ['Categories', 'Quotas', 'Gender pools', 'Home regions', 'Counselling rounds'],
  problem: {
    heading: 'The problem',
    body: [
      'Every year, JAC Delhi releases counselling cutoffs as scattered PDFs — one per university, per round, per category. A student trying to gauge their real chances has to manually cross-reference dozens of these documents against their own rank, category, quota, gender and home-region combination.',
      'The result: most students either under-apply out of caution, or find out too late that a branch they dismissed was actually within reach. There was no single tool that unified DTU, NSUT, IIIT Delhi and IGDTUW cutoff data into one queryable system.',
    ],
  },
  howItWorks: {
    heading: 'How it works',
    body: 'A student enters their rank, category, quota, gender, home region and counselling round. The backend filters the historical dataset along all five dimensions, compares the rank against the resulting closing-rank distribution, and classifies each eligible branch as Safe, Moderate or Tough — alongside the actual prior-year cutoff it was measured against.',
  },
  predictionLogic: {
    heading: 'Prediction logic',
    approach: 'Rules-based, not machine learning.',
    body: [
      'The core logic is deliberately not a black-box model. Given the stakes — a real admission decision — a transparent, explainable comparison against historical closing ranks was the right engineering choice over an ML model that would be harder to justify to a worried 18-year-old.',
      'The backend filters historical records by category, quota, gender and home region, then evaluates where the student\u2019s rank falls relative to the closing rank trend across the two most recent counselling years, and classifies the result as Safe, Moderate, or Tough.',
    ],
  },
  etlPipeline: {
    heading: 'ETL pipeline',
    body: 'One of the more technically involved parts of the system: official JAC Delhi cutoff PDFs differ in layout between universities and years. A set of ETL scripts extracts, cleans and normalizes this data before loading it into MySQL.',
    stages: [
      'Official JAC Delhi cutoff PDFs',
      'PDF extraction',
      'Cleaning & normalization',
      'ETL scripts (schema mapping across university formats)',
      'Unified dataset',
      'MySQL database',
      'FastAPI REST APIs',
      'React frontend',
    ],
  },
  database: {
    heading: 'Database design',
    body: 'The schema is normalized around lookup tables for the dimensions that filter every query, with cutoff records as the central fact table referencing them by foreign key — avoiding redundant text data (branch names, category codes) repeated across thousands of rows.',
    entities: [
      'Universities',
      'Branches',
      'Categories',
      'Quotas',
      'Gender pools',
      'Home regions',
      'Counselling rounds',
      'Cutoff records (fact table)',
    ],
  },
  api: {
    heading: 'API design',
    body: 'FastAPI exposes REST endpoints consumed by the React frontend, with automatically generated Swagger/OpenAPI documentation.',
    endpoints: [
      'College prediction',
      'College cutoff trends',
      'Universities',
      'Branches',
      'College information',
    ],
  },
  features: [
    'Rank, category, quota, gender & region filtering',
    'Cross-checks both 2024 and 2025 cutoffs, not a single year',
    'Safe / Moderate / Tough classification per branch',
    'Previous-year cutoff comparison for transparency',
    'College information: placements, fees, hostel, official links, maps',
    'Interactive college directory ("Colleges" panel)',
    'Fully cloud-deployed across three services',
  ],
  challenges: [
    {
      title: 'Inconsistent PDF formats across universities',
      body: 'Each university publishes cutoffs in a different layout. The ETL scripts had to normalize these into one schema before anything could be queried consistently.',
    },
    {
      title: 'Designing a normalized relational schema',
      body: 'With five independent filter dimensions (category, quota, gender, region, round), the schema needed lookup tables and foreign keys to stay queryable without duplicating data across thousands of cutoff rows.',
    },
    {
      title: 'Multi-year prediction logic',
      body: 'Comparing a single year of cutoffs against a rank is misleading — cutoffs shift year to year. The system checks both 2024 and 2025 data so a prediction isn\u2019t a bet on one year\u2019s numbers.',
    },
    {
      title: 'Environment-based cloud deployment',
      body: 'The frontend, backend and database each live on a different service (Render, Render, Railway), which meant getting environment-based configuration and CORS right across three separately deployed pieces.',
    },
  ],
  futureScope: [
    'Expand dataset coverage to additional participating institutes',
    'Add a public GitHub repository with setup instructions',
    'Historical trend charts per branch across more counselling years',
    'Codeforces-style rank percentile visualization',
  ],
}

export const highlights = [
  {
    id: 'sih',
    badge: '🏆',
    title: 'Smart India Hackathon 2025',
    result: 'University Winner · National Semi-Finalist',
    period: 'Sep 2025',
    summary:
      'Competed as part of Team Spark_X (Team ID 83134) representing DTU, alongside five teammates under team lead Vedansh Gupta. The team won the university-level internal round and advanced to the national semi-final round of SIH 2025.',
    facts: [
      { label: 'Team', value: 'Spark_X' },
      { label: 'Team ID', value: '83134' },
      { label: 'Result', value: 'University Winner, National Semi-Finalist' },
    ],
    evidence: [
      { file: 'sih-team-detail.jpg', caption: 'Official SIH 2025 team registration — Team Spark_X, DTU', ratio: 'dashboard', fit: 'contain' },
      { file: 'sih-certificate.jpg', caption: 'Internal round certificate of appreciation', ratio: 'certificate', fit: 'contain' },
    ],
    reflectionPlaceholder: true,
  },
  {
    id: 'brainwars',
    badge: '💼',
    title: 'Bain & Company BrainWars 2026',
    result: 'Selected — Team Strategic4',
    period: '2026',
    summary:
      'Selected as one of a small number of DTU teams to advance in Bain & Company\u2019s BrainWars case competition. Competed as Team Strategic4 (with Yashit Jain, Yatharth Sachdeva and Shivang Niranjan) on a go-to-market case for a wearable-tech company, "PulseX," entering the Indian premium wearables market.',
    facts: [
      { label: 'Team', value: 'Strategic4' },
      { label: 'Teammates', value: 'Yashit Jain, Yatharth Sachdeva, Shivang Niranjan' },
      { label: 'Case', value: 'PulseX — India GTM Blueprint' },
    ],
    caseHighlights: [
      'Dual-product pricing strategy (Watch + Ring) recalibrated for the Indian market from NA pricing',
      'Channel mix design: D2C digital for the Watch, a gym-partnership funnel for the Ring to drive software attach',
      'A $12M capped GTM budget allocated line-by-line, with COGS financed separately via EMS trade credit',
      'Positioned India\u2019s DPDP data-protection compliance as a competitive moat rather than just a cost',
      'Modeled a full Year 1 P&L: $34.2M blended revenue at 51.6% gross margin',
    ],
    evidence: [
      { file: 'brainwars-cover.jpg', caption: 'Case Part 2 submission cover — Team Strategic4', ratio: 'slide', fit: 'contain' },
      { file: 'brainwars-selection.jpg', caption: 'DTU team selection sheet — Strategic4 highlighted', ratio: 'slide', fit: 'contain' },
    ],
    reflectionPlaceholder: true,
  },
  {
    id: 'iit-ropar',
    badge: '🎓',
    title: 'IIT Ropar — NPTEL Winter Internship',
    result: 'Selected',
    period: 'Starts 22 Jan 2026',
    summary:
      'Selected for a 10-week virtual winter internship under Prof. Sudarshan Iyengar (IIT Ropar), offered through NPTEL to students who reached Topper / Elite+Gold in his courses — including the Joy of Computing using Python course, which Vansh completed in the Top 1% nationwide (99/100).',
    facts: [
      { label: 'Mentor', value: 'Prof. Sudarshan Iyengar, IIT Ropar' },
      { label: 'Format', value: 'Virtual · 10 weeks' },
      { label: 'Focus', value: 'Applied AI & development workflows' },
      { label: 'Status', value: 'Selected, Batch starting 22 Jan 2026' },
    ],
    evidence: [],
    evidenceNote:
      'Selection email confirmed — not displayed publicly since it contains a personal email address. Happy to add a redacted version.',
    reflectionPlaceholder: false,
  },
]
export const jacScreenshots = [
  { id: 'desktop', file: 'jac-desktop.jpeg', caption: 'Desktop — rank & filter form, live on Render' },
  { id: 'mobile', file: 'jac-mobile.jpg', caption: 'Mobile — responsive layout on a live device' },
]

// ---- Secondary project, kept for future phase ----
export const internshipTrackerProject = {
  slug: 'student-internship-job-tracking-system',
  name: 'Student Internship and Job Tracking System',
  tagline: 'A centralized placement portal for campus recruiting.',
  stack: ['PHP', 'MySQL', 'HTML', 'CSS'],
  period: 'Apr 2025 – May 2025',
  metrics: [
    { value: '1,000+', label: 'Student records' },
    { value: '6', label: 'Relational database tables' },
    { value: '40%', label: 'Reduction in query execution time' },
  ],
  summary:
    'Architected a centralized placement portal managing 1,000+ student records across 6 relational database tables, with end-to-end modules for job postings, application tracking, and automated interview scheduling.',
  screenshots: [
    { id: 'homepage', file: 'homepage.png', caption: 'Job & internship listings' },
    { id: 'applications', file: 'applications.png', caption: 'Student application history' },
    { id: 'apply', file: 'apply.png', caption: 'Application flow' },
  ],
}

export const presencePulseProject = {
  slug: 'presencepulse',
  name: 'PresencePulse',
  tagline: 'Multi-factor attendance and engagement system.',
  stack: ['Python', 'JavaScript', 'Firebase'],
  period: 'Sep 2025 – Oct 2025',
  metrics: [
    { value: '1,000+', label: 'Students synced in real time' },
  ],
  summary:
    'A multi-factor attendance verification system combining ultrasonic audio authentication and facial recognition to prevent proxy attendance, with a real-time Firebase dashboard.',
}
