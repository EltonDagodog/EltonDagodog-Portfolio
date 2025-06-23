
export interface Skill {
  name: string;
  category: 'languages' | 'frameworks' | 'styling' | 'databases' | 'tools' | 'libraries';
  level: number; // 1-100
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  type: 'web' | 'mobile' | 'desktop' | 'fullstack';
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export const skills: Skill[] = [
  // Languages
  { name: 'Python', category: 'languages', level: 85 },
  { name: 'C#', category: 'languages', level: 60 },
  { name: 'JavaScript', category: 'languages', level: 80 },
  { name: 'TypeScript', category: 'languages', level: 80 },
  { name: 'Java', category: 'languages', level: 60 },
  { name: 'PHP', category: 'languages', level: 75 },
  { name: 'C++', category: 'languages', level: 70 },
  { name: 'C', category: 'languages', level: 60 },

  // Frameworks
  { name: 'React', category: 'frameworks', level: 85 },
  { name: 'Django', category: 'frameworks', level: 88 },
  { name: 'Laravel', category: 'frameworks', level: 75 },
  { name: '.NET MAUI', category: 'frameworks', level: 70 },
  { name: 'Node.js', category: 'frameworks', level: 78 },
  { name: 'Python Tkinter', category: 'libraries', level: 78 },
  { name: 'Next.js', category: 'frameworks', level: 70 },
  { name: 'Vite', category: 'frameworks', level: 75 },

  // Styling
  { name: 'CSS', category: 'styling', level: 85 },
  { name: 'Tailwind CSS', category: 'styling', level: 88 },
  { name: 'Bootstrap', category: 'styling', level: 80 },


  // Databases
  { name: 'MySQL', category: 'databases', level: 85 },
  { name: 'PostgreSQL', category: 'databases', level: 80 },
  { name: 'Firebase', category: 'databases', level: 78 },
  { name: 'SQLite', category: 'databases', level: 75 },

  // Tools
  { name: 'Git', category: 'tools', level: 85 },

  { name: 'VS Code', category: 'tools', level: 90 },
  { name: 'Visual Studio', category: 'tools', level: 85 },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Online Flower Shop',
    description: 'Full-stack e-commerce solution with React frontend and Django backend',
    longDescription: 'An online flower shop platform that allows users to browse and purchase flowers. Built with a React frontend, Django REST API backend, and MySQL database. Features include user authentication, product management, and order processing.',
    technologies: ['Django', 'Mysql', 'Tailwind CSS', 'Next.js'],
    type: 'fullstack',
    image: 'https://1magnolialane.com/cdn/shop/files/banner_5.webp?v=1702202732&width=5095',
    githubUrl: '',
   
    featured: true,
  },
  {
    id: '2',
    title: 'Task Management Mobile App',
    description: 'Cross-platform mobile app for task and project management',
    longDescription: 'A feature-rich mobile application built with .NET MAUI for cross-platform compatibility. Includes task To Do List, Task Monitoring, and real-time collaboration features.',
    technologies: ['.NET MAUI', 'C#', 'Firebase'],
    type: 'mobile',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
    githubUrl: '',
    featured: true,
  },
  

  {
    id: '4',
    title: 'School Management System',
    description: 'Desktop application for managing school operations',
    longDescription: 'A comprehensive desktop application for managing school operations including student enrollment, attendance tracking, and grade management. Built with Python and Tkinter for a rich user interface.',
    technologies: ['Python', 'Tkinter', 'Mysql'],
    type: 'desktop',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh1c0PjF1hUiMeKKBvOjQj_CAOBgr_IsUqPA&s',
    githubUrl: '',
    featured: false,
  },

  {
    id: '5',
    title: 'Online Pageant Management and Voting System',
    description: 'A web application for managing online pageants and voting',
    longDescription: 'A web-based platform that allows users to create and manage online pageants, including contestant registration, voting, and results display. Built with Vite and Django for a robust backend.',
    technologies: ['Vite', 'Django', 'PostgreSQL'],
    type: 'web',
    image: 'https://img.freepik.com/free-vector/online-electronic-voting_74855-4448.jpg',
    githubUrl: '',
    featured: false,
  },

  {
    id: '6',
    title: 'Movie Reviews and Rating System',
    description: 'A system where users can review and rate movies',
    longDescription: 'A web application that allows users to browse movies, submit reviews, and rate them. Built with Node.js and Django for a modern user experience.',
    technologies: ['Next.js', 'Django', 'MySQL'],
    type: 'web',
    image: 'https://rajreviews.com/wp-content/uploads/2017/06/movie_reel.jpg?w=705',
    githubUrl: '',
    featured: false,
  },

    {
    id: '7',
    title: 'Airline Reservation System',
    description: 'a web application for booking and managing airline reservations',
    longDescription: 'An airline reservation system that allows users to search for flights, book tickets, and manage reservations. Built with Laravel and Mysql for a secure and efficient backend.',
    technologies: ['Php', 'Laravel', 'Mysql'],
    type: 'web',
    image: 'https://media.licdn.com/dms/image/v2/D5612AQH2jsCS1OoLnQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1693327485330?e=2147483647&v=beta&t=F1VBi8U7_0ywXhwOyhEF8Bb6PFUpNykdaHy68euazEs',
    githubUrl: '',
    featured: false,
  },
];

export const experience: Experience[] = [
  // {
  //   title: 'Senior Full Stack Developer',
  //   company: 'Tech Innovations Inc.',
  //   period: '2022 - Present',
  //   description: 'Leading development of web applications using React, Django, and cloud technologies. Mentoring junior developers and architecting scalable solutions.',
  //   technologies: ['React', 'Django', 'PostgreSQL', 'AWS', 'Docker'],
  // },
  // {
  //   title: 'Mobile Application Developer',
  //   company: 'Digital Solutions Ltd.',
  //   period: '2021 - 2022',
  //   description: 'Developed cross-platform mobile applications using .NET MAUI and React Native. Collaborated with UI/UX teams to create intuitive user experiences.',
  //   technologies: ['.NET MAUI', 'React Native', 'Firebase', 'Azure'],
  // },
  // {
  //   title: 'Web Developer',
  //   company: 'Creative Agency Pro',
  //   period: '2020 - 2021',
  //   description: 'Built responsive websites and web applications for various clients. Focused on performance optimization and modern web standards.',
  //   technologies: ['JavaScript', 'PHP', 'Laravel', 'MySQL', 'Bootstrap'],
  // },
];

export const learningGoals = [
  {
    title: 'Artificial Intelligence',
    description: 'Exploring machine learning algorithms and AI model development',
    progress: 15,
  },
  {
    title: 'Machine Learning',
    description: 'Deep diving into ML frameworks like TensorFlow and PyTorch',
    progress: 15,
  },
  {
    title: 'Data Analytics',
    description: 'Learning data visualization and statistical analysis techniques',
    progress: 20,
  },
];
