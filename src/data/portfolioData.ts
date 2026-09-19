import { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Mallikarjun Kudalli',
    fullName: 'Mallikarjun Kudalli',
    initials: 'MK',
    title: 'Computer Science & Engineering (Data Science)',
    tagline: 'Full-Stack Developer & Data / AI / ML Enthusiast',
    location: 'Bengaluru, India',
    phone: '+91-9019450015',
    email: 'kudallimallu1@gmail.com',
    summary:
      'Computer Science and Engineering (Data Science) undergraduate at RNS Institute of Technology with strong foundations in Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and SQL. Proficient in C++, Python, JavaScript, React.js, Flask, SQL, Power BI, and Excel with hands-on experience building machine learning, computer vision, data analytics, and software applications. Experienced with Git and GitHub, with a strong interest in full-stack development, product engineering, and building user-focused digital solutions.',
    availability: {
      status: 'Open for Roles',
      openFor: 'Software Engineering & Data/AI Internships',
    },
  },

  navigation: [
    { label: 'About', href: '#about', numberPrefix: '01' },
    { label: 'Skills', href: '#skills', numberPrefix: '02' },
    { label: 'Projects', href: '#projects', numberPrefix: '03' },
    { label: 'Education', href: '#education', numberPrefix: '04' },
    { label: 'Certifications', href: '#certifications', numberPrefix: '05' },
    { label: 'DSA', href: '#dsa', numberPrefix: '06' },
    { label: 'Contact', href: '#contact', numberPrefix: '07' },
  ],

  socials: [
    {
      platform: 'GitHub',
      label: 'GitHub Profile',
      url: 'https://github.com/mallikarjun-kudalli',
      iconName: 'github',
    },
    {
      platform: 'LinkedIn',
      label: 'LinkedIn Profile',
      url: 'https://linkedin.com',
      iconName: 'linkedin',
    },
    {
      platform: 'LeetCode',
      label: 'LeetCode Profile',
      url: 'https://leetcode.com',
      iconName: 'leetcode',
    },
    {
      platform: 'Email',
      label: 'Send Email',
      url: 'mailto:kudallimallu1@gmail.com',
      iconName: 'mail',
    },
    {
      platform: 'Phone',
      label: 'Call Direct',
      url: 'tel:+919019450015',
      iconName: 'phone',
    },
  ],

  projects: [
    {
      id: 'fintech-growth-analytics',
      title: 'Fintech Growth & Investment Analytics Dashboard',
      role: 'Individual Project',
      categoryTag: 'FINANCIAL DATA ANALYTICS & KPI MODELING',
      technologies: ['Python', 'SQL', 'Power BI', 'Excel'],
      summary:
        'Comprehensive financial analytics pipeline and executive dashboards designed to extract strategic business insights from customer transactions and portfolio records.',
      bullets: [
        'Analyzed 100,000+ customer transactions and investment records to identify business trends and customer behavior.',
        'Built 5 interactive Power BI dashboards tracking revenue, retention, customer growth, and investment performance.',
        'Developed 30+ SQL analytical queries for KPI monitoring, customer segmentation, and churn analysis.',
        'Generated actionable business insights through data visualization, exploratory analysis, and business reporting.',
      ],
      pipeline: [
        'RAW DATA',
        'SQL ANALYSIS',
        'CUSTOMER / INVESTMENT ANALYSIS',
        'POWER BI',
        'BUSINESS INSIGHTS',
      ],
      problemPurpose:
        'Extract actionable business trends and customer behavior patterns from over 100,000+ transactional and investment records.',
      approach:
        'Structured and cleaned transactional datasets with Python and Excel, authored 30+ relational SQL queries for customer segmentation and retention modeling, and synthesized metrics into 5 interactive Power BI dashboards.',
      implementationWorkflow: [
        'Data ingestion and exploratory analysis across 100,000+ customer records',
        'Developed 30+ SQL analytical queries for KPI monitoring, customer segmentation, and churn analysis',
        'Built 5 interactive Power BI dashboards tracking revenue, retention, customer growth, and investment performance',
        'Synthesized actionable business insights and executive reporting',
      ],
      keyResults: [
        'Analyzed 100,000+ customer transactions and investment records',
        'Constructed 5 interactive Power BI dashboards',
        'Developed 30+ SQL analytical queries for KPI monitoring',
      ],
      metrics: [
        { label: 'Financial Records', value: '100,000+' },
        { label: 'Interactive Dashboards', value: '5' },
        { label: 'SQL Analytical Queries', value: '30+' },
      ],
      featured: true,
    },
    {
      id: 'image-forgery-detection',
      title: 'Image Forgery Detection Using CNN',
      role: 'Team of 4',
      categoryTag: 'DEEP LEARNING / COMPUTER VISION FORENSICS',
      technologies: [
        'React.js',
        'Flask',
        'Python',
        'TensorFlow',
        'Keras',
        'CNN',
        'OpenCV',
        'Git',
        'GitHub',
      ],
      summary:
        'Full-stack digital forensics web application integrating deep convolutional neural networks with a responsive client interface to detect tampered and forged images.',
      bullets: [
        'Developed a full-stack image-forensics application using React.js and Flask for detecting forged and manipulated images.',
        'Integrated a CNN-based deep learning model with a Flask REST API for image upload, preprocessing, and prediction.',
        'Applied image preprocessing and computer vision techniques using TensorFlow and OpenCV to analyze authentic and tampered images.',
        'Utilized Git and GitHub for version control and collaborative development.',
      ],
      pipeline: [
        'IMAGE UPLOAD',
        'PREPROCESSING',
        'CNN MODEL',
        'PREDICTION',
        'RESULT',
      ],
      problemPurpose:
        'Identify manipulated and forged digital images through computer vision techniques and deep learning classification.',
      approach:
        'Engineered an image-forensics architecture combining OpenCV and TensorFlow preprocessing routines with a CNN deep learning classifier, exposed through a Flask REST API and consumed by a responsive React frontend.',
      implementationWorkflow: [
        'Developed a full-stack image-forensics application using React.js and Flask',
        'Integrated a CNN-based deep learning model with a Flask REST API for image upload, preprocessing, and prediction',
        'Applied image preprocessing and computer vision techniques using TensorFlow and OpenCV to analyze authentic and tampered images',
        'Utilized Git and GitHub for version control and collaborative development',
      ],
      keyResults: [
        'Full-stack image-forensics application with React.js and Flask',
        'Integrated CNN model with REST API for upload, preprocessing, and prediction',
        'Computer vision analysis of authentic vs. tampered images',
      ],
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.example.com',
      featured: true,
    },
    {
      id: 'smart-voting-facial-recognition',
      title: 'Smart Voting System Using Facial Recognition',
      role: 'Team of 4',
      categoryTag: 'BIOMETRIC AUTHENTICATION & DESKTOP APP',
      technologies: ['Python', 'OpenCV', 'Tkinter'],
      summary:
        'Biometric voter authentication desktop application leveraging computer vision facial recognition to ensure secure voter validation and prevent fraudulent duplicate ballots.',
      bullets: [
        'Designed a facial recognition-based voter authentication system using Python and OpenCV.',
        'Implemented face detection and recognition workflows for registered voter verification.',
        'Developed a user-friendly graphical interface using Tkinter for voter registration and authentication.',
        'Implemented duplicate-voter validation to reduce repeated voting attempts within the application.',
      ],
      pipeline: [
        'REGISTER',
        'FACE DETECTION',
        'FACE RECOGNITION',
        'VOTER VERIFICATION',
        'DUPLICATE VALIDATION',
      ],
      problemPurpose:
        'Provide automated voter authentication and prevent duplicate voting attempts using facial recognition biometrics.',
      approach:
        'Constructed a desktop-based authentication workflow utilizing OpenCV for face detection and recognition, paired with a Tkinter graphical interface for voter registration, real-time verification, and duplicate-voter validation.',
      implementationWorkflow: [
        'Designed a facial recognition-based voter authentication system using Python and OpenCV',
        'Implemented face detection and recognition workflows for registered voter verification',
        'Developed a user-friendly graphical interface using Tkinter for voter registration and authentication',
        'Implemented duplicate-voter validation to reduce repeated voting attempts within the application',
      ],
      keyResults: [
        'Facial recognition-based voter authentication workflow',
        'Face detection and recognition for registered voter verification',
        'Tkinter GUI with duplicate-voter validation',
      ],
      githubUrl: 'https://github.com',
      featured: true,
    },
  ],

  skills: [
    {
      category: 'Programming',
      skills: ['C++', 'Python', 'SQL', 'JavaScript'],
    },
    {
      category: 'Web Technologies',
      skills: ['HTML', 'CSS', 'React.js', 'Flask', 'REST APIs'],
    },
    {
      category: 'Databases',
      skills: ['MySQL', 'SQLite', 'MongoDB'],
    },
    {
      category: 'Data Analytics',
      skills: [
        'Power BI',
        'Excel',
        'Pandas',
        'NumPy',
        'Data Cleaning',
        'Business Analytics',
      ],
    },
    {
      category: 'Machine Learning',
      skills: ['TensorFlow', 'Keras', 'CNN', 'OpenCV', 'Scikit-learn'],
    },
    {
      category: 'Core Subjects',
      skills: [
        'Data Structures and Algorithms',
        'Object-Oriented Programming',
        'Database Management Systems',
        'Operating Systems',
      ],
    },
    {
      category: 'Tools',
      skills: ['Git', 'GitHub', 'VS Code', 'Docker'],
    },
  ],

  education: [
    {
      institution: 'RNS Institute of Technology',
      location: 'Bengaluru',
      degree: 'B.E. in Computer Science and Engineering (Data Science)',
      period: '2023–2027',
      scoreLabel: 'CGPA',
      score: '8.07 / 10',
    },
    {
      institution: 'Sri Sahu Maharaj PU Science College',
      location: 'Bidar',
      degree: 'Pre-University Education (Class XII)',
      period: '2023',
      scoreLabel: 'Percentage',
      score: '92.33%',
    },
    {
      institution: 'GHS Bhunyar K',
      location: 'Kalaburagi',
      degree: 'SSLC (Class X)',
      period: '2021',
      scoreLabel: 'Percentage',
      score: '97.28%',
    },
  ],

  certifications: [
    {
      title: 'Cloud Computing',
      issuer: 'NPTEL IIT Kharagpur',
    },
    {
      title: 'Data Visualization Specialization',
      issuer: 'Coursera (Johns Hopkins University)',
    },
  ],

  achievements: [
    {
      title: 'LeetCode Problem Solving',
      detail: 'Solved 100+ Data Structures and Algorithms problems on LeetCode.',
    },
  ],
};
