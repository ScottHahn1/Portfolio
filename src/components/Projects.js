import "../styles/Projects.css";
import PremImg from "../assets/Prem-League-Screenshot.png";
import MovieImg from "../assets/Movie-Website-Screenshot.png";
import WeatherImg from "../assets/Weather-Guide-Screenshot.png";
// import MarvelImg from "../assets/Marvel-W-Screenshot.png";
import OnlineStoreImg from "../assets/Online-Store-Screenshot.png";
import Project from "./Project";

const Projects = () => {

  return (
    <section className='projects inter'>
      <h2 className='montserrat'>Projects</h2>

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
        technologiesUsed={ ["HTML", "CSS", "TypeScript", "React", "Node.js", "Express", "MySQL"] }
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
        title="Premier League"
        technologiesUsed={ ["HTML", "CSS", "React", "Node.js", "Express"] }
        overview="This is a website created with React which contains information about
          the English Premier League such as latest news, fixtures, results,
          league table information etc."
        liveLink="https://scotthahn1.github.io/Premier-League"
        githubLink="https://github.com/ScottHahn1/Premier-League"
        imgSrc={PremImg}
        imgAlt="Premier League project"
      />

      <Project
        title="Weather Guide"
        technologiesUsed={ ["HTML", "CSS", "TypeScript", "React", "Node.js", "Express"] }
        overview="An app which gives weather information for a specific location of your choosing. 
          Includes current, today's, daily, weekly, and hourly weather data. 
          Node.js/Express are used for API calls and routing."
        liveLink="https://weather-guide-v2.netlify.app"
        githubLink="https://github.com/ScottHahn1/Weather-Guide"
        imgSrc={WeatherImg}
        imgAlt="Weather Guide project"
      />

      {/* <Project
        title="Marvel World"
        technologiesUsed={ ["HTML", "CSS", "TypeScript", "React", "Node.js", "Express"] }
        overview="A website that provides information about Marvel news, comics, characters, movies, and TV series. 
          Node.js/Express are used for API calls and routing."
        liveLink="https://marvel-world-heroes.netlify.app"
        githubLink="https://github.com/ScottHahn1/Marvel"
        imgSrc={MarvelImg}
        imgAlt="Marvel World project"
      /> */}
    </section>
  );
};

export default Projects;
