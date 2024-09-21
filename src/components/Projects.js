import "../styles/Projects.css";
import PremImg from "../assets/Prem-League-Screenshot.png";
import MovieImg from "../assets/Movie-Website-Screenshot.png";
import WeatherImg from "../assets/Weather-Guide-Screenshot.png";
import SpotifyVideo from "../assets/Spotify-Clone-Video-Demo.mp4";
import MarvelImg from "../assets/Marvel-W-Screenshot.png";
import OnlineStoreImg from "../assets/Online-Store-Screenshot.png";

const Projects = () => {
  return (
    <section className='projects'>
      <h2>Projects</h2>

      <div className='project'>
        <h3>Aggro Gaming</h3>

        <div className="project-technologies">
          <p>HTML</p>
          <p>CSS</p>
          <p>TypeScript</p>
          <p>React</p>
          <p>Node.js</p>
          <p>Express</p>
          <p>MySQL</p>
        </div>

        <p>
          An online (fake) store that specializes in gaming products. 
          Users can register and login to add or delete items from their cart.
          Data retrieved is from a self-made MYSQL api.
          MySQL is used for storing users' names/passwords and products which they choose to add to their cart.
          Passwords are hashed with Bcrypt.
        </p>
      
        <div className="project-btns">
          <a href="https://online-store-frontend-mocha.vercel.app" target="_blank" rel="noreferrer">
            <button>Live Demo</button>
          </a>
          <a href="https://github.com/ScottHahn1/Online-Store" target="_blank" rel="noreferrer">
            <button>See Code</button>
          </a>
        </div>

        <img src={OnlineStoreImg} alt='Aggro Gaming' />
      </div>


      <div className='project'>
        <h3>Movie Database</h3>

        <div className="project-technologies">
          <p>HTML</p>
          <p>CSS</p>
          <p>TypeScript</p>
          <p>React</p>
          <p>Node.js</p>
          <p>Express</p>
          <p>MySQL</p>
        </div>

        <p>
          This is a full stack website which contains information about
          thousands of movies, series and famous people involved in the film
          industry. MySQL is used for storing users' names/passwords and data which they choose to save.
          Passwords are hashed with Bcrypt.
        </p>
      
        <div className="project-btns">
          <a href="https://movie-db-frontend-psi.vercel.app" target="_blank" rel="noreferrer">
            <button>Live Demo</button>
          </a>
          <a href="https://github.com/ScottHahn1/Movie-DB" target="_blank" rel="noreferrer">
            <button>See Code</button>
          </a>
        </div>

        <img src={MovieImg} alt='Movie Database' />
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
        <h3>Weather Guide</h3>

        <div className="project-technologies">
          <p>HTML</p>
          <p>CSS</p>
          <p>TypeScript</p>
          <p>React</p>
          <p>Node.js</p>
          <p>Express</p>
          <p>OpenWeatherMap API</p>
        </div>

        <p>
          An app which gives weather information for a specific location of your
          choosing. Includes current, today's, daily, weekly, and hourly weather data. Node.js/Express are used for API calls and routing.
        </p>

        <div className="project-btns">
          <a href="https://weather-guide-v2.netlify.app" target="_blank" rel="noreferrer">
            <button>Live Demo</button>
          </a>
          <a href="https://github.com/ScottHahn1/Weather-Guide" target="_blank" rel="noreferrer">
            <button>See Code</button>
          </a>
        </div>
        
        <img src={WeatherImg} alt='Weather Guide App' />
      </div>

      // <div className='project'>
      //   <h3>Spotify Clone</h3>

      //   <div className="project-technologies">
      //     <p>HTML</p>
      //     <p>CSS</p>
      //     <p>React</p>
      //     <p>Spotify API</p>
      //   </div>

      //   <p>
      //     A clone of Spotify thats able to play music as well as add or delete
      //     songs to and from your library. <strong>Note: </strong> A spotify premium membership is
      //     required to play songs, otherwise browsing is fine.
      //   </p>

      //   <div className="project-btns">
      //     <a href="https://scotthahn1.github.io/Spotify-Clone/" target="_blank" rel="noreferrer">
      //       <button>Live Demo</button>
      //     </a>
      //     <a href="https://github.com/ScottHahn1/Spotify-Clone" target="_blank" rel="noreferrer">
      //       <button>See Code</button>
      //     </a>
      //   </div>
    
      //   <video controls>
      //     <source src={SpotifyVideo} type="video/mp4" />
      //     Your browser does not support the video tag.
      //   </video> 
      // </div>

      <div className='project'>
        <h3>Marvel World</h3>

        <div className="project-technologies">
          <p>HTML</p>
          <p>CSS</p>
          <p>React</p>
          <p>TypeScript</p>
          <p>Node.js</p>
          <p>Express</p>
          <p>Marvel Comics API</p>
          <p>The Movie Database (TMDB) API</p>
        </div>

        <p>
          A website that provides information about Marvel news, comics, characters, movies, and TV series. Node.js/Express are used for API calls and routing.
        </p>

        <div className="project-btns">
          <a href="https://marvel-world-heroes.netlify.app" target="_blank" rel="noreferrer">
            <button>Live Demo</button>
          </a>
          <a href="https://github.com/ScottHahn1/Marvel" target="_blank" rel="noreferrer">
            <button>See Code</button>
          </a>
        </div>

        <img src={MarvelImg} alt='Marvel World Website' />
      </div>
    </section>
  );
};

export default Projects;
