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
    img: 'teslaLogo.jpg',
    company: 'Tesla',
    title: 'Software Engineer Intern',
    location: 'Remote',
    timeframe: '',
    description: '',
  },
  {
    img: 'project.jpg',
    title: '',
    location: '',
    timeframe: '',
    description: '',
  },
];

// SKILLS DATA
export const skillsData = [
  {
    img: 'profile.jpg',
    level: '',
    paragraphTwo: '',
    paragraphThree: '',
    resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
  },
  {
    img: 'profile.jpg',
    level: '',
    paragraphTwo: '',
    paragraphThree: '',
    resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
  },
  {
    img: 'profile.jpg',
    level: '',
    paragraphTwo: '',
    paragraphThree: '',
    resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
  },
  {
    img: 'profile.jpg',
    level: '',
    paragraphTwo: '',
    paragraphThree: '',
    resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
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
