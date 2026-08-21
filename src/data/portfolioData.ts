import { Project, Experience, Certification, LeetCodeDay, SkillGroup } from '../types';

export const PERSONAL_INFO = {
  name: 'Shambhavi Jha',
  title: 'Data Engineer | Cloud & AI Specialist',
  headline: 'Transforming Complex Data into Actionable Cloud & AI Intelligence',
  bio: 'Computer Science Engineer specializing in scalable data pipelines, cloud architecture on AWS, exploratory data analysis, and LLM integrations. Passionate about building robust systems that extract real-world value from data.',
  email: 'jhashambhavi1905@gmail.com',
  phone: '+91 99554 24049',
  location: 'India',
  education: 'B.Tech CSE @ Vellore Institute of Technology (8.32 CGPA)',
  linkedin: 'https://linkedin.com/in/shambhavijhaaa',
  github: 'https://github.com/Shambhavijha19',
  status: 'Open to High-Impact Opportunities',
  resumeUrl: '/resume.pdf'
};

export const METRICS = [
  { label: 'Data Records Analyzed', value: '10,000+', change: '+100% Data Integrity' },
  { label: 'LeetCode DSA Conquered', value: '100 Days', change: '100+ Problems Solved' },
  { label: 'Academic Excellence', value: '8.32 CGPA', change: 'VIT Bhopal CSE' },
  { label: 'Verified Certifications', value: '18+', change: 'AWS, NPTEL, IBM' },
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Clovertex',
    role: 'Data Engineering Intern',
    type: 'Internship',
    period: 'June 2026 – Present',
    location: 'Hyderabad, India (Hybrid)',
    description: 'Actively contributing to the development of enterprise cloud-based healthcare solutions, enhancing data pipelines and cloud infrastructure.',
    highlights: [
      'Engineered AWS EC2 and cloud computing workflows to improve healthcare data ingestion frameworks.',
      'Gained deep exposure to data engineering pipelines, GenAI models, and enterprise system design in healthcare.',
      'Collaborated cross-functionally with senior data architects to optimize query execution and storage.'
    ],
    skills: ['AWS EC2', 'Data Engineering', 'Generative AI', 'Cloud Architecture', 'Python', 'SQL'],
    badge: 'Latest Role'
  },
  {
    company: 'Indian Space Lab (ISL)',
    role: 'Space Tech Research Intern',
    type: 'Internship',
    period: '2025',
    location: 'India',
    description: 'Selected for the prestigious India Space Week Internship Program focusing on space technology problem-solving and telemetry data handling.',
    highlights: [
      'Analyzed real-world challenges in space technology systems and data capture.',
      'Worked with mentors and research teams on algorithmic processing of mission telemetry.',
      'Strengthened analytical problem-solving under tight computational constraints.'
    ],
    skills: ['Data Analytics', 'Space Tech Research', 'Python', 'Algorithmic Problem Solving'],
    badge: 'Research'
  },
  {
    company: 'Vellore Institute of Technology',
    role: 'B.Tech in Computer Science & Engineering',
    type: 'Education',
    period: 'Oct 2022 – May 2026',
    location: 'Bhopal, India',
    description: 'Undergraduate study focused on Data Structures, Algorithms, Cloud Computing, Database Management Systems, and Artificial Intelligence.',
    highlights: [
      'Maintained a stellar 8.32 CGPA across rigorous computer science curricula.',
      'Completed #100DaysOfCode milestone solving complex DSA problems in Java and Python.',
      'Led multiple full-stack and analytics engineering academic projects.'
    ],
    skills: ['DSA', 'DBMS', 'Operating Systems', 'OOP in Java', 'Cloud Computing', 'SQL'],
    badge: '8.32 CGPA'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'healthcare-analytics',
    title: 'Healthcare Analytics Engine',
    subtitle: 'Clinical Insights & Departmental Load Optimizer',
    description: 'Comprehensive data analytics suite analyzing 10,000+ patient records to detect clinical admission trends, department load, and length of stay patterns.',
    category: 'Data & AI',
    tags: ['Python', 'Pandas', 'Seaborn', 'Matplotlib', 'EDA', 'Jupyter'],
    metrics: ['10k+ Records Cleaned', 'Correlation Heatmaps', 'Bed Occupancy Optimization'],
    highlights: [
      'Handled missing values and outlier anomalies using automated Pandas preprocessing pipelines.',
      'Constructed correlation analysis between demographics, diagnosis codes, and length of stay.',
      'Visualized bed occupancy rates and peak admission surges using dynamic Matplotlib graphs.'
    ],
    githubUrl: 'https://github.com/Shambhavijha19',
    featured: true
  },
  {
    id: 'neontax-calculator',
    title: 'NeonTax — Modern Income Tax Engine',
    subtitle: 'Fiscal Analysis & Regime Comparison',
    description: 'Python & NumPy-powered income tax computational engine supporting Indian FY 2024-25 & 2025-26 tax laws with real-time regime comparison.',
    category: 'Cloud & Analytics',
    tags: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Financial Analytics'],
    metrics: ['Old vs New Regime', 'Slab-wise Breakdown', 'Instant Visualization'],
    highlights: [
      'Engineered multi-tier tax bracket algorithms for dynamic tax slab calculations.',
      'Implemented NumPy vectorized operations for instantaneous fiscal comparisons.',
      'Rendered automated deduction and exemption charts to maximize savings.'
    ],
    githubUrl: 'https://github.com/Shambhavijha19',
    featured: true
  },
  {
    id: 'finance-tracker',
    title: 'Personal Finance & Ledger Tracker',
    subtitle: 'Database-Driven Expense Analytics',
    description: 'Robust web application for daily budgeting, income streams, and transaction ledgering backed by relational database architecture.',
    category: 'Data & AI',
    tags: ['Python', 'MySQL', 'Matplotlib', 'Authentication', 'Full-Stack'],
    metrics: ['Relational Schema', 'Secure Auth', 'Categorical Insights'],
    highlights: [
      'Designed normalized MySQL schema with optimized queries for transaction indexing.',
      'Implemented secure user authentication with password hashing and session management.',
      'Built interactive spending trend visualizers for month-over-month cash flow analysis.'
    ],
    githubUrl: 'https://github.com/Shambhavijha19',
    featured: true
  },
  {
    id: 'lnj-corp',
    title: 'LNJ Corporate Solutions Portal',
    subtitle: 'Enterprise Digital Presence',
    description: 'Modern, high-performance corporate web platform engineered with responsive UI and verified SEO standards.',
    category: 'Web Apps',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'Responsive Design'],
    metrics: ['100% Responsive', 'SEO Optimized', 'Live Client Deployment'],
    highlights: [
      'Engineered fluid responsive layouts with zero layout shifts.',
      'Deployed live at lnjoshics.co.in with modern web performance optimizations.'
    ],
    liveUrl: 'https://lnjoshics.co.in'
  },
  {
    id: 'shreya-nutricare',
    title: 'Nutritional Therapy & Diet Platform',
    subtitle: 'Healthcare & Wellness Tracker',
    description: 'Web application delivering personalized dietary recommendations, patient tracking, and health metrics monitoring.',
    category: 'Web Apps',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Healthcare Tech'],
    metrics: ['Custom Diet Engine', 'Client Management', 'Live Deployment'],
    highlights: [
      'Designed interactive consultation and wellness intake forms.',
      'Deployed live at shreyanutricare.live for active client use.'
    ],
    liveUrl: 'https://shreyanutricare.live'
  }
];

