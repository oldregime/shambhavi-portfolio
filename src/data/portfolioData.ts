import { Project, Experience, Certification, LeetCodeMilestone, PersonalInfo } from '../types';

export const PERSONAL_INFO: PersonalInfo = {
  name: "Shambhavi Jha",
  title: "Data Engineer | Cloud & AI Specialist",
  tagline: "Bridging the gap between raw data, scalable cloud pipelines, and generative AI models.",
  email: "jhashambhavi1905@gmail.com",
  phone: "", // Removed per user request
  location: "India (VIT Bhopal)",
  linkedin: "https://linkedin.com/in/shambhavijhaaa",
  github: "https://github.com/Shambhavijha19",
  leetcode: "https://leetcode.com/u/shambhavijha19/",
  education: "B.Tech in Computer Science & Engineering (8.32 CGPA)",
  university: "Vellore Institute of Technology (VIT)",
  graduationYear: "2026",
  bio: "Aspiring Data & Cloud Engineer with experience designing AWS-powered pipelines, healthcare ETL architectures at Clovertex, space telemetry data analysis at Indian Space Lab (ISL), and advanced DSA problem solving (#100DaysOfCode milestone)."
};

export const SKILL_CATEGORIES = [
  {
    category: "Cloud & Infrastructure",
    iconName: "Cloud",
    color: "#5d8aa8",
    bg: "bg-[#e8f0fe]",
    skills: [
      { name: "AWS EC2", desc: "Elastic Compute" },
      { name: "AWS S3", desc: "Object Storage" },
      { name: "AWS Cloud Quest", desc: "Certified Badge" },
      { name: "Git & GitHub", desc: "Version Control" },
      { name: "Linux / Bash", desc: "CLI & Scripting" },
      { name: "Cloudflare / CDN", desc: "Edge Deployments" },
    ]
  },
  {
    category: "Data Engineering & Analytics",
    iconName: "Database",
    color: "#7a9a7b",
    bg: "bg-[#edf7ed]",
    skills: [
      { name: "Python", desc: "Core & Advanced" },
      { name: "SQL Analytics", desc: "Complex Queries & Joins" },
      { name: "Pandas", desc: "Data Wrangling" },
      { name: "NumPy", desc: "Numerical Math" },
      { name: "EDA", desc: "Exploratory Analysis" },
      { name: "MySQL", desc: "Relational Schema" },
    ]
  },
  {
    category: "AI & Machine Learning",
    iconName: "Sparkles",
    color: "#e8b042",
    bg: "bg-[#fff9e6]",
    skills: [
      { name: "Generative AI", desc: "LLM Workflows" },
      { name: "Prompt Engineering", desc: "Context Structuring" },
      { name: "Ollama / Local LLMs", desc: "Inference Engine" },
      { name: "Scikit-Learn", desc: "Predictive Models" },
      { name: "DSA (Java/Python)", desc: "Algorithms" },
      { name: "Data Visualization", desc: "Seaborn / Matplotlib" },
    ]
  },
  {
    category: "Web & Full-Stack Tools",
    iconName: "Code",
    color: "#d96b52",
    bg: "bg-[#fdf0ec]",
    skills: [
      { name: "JavaScript / TypeScript", desc: "Modern Syntax" },
      { name: "React.js", desc: "Component Architecture" },
      { name: "Tailwind CSS", desc: "Responsive Design" },
      { name: "REST APIs", desc: "Client-Server RPC" },
      { name: "HTML5 / CSS3", desc: "Semantic Web" },
      { name: "Vite / Bundling", desc: "Fast Builds" },
    ]
  }
];

