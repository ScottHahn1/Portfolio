import '../styles/Home.css';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import Social from '../components/Social';

const Home = () => {
  return (
    <main className='main'>
      <div className='main-content' id='home'
      >
        <div className='intro montserrat'>
          <h1>Scott Hahn</h1>
          <h2>Full-Stack Web Developer</h2>
        </div>
        <Social />
      </div>

      <Projects />
      <About />
      <Contact />
    </main>
  )
}

export default Home;