export const LEETCODE_MILESTONES: LeetCodeDay[] = [
  {
    day: 100,
    problem: 'LeetCode 2364: Count Number of Bad Pairs',
    difficulty: 'Medium',
    description: 'Given an array nums, count pairs (i, j) where i < j and j - i != nums[j] - nums[i].',
    approach: 'Optimized from O(n^2) brute-force to linear O(n) using HashMap frequency tracking of (nums[i] - i).',
    takeaways: ['Derived total pairs n*(n-1)/2 minus valid good pairs', 'Hash map frequency counts eliminate nested loops'],
    tags: ['HashMap', 'Array', 'Math', 'O(n) Time']
  },
  {
    day: 99,
    problem: 'LeetCode 2349: Design a Number Container System',
    difficulty: 'Medium',
    description: 'Design a data structure to store numbers at 1-based indices with fast lookup of smallest index.',
    approach: 'Combined HashMaps for index-to-number mapping with TreeSets for sorted order tracking of minimum indices.',
    takeaways: ['Dual-mapping data structures', 'Logarithmic TreeSet lookup for smallest element'],
    tags: ['TreeSet', 'HashMap', 'System Design']
  },
  {
    day: 98,
    problem: 'LeetCode 3160: Find Distinct Colors Among Balls',
    difficulty: 'Medium',
    description: 'Track the count of unique colors among balls across a stream of dynamic coloring queries.',
    approach: 'Dual HashMap tracking: ball-to-color mapping and color-to-frequency tracking with Map.merge().',
    takeaways: ['Dynamic state maintenance over 100,000 queries', 'O(1) amortized state transitions'],
    tags: ['HashMap', 'Stream Processing', 'DSA']
  },
  {
    day: 91,
    problem: 'Classic Graph Theory & Matrix Transformations',
    difficulty: 'Medium',
    description: 'Solves Group Anagrams, Matrix Rotations, Backtracking Permutations, and Maximum Meeting Cycles.',
    approach: 'Employed graph cycle detection, topological sorting, and intuitive in-place 2D array transpositions.',
    takeaways: ['Graph traversal for relationship optimization', 'Backtracking for combinatorial search space'],
    tags: ['Graphs', 'Matrix', 'Backtracking', 'DP']
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    issueDate: 'June 2026',
    badge: 'AWS Cloud Quest: Cloud Practitioner',
    url: 'https://credly.com',
    skills: ['AWS EC2', 'S3 Storage', 'Cloud Architecture', 'IAM Security', 'Pricing Models']
  },
  {
    title: 'Marketing Analytics Specialization',
    issuer: 'IIT Kharagpur (NPTEL)',
    issueDate: 'May 2025',
    badge: 'NPTEL Certified (Elite)',
    skills: ['Consumer Analytics', 'Market Segmentation', 'Predictive Modeling', 'Statistical Analysis']
  },
  {
    title: 'Data Science Tools & Environments',
    issuer: 'IBM',
    issueDate: '2024',
    badge: 'IBM Network Labs Verified',
    skills: ['Jupyter Notebooks', 'RStudio', 'IBM Watson Studio', 'Data Visualization']
  },
  {
    title: 'Cloud Computing Fundamentals',
    issuer: 'NPTEL',
    issueDate: '2024',
    badge: 'NPTEL Cloud Architect',
    skills: ['Virtualization', 'Distributed Systems', 'Cloud Security', 'Scalability']
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Cloud & Infrastructure',
    skills: [
      { name: 'Amazon Web Services (AWS)', level: 90, icon: 'Cloud' },
      { name: 'AWS EC2 & S3', level: 88, icon: 'Server' },
      { name: 'Cloud Architecture', level: 85, icon: 'Cpu' },
      { name: 'Git & GitHub CI/CD', level: 92, icon: 'GitBranch' },
      { name: 'Linux CLI & Environments', level: 84, icon: 'Terminal' }
    ]
  },
  {
    category: 'Data Engineering & Analytics',
    skills: [
      { name: 'Python (Pandas, NumPy)', level: 95, icon: 'FileCode' },
      { name: 'SQL & Database Design', level: 92, icon: 'Database' },
      { name: 'Exploratory Data Analysis (EDA)', level: 90, icon: 'BarChart3' },
      { name: 'Data Visualization (Matplotlib, Seaborn)', level: 88, icon: 'PieChart' },
      { name: 'MySQL & Relational Data', level: 86, icon: 'Layers' },
      { name: 'Power BI & Excel Analytics', level: 82, icon: 'Activity' }
    ]
  },
  {
    category: 'AI, LLMs & Problem Solving',
    skills: [
      { name: 'Generative AI & LLMs', level: 88, icon: 'Brain' },
      { name: 'Prompt Engineering & Ollama', level: 86, icon: 'Sparkles' },
      { name: 'Data Structures & Algorithms (Java)', level: 90, icon: 'Binary' },
      { name: 'scikit-learn & Machine Learning', level: 80, icon: 'Network' },
      { name: 'Time & Space Optimization', level: 92, icon: 'Zap' }
    ]
  },
  {
    category: 'Web & Interface Engineering',
    skills: [
      { name: 'JavaScript / TypeScript', level: 86, icon: 'Code' },
      { name: 'React & Modern Frontend', level: 84, icon: 'Layout' },
      { name: 'Tailwind CSS & Responsive UI', level: 90, icon: 'Palette' },
      { name: 'HTML5 & CSS3 Standards', level: 94, icon: 'Globe' }
    ]
  }
];
