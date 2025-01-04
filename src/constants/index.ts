import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  exposys_data_labs,
  mileazo,
  nexus,
  siemens,
  connect_social,
  axi_vision,
  inv_control,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Database Engineer",
    icon: mobile,
  },
  {
    title: "Cybersecurity Enthusiast",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "SDE (Part-time)",
    companyName: "Nexus",
    icon: nexus,
    iconBg: "#E6DEDD",
    date: "Sept 2024 - Present",
    points: [
      "Developed a robust platform integrating specialized IDEs and real time collaborative tools for repository publishing.",
      "Designed dynamic landing pages, utilizing TypeScript, CSS, and META Open Graph tags for metadata optimization.",
      "Implemented backend solution using Express.js for APIs, MySQL for the database and Nodemailer for email communication."
    ],
  },
  {
    title: "Backend Developer Intern",
    companyName: "Exposys Data Labs",
    icon: exposys_data_labs,
    iconBg: "#383E56",
    date: "Jun 2024 - July 2024",
    points: [
      "Leveraged AWS KMS and AWS SDK for Python (boto3) to develop a robust algorithm that enhances the security of cloud-based messaging.",
      "Utilized AWS KMS for user authorization and secure private key protection.",
      "Integrated Python's 'bcrypt' library to make an additional layer of symmetric encryption thereby ensuring user authentication.",
    ],
  },
  {
    title: "SDE Intern",
    companyName: "Siemens EDA",
    icon: siemens,
    iconBg: "#E6DEDD",
    date: "May 2023 - August 2023",
    points: [
      "Developed PyQt app, providing users with better data visualization capabilities of the AXI read/write transactions.",
      "Utilized Python libraries: Matplotlib to create readable graphs, NumPy & SciPy to perform numerical computations.",
      "Enabled developers to study trends, compare & save plots efficiently, reducing the analytical time by roughly 33.3%."
    ],
  },
  {
    title: "Full-Stack SDE Intern",
    companyName: "MileaZo",
    icon: mileazo,
    iconBg: "#383E56",
    date: "May 2023 - August 2023",
    points: [
      "Collaborated on a solution aimed at improving customer updates to track vehicle servicing status.",
      "Participated in Pair Programming sessions to develop full-stack solutions using React.js & Node.js with PostgreSQL DB.",
      "Partnered with Product Development Team to discuss customer feedback, achieving 70% higher customer satisfaction."
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial: "Worked closely with Aryan; a dedicated, quick learner who independently delivered impactful projects.",
    name: "Yogesh Badaya",
    designation: "Tech Lead",
    company: "Siemens EDA",
    image: "https://media.licdn.com/dms/image/v2/C4E03AQGaqdVmiqXN2g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1516367561430?e=1741219200&v=beta&t=SrxyB4xhG-Ua9RUFKqULhPFlBGFSCT-HAfvVmDTpFQk",
  }
];

const projects: TProject[] = [
  {
    name: "ConnectSocial",
    description:
      "This application imitates a social media app that allows users to post, tag images. They can make friends, post a like and a comment on their photos.",
    tags: [
      {
        name: "java",
        color: "orange-text-gradient",
      },
      {
        name: "javafx",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
    ],
    image: connect_social,
    sourceCodeLink: "https://github.com/agupt295/ConnectSocial",
  },
  {
    name: "INVControl",
    description:
      "iOS based application implemented to help users add items, update and keep a track of their inventory system.",
    tags: [
      {
        name: "swift",
        color: "orange-text-gradient",
      },
      {
        name: "firebase",
        color: "yellow-text-gradient",
      },
    ],
    image: inv_control,
    sourceCodeLink: "https://github.com/agupt295/INVControl",
  },
  {
    name: "AXIVision",
    description:
      "This project accepts an excel file (supposed to store information of a AXI transaction), and produces graph outputs to let users analyze the transaction data.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pyqt",
        color: "green-text-gradient",
      },
    ],
    image: axi_vision,
    sourceCodeLink: "https://github.com/agupt295/AXIVision",
  },
];

export { services, technologies, experiences, testimonials, projects };
