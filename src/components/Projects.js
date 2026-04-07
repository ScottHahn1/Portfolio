import "../styles/Projects.css";
import MovieImg from "../assets/Movie-Website-Screenshot.png";
import WeatherImg from "../assets/Weather-Guide-Screenshot.png";
import OnlineStoreImg from "../assets/Online-Store-Screenshot.png";
import YouTubeCloneImg from "../assets/YouTube-Clone-Screenshot.png";
import ScottsRemovalsImg from "../assets/scotts-removals.png"
import Project from "./Project";

const Projects = () => {
  return (
    <section className="projects inter">
      <h2 className="montserrat">Projects</h2>

      <Project
        title="Aggro Gaming"
        technologiesUsed={ ["HTML", "CSS", "TypeScript", "React", "Node.js", "Express", "MySQL"] }
        overview="An online store with CRUD functionality which sells gaming products. 
          Users can register and login to add or delete items from their cart.
          Data retrieved is from a self-made MYSQL api.
          MySQL is used for storing users' names/passwords and products which they choose to add to their cart.
          Passwords are hashed with Bcrypt. (Products are not real and there is no payment invloved.)"
        liveLink="https://online-store-frontend-mocha.vercel.app"
        githubLink="https://github.com/ScottHahn1/Online-Store"
        imgSrc={OnlineStoreImg}
        imgAlt="Aggro Gaming project"
      />

      <Project
        title="Movie Database"
        technologiesUsed={ ["HTML5", "CSS3", "TypeScript", "React", "Node.js", "Express", "MySQL"] }
        overview="This is a full stack website with CRUD functionality which contains information about
          thousands of movies, series and famous people involved in the film
          industry. Logged in users can rate movies/series and add movies/series to their favourites' list. 
          MySQL is used for storing user's names/passwords and data which they choose to save.
          Passwords are hashed with Bcrypt."
        liveLink="https://movie-db-frontend-psi.vercel.app"
        githubLink="https://github.com/ScottHahn1/Movie-DB"
        imgSrc={MovieImg}
        imgAlt="Movie Database project"
      />

      <Project
        title="Scott's Removals"
        technologiesUsed={ ["HTML", "CSS", "JavaScript"] }
        overview="Created a professional website for a small business highlighting services, past work, 
          and contact options, designed to strengthen online presence and make it simple for clients to get in touch."
        liveLink="https://scottsremovals.co.za"
        githubLink="https://github.com/ScottHahn1/Portfolio"
        imgSrc={ScottsRemovalsImg}
        imgAlt="Scott's Removals project"
      />

      <Project
        title="YouTube Clone"
        technologiesUsed={ ["HTML5", "Tailwind CSS", "TypeScript", "Next.js", "YouTube Data API"] }
        overview="A fully functional YouTube clone that allows users to browse and watch videos, 
          explore playlists and channels, read comments, and search for content. This project replicates 
          the core YouTube experience minus user interactions like logging in, commenting, and uploading."
        liveLink="https://youtube-clone-delta-khaki.vercel.app/"
        githubLink="https://github.com/ScottHahn1/YouTube-Clone"
        imgSrc={YouTubeCloneImg}
        imgAlt="YouTube Clone project"
      />
    </section>
  );
};

export default Projects;
