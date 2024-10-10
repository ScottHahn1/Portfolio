import useFade from "../hooks/useFade";
import { useRef } from "react";

const Project = ({ title, technologiesUsed, overview, liveLink, githubLink, imgSrc, imgAlt }) => {
    const ref = useRef();
    const isVisible = useFade(ref);

    return (
        <div className={`project fade-in ${isVisible ? 'visible' : ''}`} ref={ref}>
        <h3>{title}</h3>

        <div className="project-technologies">
          {technologiesUsed.map((tech, idx) => (
                <p key={idx}>
                  <strong>{tech}</strong>
                </p>
          ))}
        </div>

        <p>
          {overview}
        </p>
      
        <div className="project-btns">
          <a href={liveLink} target="_blank" rel="noreferrer">
            <button>Live Demo</button>
          </a>
          <a href={githubLink} target="_blank" rel="noreferrer">
            <button>See Code</button>
          </a>
        </div>

        <img src={imgSrc} alt={imgAlt} />
      </div>
    )
}

export default Project;