import {
  Code2, Database, Wrench, Brain, Globe, Server
} from 'lucide-react';

export const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Education', 'Certificates', 'Contact'];

export const skillCategories = [
  {
    icon: Code2,
    title: 'Programming Languages',
    skills: ['C++', 'C', 'Python', 'Java', 'JavaScript ES6+'],
  },
  {
    icon: Globe,
    title: 'Frontend & Backend',
    skills: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'RESTful APIs'],
  },
  {
    icon: Database,
    title: 'Databases',
    skills: ['MongoDB Atlas', 'Firebase Realtime DB', 'SQLite', 'SQL'],
  },
  {
    icon: Wrench,
    title: 'Tools & Practices',
    skills: ['Git', 'GitHub', 'Postman', 'Tailwind CSS', 'JWT', 'bcrypt', 'Agile'],
  },
  {
    icon: Brain,
    title: 'Core Concepts',
    skills: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks', 'ER Modeling', 'Process Synchronization'],
  },
];

export const projects = [
  {
    number: '01',
    title: 'ParentAlert',
    subtitle: 'AI-Based Elder Safety Monitoring System',
    type: 'Capstone / Course Project — June 2026',
    description:
      'A real-time safety monitoring system designed to improve emergency response through SOS alerts, GPS tracking, inactivity detection, and automated emergency notifications.',
    features: [
      'Real-time safety monitoring',
      'One-tap SOS emergency alert',
      'GPS location capture',
      'Inactivity detection',
      'Automated emergency notifications',
      'Firebase data synchronization',
      'Secure backend APIs',
    ],
    tech: ['React.js', 'Node.js', 'Firebase', 'Firebase Admin SDK', 'REST APIs', 'JWT', 'bcrypt'],
    highlights: ['Real-Time Monitoring', 'GPS Emergency Tracking', 'Automated Alerts'],
    github: null,
    demo: null,
  },
  {
    number: '02',
    title: 'FleetGuard',
    subtitle: 'Enterprise Fleet Management System',
    type: 'Group Project — August 2026',
    description:
      'A collaborative, role-based fleet management platform built as a group project to monitor vehicles, fleet compliance, document expiries, and service-related information through a centralized administration dashboard.',
    features: [
      'Role-based admin dashboard',
      'Fleet compliance monitoring',
      'Vehicle management',
      'Upcoming expiry reports',
      'Overdue compliance reports',
      'REST API integration',
      'MongoDB-based data management',
      'Frontend-backend integration via Axios',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Axios', 'REST APIs'],
    highlights: ['Vehicle Management', 'Compliance Monitoring', 'REST API Integration'],
    github: null,
    demo: null,
  },
];

export const coursework = [
  'Data Structures & Algorithms',
  'Object-Oriented Programming',
  'Database Management Systems',
  'Operating Systems',
  'Computer Networks',
  'Software Engineering',
  'Artificial Intelligence',
];

export const certificates = [
  {
    title: 'IBM Certificate',
    issuer: 'IBM',
    file: '/IBM certificate.pdf',
  },
  {
    title: 'Associate IT Python Certificate',
    issuer: 'Infosys Springboard',
    file: '/Associate IT-python main certificate.pdf',
  },
  {
    title: 'Linux Bash Certificate',
    issuer: 'Infosys Springboard',
    file: '/Linux_bash_certificate.pdf',
  },
  {
    title: 'Technology Foundation Certificate',
    issuer: 'Infosys Springboard',
    file: '/Tech_foundation_certificate.pdf',
  },
];
