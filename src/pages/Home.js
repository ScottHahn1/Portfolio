import '../styles/Home.css';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import { useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import Social from '../components/Social';
import { motion } from "framer-motion";

const Home = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      <main className='main'>
        <motion.div className='main-content' id='home' style={{ backgroundColor: darkTheme && 'darkblue' }}
         variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}  
          initial='hidden'
          animate='visible'
          transition={{ duration: 1 }}
        >
          <div className='intro'>
            <h1>Scott Hahn</h1>
            <h2>Full-Stack Web Developer</h2>
          </div>
          <Social />
        </motion.div>

        <Projects />
        <About />
        <Contact />
      </main>
    </ThemeContext.Provider>

  )
}

export default Home;