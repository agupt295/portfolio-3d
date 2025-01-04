type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Aryan Gupta — 3D Portfolio",
    fullName: "Aryan Gupta",
    email: "aryan.gupta.careers@gmail.com",
  },
  hero: {
    name: "Aryan Gupta",
    p: ["I develop user interfaces", "& secure backend systems."],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I’m a passionate software developer with experience in building dynamic frontend applications
                using JavaScript. On the backend, I specialize in creating
                scalable and efficient APIs with Express.js, and managing databases including MySQL and MongoDB,
                while ensuring secure integrations and adherence to security protocols. I’m a
                quick learner with hands-on experience in Java, Python and iOS app-dev in Swift, always eager
                to collaborate and build user-centric solutions that make a real impact!`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following are very few projects that showcases my skills and experience.
                Each project is briefly described with links to code repositories. It reflects my
                ability to work with different technologies and manage projects effectively.`,
    },
  },
};
