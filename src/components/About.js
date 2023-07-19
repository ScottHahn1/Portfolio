import Skills from "./Skills";
import "../styles/About.css";

const About = () => {
  return (
    <div className='about-container' id='about'>
      <h2>About</h2> 
      <section className='skills-about'>
        <div className="about">
          <h3>Summary</h3>
          <p>
            I'm a self-taught front-end web developer who enjoys solving problems and
            showcasing my skills by building new projects. My focus at the moment is building websites in React but I'm always willing to learn new languages
            or frameworks. My goal as a developer is to always keep improving by learning new ways to write good, clean code, and to feel a sense of pride when looking 
            at my work.
          </p>
        </div>

        <Skills />
      </section>
    </div>
  );
};

export default About;