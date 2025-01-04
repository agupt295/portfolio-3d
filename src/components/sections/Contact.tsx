import { motion } from "framer-motion";
import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { Header } from "../atoms/Header";

// Import Images
import emailIcon from "../../assets/gmail.png";
import linkedinIcon from "../../assets/linkedin.png";
import githubIcon from "../../assets/github.png";

const Contact = () => {
  return (
    <div className="flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-8"
      >
        {/* Header Section */}
        <Header useMotion={false} {...{ title: "Get In Touch", subtitle: "Contact." }} />

        <div className="mt-12 flex flex-col gap-10">
          {/* Email Section */}
          <div className="border-secondary pb-6 flex items-start gap-4">
            <img
              src={emailIcon}
              alt="Email"
              className="w-8 h-8 object-contain"
            />
            <div>
              <a
                href="mailto:aryan.gupta.careers@gmail.com"
                className="text-lg font-medium text-white hover:text-secondary"
              >
                aryan.gupta.careers@gmail.com
              </a>
              <p className="text-secondary text-sm">Feel free to reach out for collaborations!</p>
            </div>
          </div>

          {/* LinkedIn Section */}
          <div className="border-secondary pb-6 flex items-start gap-4">
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="w-8 h-8 object-contain"
            />
            <div>
              <a
                href="https://linkedin.com/in/agupt295"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-white hover:text-secondary"
              >
                LinkedIn
              </a>
              <p className="text-secondary text-sm">Connect with me on LinkedIn for professional updates.</p>
            </div>
          </div>

          {/* GitHub Section */}
          <div className="flex items-start gap-4">
            <img
              src={githubIcon}
              alt="GitHub"
              className="w-8 h-8 object-contain"
            />
            <div>
              <a
                href="https://github.com/agupt295"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-white hover:text-secondary"
              >
                GitHub
              </a>
              <p className="text-secondary text-sm">Check out my projects and repositories.</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 3D Earth Canvas */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="h-[500px] md:h-[700px] xl:h-[600px] flex-1"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");