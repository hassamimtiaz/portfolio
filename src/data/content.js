export const profile = {
  name: 'Hassam Imtiaz',
  firstName: 'Hassam',
  title: 'Principal Software Engineer',
  tagline: 'Full-stack engineer who ships secure, scalable products — and leads the teams that keep them running.',
  location: 'Lahore, Pakistan',
  email: 'hassam2522@gmail.com',
  phone: '+92 335 3412522',
  whatsapp: '+923353412522',
  whatsappUrl: 'https://wa.me/923353412522',
  linkedin: 'https://linkedin.com/in/hassam-imtiaz',
  github: 'https://github.com/hassamimtiaz',
  resumeUrl: '/files/Hassam_Imtiaz_Resume.pdf',
  photo: '/images/hassam.jpg',
  summary:
    '6+ years building secure full-stack web applications in React, Node.js, and TypeScript. Delivers REST APIs and the interfaces that consume them across PostgreSQL, MySQL, and MongoDB — with deep experience in payments, auth, and compliance-sensitive financial systems.',
};

export const services = [
  {
    id: 'frontend',
    title: 'Frontend Engineering',
    description:
      'Production React and Next.js interfaces with TypeScript, clean state management, and performance-minded UI that feels fast on every device.',
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    description:
      'Node.js and Express REST/GraphQL services, schema design, and integrations that stay reliable under real traffic and business rules.',
  },
  {
    id: 'architecture',
    title: 'System Architecture',
    description:
      'End-to-end architecture for scalable full-stack products — microservices, auth boundaries, data models, and cloud-ready deployment paths.',
  },
  {
    id: 'security',
    title: 'Security & Compliance',
    description:
      'SSO, 2FA, row-level security, and audit-friendly workflows for financial and compliance-sensitive systems where data integrity matters.',
  },
  {
    id: 'payments',
    title: 'Payments & Integrations',
    description:
      'Stripe billing, webhooks, and third-party API integrations wired cleanly into your product so payments and external systems stay in sync.',
  },
  {
    id: 'leadership',
    title: 'Team Leadership',
    description:
      'Technical leadership spanning delivery, code review, CI/CD, mentoring, and turning product requirements into shippable engineering plans.',
  },
];

export const experience = [
  {
    id: 'job-1',
    file: 'job-1.js',
    title: 'Team Lead',
    company: 'Strategic Systems International',
    from: 'July 2025',
    to: null,
    location: 'Hybrid',
    highlights: [
      'Lead full-stack delivery in React, Node.js, and TypeScript — from requirements through code review and production release.',
      'Design secure architecture for authentication, authorization, and access control across services and clients.',
      'Architected microservices that improved application performance by 30%.',
      'Established development, review, and CI/CD workflows that raised release quality and team throughput.',
    ],
  },
  {
    id: 'job-2',
    file: 'job-2.js',
    title: 'Senior Software Engineer',
    company: 'Strategic Systems International',
    from: 'October 2023',
    to: 'June 2025',
    location: 'Hybrid',
    highlights: [
      'Drove end-to-end features from analysis through REST APIs, React UIs, testing, and release.',
      'Resolved high-priority production issues and reduced support tickets by 50%.',
      'Rebuilt accounting and ledger workflows in a compliance-sensitive financial module.',
      'Mentored five engineers in TDD and pair programming, cutting review cycles by 30%.',
    ],
  },
  {
    id: 'job-3',
    file: 'job-3.js',
    title: 'Software Engineer',
    company: 'Coding Cops',
    from: 'June 2020',
    to: 'October 2023',
    location: 'On-site',
    highlights: [
      'Implemented SSO and 2FA, reducing unauthorized access attempts by 40%.',
      'Built and integrated third-party APIs and SDKs, delivering 3+ high-impact features.',
      'Optimized critical MongoDB queries for ~80% faster data access under high load.',
      'Wrote Jest suites and executed zero-downtime data migrations for new features.',
    ],
  },
];

export const projects = [
  {
    id: 'predaict',
    name: 'Predaict',
    period: 'May 2026 — Present',
    company: 'Strategic Systems International',
    description:
      'AI-powered sports prediction platform where users forecast tournament outcomes — including FIFA World Cup fixtures — with AI-generated match analysis.',
    tech: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe', 'Supabase', 'Vercel'],
    highlights: [
      'Stripe subscriptions with checkout and webhook handlers keeping payment state consistent.',
      'PostgreSQL schema with row-level security for per-user data isolation.',
      'End-to-end Next.js app with SSR, API routes, and automated Vercel preview deployments.',
      'AI analysis API integrated for match insights from raw fixture data.',
    ],
  },
  {
    id: 'staff',
    name: 'Staff Management Platform',
    period: 'June 2025 — April 2026',
    company: 'Strategic Systems International',
    description:
      'Cloud platform to manage and assign shifts across hierarchical teams and departments, with web onboarding and mobile activation.',
    tech: ['.NET', 'REST APIs', 'PostgreSQL', 'AWS', 'Angular', 'React Native'],
    highlights: [
      'Designed hierarchical org data model and permission-aware REST APIs.',
      'Built staff provisioning spanning web onboarding and mobile activation.',
      'Delivered a React Native app for staff on iOS and Android.',
    ],
  },
  {
    id: 'storage',
    name: 'Self Storage Software Platform',
    period: 'October 2023 — May 2025',
    company: 'Strategic Systems International',
    description:
      'Cloud platform for self-storage operators to manage bookings, documents, and accounting workflows.',
    tech: ['Node.js', 'Express', 'REST APIs', 'MySQL', 'Vue.js', 'AWS'],
    highlights: [
      'Built Node.js APIs powering booking, document, and financial workflows.',
      'Revamped accounting to eliminate reconciliation discrepancies.',
      'Enforced transaction period controls for audit-ready month-end closing.',
      'Integrated PandaDoc e-signatures and automated monthly financial reports.',
    ],
  },
  {
    id: 'plm',
    name: 'Product Life Cycle Management',
    period: 'June 2020 — October 2023',
    company: 'Coding Cops',
    description:
      'PLM system for hardware teams to manage BOMs, track changes, and sync with CAD and ERP tools.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'AWS'],
    highlights: [
      'SSO and 2FA with Passport across the platform.',
      'Third-party sync keeping CAD/ERP data consistent.',
      'React interfaces for BOM management and change tracking.',
      'Jest suites sustaining high coverage on critical paths.',
    ],
  },
];

export const skillGroups = [
  {
    label: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Redux', 'Tailwind', 'Material UI', 'React Native'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Express', 'GraphQL', 'Microservices', '.NET', 'Serverless'],
  },
  {
    label: 'Data',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Schema Design', 'Query Optimization'],
  },
  {
    label: 'Cloud & DevOps',
    items: ['AWS', 'Docker', 'GitHub Actions', 'GCP', 'Azure', 'Vercel'],
  },
  {
    label: 'Security',
    items: ['SSO', '2FA', 'Row-Level Security', 'Secure APIs', 'Audit Workflows'],
  },
  {
    label: 'Integrations',
    items: ['Stripe', 'Webhooks', 'Third-Party APIs', 'PandaDoc'],
  },
];

export const education = {
  degree: 'Bachelor of Science in Software Engineering',
  school: 'COMSATS University Islamabad, Lahore Campus',
  period: 'September 2016 — September 2020',
};
