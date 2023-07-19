import "../styles/Projects.css";
import SpotifyImg from "../assets/Spotify-App-Screenshot.png";
import PremImg from "../assets/Prem-League-Screenshot.png";
import MovieImg from "../assets/Movie-App-Screenshot.png";
import WeatherImg from "../assets/Weather-App-Screenshot.png";

const Projects = () => {
  return (
    <section className='projects'>
      <h2>Projects</h2>

      <div className='project'>
        <h3>Spotify Clone</h3>

        <div className="project-technologies">
          <p>HTML</p>
          <p>CSS</p>
          <p>React</p>
          <p>Spotify API</p>
        </div>

        <p>
          A clone of Spotify thats able to play music as well as add or delete
          songs to and from your library. <strong>Note: </strong> A spotify premium membership is
          required to play songs, otherwise browsing is fine.
        </p>

        <div className="project-btns">
          <a href="https://scotthahn1.github.io/Spotify-Clone/" target="_blank" rel="noreferrer">
            <button>Live Demo</button>
          </a>
          <a href="https://github.com/ScottHahn1/Spotify-Clone" target="_blank" rel="noreferrer">
            <button>See Code</button>
          </a>
        </div>
    
        <img src={SpotifyImg} alt='Spotify Clone App' />
      </div>

      <div className='project'>
        <h3>Premier League</h3>

        <div className="project-technologies">
          <p>HTML</p>
          <p>CSS</p>
          <p>React</p>
          <p>TheSportsDb API</p>
          <p>Gnews API</p>
        </div>

        <p>
          This is a website created with React which contains information about
          the English Premier League such as latest news, fixtures, results,
          league table information etc.
        </p>

        <div className="project-btns">
          <a href="https://scotthahn1.github.io/Premier-League/" target="_blank" rel="noreferrer">
            <button>Live Demo</button>
          </a>
          <a href="https://github.com/ScottHahn1/Premier-League" target="_blank" rel="noreferrer">
            <button>See Code</button>
          </a>
        </div>

        <img src={PremImg} alt='Premier League App' />
      </div>

      <div className='project'>
        <h3>Movie DataBase</h3>

        <div className="project-technologies">
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>Webpack</p>
          <p>The Movie Database (TMDB) API</p>
        </div>

        <p>
          This is an app coded with Javascript which contains information about
          thousands of movies, series and famous people involved in the film
          industry.
        </p>

        <div className="project-btns">
          <a href="https://scotthahn1.github.io/Movie-App/" target="_blank" rel="noreferrer">
            <button>Live Demo</button>
          </a>
          <a href="https://github.com/ScottHahn1/Movie-App" target="_blank" rel="noreferrer">
            <button>See Code</button>
          </a>
        </div>

        <img src={MovieImg} alt='Movie DataBase App' />
      </div>

      <div className='project'>
        <h3>Weather Guide</h3>

        <div className="project-technologies">
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>OpenWeatherMap API</p>
        </div>

        <p>
          An app which gives weather information for a specific location of your
          choosing. Includes current and hourly weather details.
        </p>

        <div className="project-btns">
          <a href="https://scotthahn1.github.io/Weather-App/" target="_blank" rel="noreferrer">
            <button>Live Demo</button>
          </a>
          <a href="https://github.com/ScottHahn1/Weather-App" target="_blank" rel="noreferrer">
            <button>See Code</button>
          </a>
        </div>
        
        <img src={WeatherImg} alt='Weather Guide App' />
      </div>
    </section>
  );
};

export default Projects;