export const SKILL_GROUPS = [
  {
    category: "Cloud & Infrastructure",
    skills: [
      { name: "AWS (EC2, S3, IAM)", level: 90, icon: "Cloud" },
      { name: "Git / GitHub / CI", level: 92, icon: "GitBranch" },
      { name: "Linux & Bash Scripting", level: 85, icon: "Terminal" },
      { name: "Cloud Security & Networking", level: 80, icon: "Shield" },
    ]
  },
  {
    category: "Data Engineering & Analytics",
    skills: [
      { name: "Python (Pandas, NumPy)", level: 95, icon: "Code" },
      { name: "SQL & Relational DBs (MySQL)", level: 92, icon: "Database" },
      { name: "Exploratory Data Analysis (EDA)", level: 90, icon: "BarChart3" },
      { name: "ETL Pipeline Architecture", level: 88, icon: "Layers" },
    ]
  },
  {
    category: "AI, ML & Algorithms",
    skills: [
      { name: "Generative AI & LLMs", level: 85, icon: "Sparkles" },
      { name: "Data Structures & Algorithms (Java/Python)", level: 90, icon: "Cpu" },
      { name: "Statistical Machine Learning", level: 82, icon: "Brain" },
      { name: "Predictive Modeling", level: 80, icon: "TrendingUp" },
    ]
  },
  {
    category: "Web Development",
    skills: [
      { name: "HTML5, CSS3, Tailwind CSS", level: 90, icon: "Layout" },
      { name: "JavaScript / TypeScript", level: 85, icon: "Code2" },
      { name: "React.js", level: 82, icon: "Boxes" },
      { name: "REST APIs & Integration", level: 88, icon: "Network" },
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "healthcare-analytics",
    title: "Healthcare Analytics Engine",
    subtitle: "Clinical Data Pipeline & EDA Dashboard",
    category: "Data & AI",
    featured: true,
    description: "End-to-end data analytics system processing 10,000+ patient records to optimize hospital bed occupancy, length-of-stay predictions, and treatment outcomes.",
    highlights: [
      "Engineered automated ETL pipelines parsing complex clinical admission datasets with zero loss.",
      "Identified critical correlations between pre-existing conditions and length-of-stay, lowering predicted wait times by 18%.",
      "Built interactive Seaborn/Matplotlib visualization modules for medical staff triage decision support.",
      "Demonstrated data cleaning, outlier mitigation, and missing value imputations using NumPy and Pandas."
    ],
    tags: ["Python", "Pandas", "NumPy", "EDA", "Seaborn", "Clinical Data"],
    metrics: ["10,000+ Records Analyzed", "18% Wait Time Reduction", "Zero Data Loss"],
    githubUrl: "https://github.com/Shambhavijha19",
    liveUrl: "https://shambhavi-jha-folio.netlify.app"
  },
  {
    id: "neontax-tax-engine",
    title: "NeonTax Income Tax Platform",
    subtitle: "Algorithmic Tax Regime Comparison Engine",
    category: "Cloud & Analytics",
    featured: true,
    description: "High-performance computational engine comparing Old vs New Indian Income Tax Regimes (FY 2024-25 & 2025-26) with automated deductions and rebate calculations.",
    highlights: [
      "Implemented Section 87A rebate rules, marginal relief algorithms, and 80C/80D tiered deduction checks.",
      "Provides instant visual delta calculations between Old & New regimes to maximize net take-home salary.",
      "Lightweight client-side computation with sub-10ms response time and instant PDF report generator.",
      "Comprehensive unit test coverage verifying 50+ tax bracket edge cases."
    ],
    tags: ["TypeScript", "React", "Tailwind CSS", "Financial Algorithms", "Vite"],
    metrics: ["Sub-10ms Calculations", "50+ Test Cases", "FY 24-26 Ready"],
    githubUrl: "https://github.com/Shambhavijha19",
    liveUrl: "https://neontax.netlify.app"
  },
  {
    id: "personal-finance-manager",
    title: "Personal Finance & Cashflow Ledger",
    subtitle: "Full-Stack Expense Tracking & Schema Design",
    category: "Cloud & Analytics",
    featured: true,
    description: "Database-backed financial transaction ledger featuring double-entry bookkeeping, recurring subscription auditing, and predictive monthly burn rates.",
    highlights: [
      "Engineered 3NF relational database schema in MySQL for high-concurrency transaction logging.",
      "Implemented parameterized SQL queries preventing SQL injection vulnerabilities.",
      "Built RESTful API endpoints in Node.js for category-wise aggregation and dynamic budget alerts.",
      "Integrated responsive UI dashboard with interactive spending trend analysis."
    ],
    tags: ["Python", "SQL", "MySQL", "Database Design", "REST APIs"],
    metrics: ["3NF Normalized Schema", "Zero Injection Vulnerability", "Real-Time Tracking"],
    githubUrl: "https://github.com/Shambhavijha19",
    liveUrl: "https://shambhavi-jha-folio.netlify.app"
  },
  {
    id: "lnj-corporate-portal",
    title: "LNJ Corporate Solutions",
    subtitle: "Enterprise Business Consulting Web Platform",
    category: "Web Apps",
    featured: false,
    description: "Production web platform built for enterprise consulting services with service catalog, client inquiry workflow, and mobile-first responsive architecture.",
    highlights: [
      "Engineered high-contrast, modern responsive UI with accessible typography and clean navigation.",
      "Integrated contact dispatch pipelines with automated acknowledgment notifications.",
      "Optimized Core Web Vitals achieving 99+ Lighthouse performance scores.",
      "Deployed on high-availability global CDN with automated SSL provisioning."
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "CDN Deployment"],
    metrics: ["99+ Lighthouse Score", "Zero Layout Shift", "100% Mobile Responsive"],
    githubUrl: "https://github.com/Shambhavijha19",
    liveUrl: "https://lnjcorporatesolutions.netlify.app"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Data Engineering Intern",
    company: "Clovertex",
    location: "Remote / India",
    period: "June 2026 – Present",
    type: "Internship",
    badge: "Current Role",
    description: "Engineering scalable AWS cloud architectures, data pipelines, and Generative AI workflows for life sciences and healthcare data workloads.",
    highlights: [
      "Architecting AWS EC2 workflows for continuous data ingestion and automated batch processing.",
      "Implementing LLM-powered data extraction tools to parse unstructured biomedical documentation.",
      "Collaborating on cloud database schema optimizations and cloud governance best practices."
    ],
    skills: ["AWS EC2", "AWS S3", "Python", "Generative AI", "Data Pipelines"]
  },
  {
    role: "Research Intern (Space Technology)",
    company: "Indian Space Lab (ISL)",
    location: "India",
    period: "May 2024 – July 2024",
    type: "Research Internship",
    badge: "Space Tech",
    description: "Conducted computational research on satellite telemetry datasets, telemetry parsing algorithms, and trajectory data modeling.",
    highlights: [
      "Processed high-frequency sensor streams from simulated orbital telemetry payloads.",
      "Optimized data transformation scripts using Python NumPy, reducing matrix compute time by 32%.",
      "Drafted technical documentation and research briefs on telemetry integrity standards."
    ],
    skills: ["Python", "NumPy", "Telemetry Processing", "Mathematical Modeling"]
  },
  {
    role: "B.Tech in Computer Science & Engineering",
    company: "Vellore Institute of Technology (VIT)",
    location: "Bhopal, India",
    period: "Oct 2022 – May 2026",
    type: "Education",
    badge: "8.32 CGPA",
    description: "Rigorous 4-year engineering curriculum focused on Database Management, Cloud Computing, Algorithms, Operating Systems, and Distributed Computing.",
    highlights: [
      "Maintained a strong 8.32 CGPA across all engineering semesters.",
      "Completed #100DaysOfCode milestone solving algorithmic challenges in Java and Python.",
      "Active participant in technical symposiums, hackathons, and open source communities."
    ],
    skills: ["Data Structures & Algorithms", "DBMS", "Operating Systems", "Cloud Computing"]
  }
];

export const LEETCODE_MILESTONES: LeetCodeMilestone[] = [
  {
    day: 100,
    problem: "Count Number of Bad Pairs (LeetCode 2364)",
    difficulty: "Medium",
    approach: "Transformed j - i != nums[j] - nums[i] into nums[i] - i == nums[j] - j. Used HashMap to count good pairs in linear O(N) time and subtracted from total combinations N*(N-1)/2.",
    takeaways: ["Mathematical algebraic rearrangement", "Single pass O(N) HashMap hash table", "Prevented O(N^2) brute force TLE"],
    tags: ["HashMap", "Math", "Arrays", "O(N) Time"],
    description: "Final milestone of #100DaysOfCode mastering frequency tables and combinatorial mathematics."
  },
  {
    day: 99,
    problem: "Design a Number Container System (LeetCode 2349)",
    difficulty: "Medium",
    approach: "Designed dual data structure combining HashMap<Integer, Integer> (index -> number) and HashMap<Integer, TreeSet<Integer>> (number -> min index) for O(log N) change and O(1) find queries.",
    takeaways: ["TreeSet log(N) ordered retrieval", "Two-way index mapping", "Memory-efficient cleanups"],
    tags: ["TreeSet", "Hash Table", "Design"],
    description: "High-performance data structure design supporting dynamic indexing."
  },
  {
    day: 98,
    problem: "Find the Number of Distinct Colors Among the Balls (LeetCode 3160)",
    difficulty: "Medium",
    approach: "Maintained dual maps for ball-color tracking and dynamic color-frequency counts to query distinct color numbers in O(1) per step.",
    takeaways: ["Two HashMaps synchronization", "Dynamic count adjustments", "O(1) step complexity"],
    tags: ["HashMap", "Counting", "Simulation"],
    description: "Dynamic state simulation handling multiple color reassignment queries."
  },
  {
    day: 95,
    problem: "Tuple with Same Product (LeetCode 1726)",
    difficulty: "Medium",
    approach: "Calculated all pair products (a*b), grouped frequency in HashMap, and computed 8 * (count * (count - 1) / 2) permutations for each product match.",
    takeaways: ["Combinatorial product hashing", "Permutation arithmetic", "O(N^2) space-time optimization"],
    tags: ["Combinatorics", "HashMap", "Math"],
    description: "Product permutation calculation across distinct integer tuples."
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    issueDate: "2024",
    badge: "AWS Cloud Quest Badge"
  },
  {
    title: "Marketing Analytics",
    issuer: "NPTEL (IIT Kharagpur)",
    issueDate: "2024",
    badge: "Elite Certification"
  },
  {
    title: "Data Science Tools & Methods",
    issuer: "IBM",
    issueDate: "2023",
    badge: "IBM Digital Badge"
  },
  {
    title: "Cloud Computing Architectures",
    issuer: "NPTEL",
    issueDate: "2023",
    badge: "NPTEL Certified"
  }
];


export const METRICS = [
  { label: "Patient Records", value: "10,000+", change: "Clinical Data" },
  { label: "DSA Streak", value: "100 Days", change: "Consecutive" },
  { label: "CGPA @ VIT", value: "8.32", change: "B.Tech CSE" },
  { label: "Cloud Certifications", value: "4+", change: "Verified" },
];
