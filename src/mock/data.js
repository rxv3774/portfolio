import { nanoid } from 'nanoid';
// import teslaLogo from '../images/teslaLogo.jpg'

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Welcome! My name is ',
  name: 'Ryan Vasquez',
  subtitle: 'A full stack software engineer',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// EXPERIENCE DATA
export const experienceData = [
  {
    id: nanoid(),
    img: 'teslaLogo.jpg',
    company: 'Tesla',
    title: 'Software Engineer Intern',
    location: 'Remote',
    timeframe: 'January 2021 - Present',
    description: 'Worked on full stack features.',
  },
  {
    id: nanoid(),
    img: 'transcatLogo.png',
    company: 'Transcat',
    title: 'Software Engineer Intern',
    location: 'Rochester, New York',
    timeframe: 'May 2019 - January 2020',
    description: 'Worked on full stack features.',
  },
];

// SKILLS DATA
export const skillsData = [
  {
    img: 'profile.jpg',
    level: 'Proficient',
    language: 'Python',
  },
  {
    img: 'profile.jpg',
    level: 'Proficient',
    language: 'Java',
  },
  {
    img: 'profile.jpg',
    level: 'Proficient',
    language: 'C#',
  },
  {
    img: 'profile.jpg',
    level: 'Proficient',
    language: 'HTML',
  },
  {
    img: 'profile.jpg',
    level: 'Proficient',
    language: 'SQL',
  },
  {
    img: 'profile.jpg',
    level: 'Intermediate',
    language: 'Javascript',
  },
  {
    img: 'profile.jpg',
    level: 'Intermediate',
    language: 'C',
  },
  {
    img: 'profile.jpg',
    level: 'Intermediate',
    language: 'PHP',
  },
  {
    img: 'profile.jpg',
    level: 'Intermediate',
    language: 'CSS',
  },
];

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
