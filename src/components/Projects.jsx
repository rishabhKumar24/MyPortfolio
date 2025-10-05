import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/password.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3> Random Password Generator</h3>
          <p>
            A modern web application that generates random passwords with
            customizable options for length and complexity.
          </p>
          <div className="project-tech">
            <span>JAVASCRIPT</span>
            <span>CSS</span>
            <span>HTML</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/tictactoe.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Tic Tac Toe Game</h3>
          <p>
            A fun and interactive Tic Tac Toe game built with React, allowing
            users to play against the computer or another player.
          </p>
          <div className="project-tech">
            <span>JAVASCRIPT</span>
            <span>CSS</span>
            <span>HTML</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/randomgifgenerator.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Random GIF Generator</h3>
          <p>
            A fun and interactive web application that generates random GIFs
            based on user input and preferences.
          </p>
          <div className="project-tech">
            <span>REACT</span>
            <span>TAILWINDCSS</span>
            <span>GIPHY API</span>
            <span>HTML</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
