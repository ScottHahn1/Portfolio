import '../styles/Navbar.css';
import CV from '../assets/ScottHahn-CurriculumVitae.pdf';
import { useState } from 'react';

const Navbar = () => {
  const [navIsClicked, setNavIsClicked] = useState(false);

  const openNav = () => {
    setNavIsClicked(!navIsClicked);
  }

  return (
    <>
      <nav className='navbar'>
        <div className='cv'>
          <a href={CV} download>Download CV</a>
        </div>

        <div className='nav-links'>
          <a href='#home'>
            <h4>Home</h4>
          </a>
          <a href='#projects'>
            <h4>Projects</h4>
          </a>
          <a href='#about'>
            <h4>About</h4>
          </a>
          <a href='#contact'>
            <h4>Contact</h4>
          </a>
        </div>

        <div className='hamburger-menu' onClick={openNav}>
          <div className='hamburger-item'></div>
          <div className='hamburger-item'></div>
          <div className='hamburger-item'></div>
        </div>
      </nav>
      
      <ul className={ navIsClicked ? 'mobile-nav-list open' : 'mobile-nav-list' }>
        <li className='mobile-nav-item'>Home</li>
        <li className='mobile-nav-item'>Projects</li>
        <li className='mobile-nav-item'>About</li>
        <li className='mobile-nav-item'>Contact</li>
      </ul>
    </>
  )
}

export default Navbar;