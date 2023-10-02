import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const About = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="progress-bar-animate"
      />
      <div className="about">
        <h2>Want to know me?</h2>

        <article>
          <p>Hello, I am...</p>
          <p>
            If you are here, you already know my name. So let me give you a brief
            overview of myself.
          </p>
          <br /><br />
          <h2>Education</h2>
          <p>Completed my<em style={{color:"#deb04c"}}> BSc Computer Science</em> from University of Mumbai</p>
          <p>
            CGPA : 9.45
          </p>
          <p>Percentage : 82.46</p>
          <br /><br />
          <h2>What I like </h2>
          <ul style={{listStyleType:"none"}}>
            <li>
              - watching anime</li>
            <li>- exploring new technologies</li>
            <li>- scrolling through instagram</li>
          </ul>
          <br /><br />
          <h2>Achievements</h2>
          <p>Bagged <em style={{color:"#deb04c"}}>first rank</em> in my college.</p>
          <p>
            Got selected for Final Round in 17th Aavishkar Inter-Collegiate / Institute / Department Research Convention, where only 7 were selected out of 50 participants.
          </p>
          <br /><br />
          <h2>Which skills do I possess</h2>
          <ul style={{listStyleType:"none"}}>
            <li>- active listening</li>
            <li>- quick learner</li>
            <li>that's all I know ^_^</li>
          </ul>
          <br /><br />
          <h2>Technical Skills</h2>
          <ul style={{listStyleType:"none"}}>
            <li>- MERN Stack</li>
            <li>- REST Api</li>
            <li>- Typescript, Java</li>
            <li>- React Router</li>
            <li>- Redux, Redux Toolkit</li>
            <li>- Deployment</li>
            <li>- Git, Github</li>
            <li>- TailwindCSS, SASS, Emotion(CSS in JS)</li>
            <li>- SQL, Firebase, MongoDB Atlas</li>
            <li>- Authenticaion, Authorization</li>
            <li>- Webpack, Vite</li>
            <li>- CORS</li>
            <li>- Postman</li>
            <li>- Babel</li>
          </ul>
          </article>
      </div>
    </>
  );
};

export default About;
