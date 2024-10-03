import '../styles/Navbar.css';
import CV from '../assets/Scott Hahn Curriculum Vitae.pdf';
import { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [navIsClicked, setNavIsClicked] = useState(false);

  const openNav = () => {
    setNavIsClicked(!navIsClicked);
  }

  return (
    <>
      <nav className='navbar'>
        <div className='cv'>
          <a href={CV} download>Download My CV</a>
        </div>

        <div className='nav-links'>
          <Link to='home' spy={true} smooth={true} offset={50} duration={500}>
            <h4>Home</h4>
          </Link>
          <Link to='projects' spy={true} smooth={true} offset={50} duration={500}>
            <h4>Projects</h4>
          </Link>
          <Link to='about' spy={true} smooth={true} offset={50} duration={500}>
            <h4>About</h4>
          </Link>
          <Link to='contact' spy={true} smooth={true} offset={50} duration={500}>
            <h4>Contact</h4>
          </Link>
        </div>

        <div className='hamburger-menu' onClick={openNav}>
          <div className='hamburger-item'></div>
          <div className='hamburger-item'></div>
          <div className='hamburger-item'></div>
        </div>
      </nav>
      
      <ul className={ navIsClicked ? 'mobile-nav-list open' : 'mobile-nav-list' }>
        <Link to='home' spy={true} smooth={true} offset={50} duration={500}>
          <li className='mobile-nav-item'>Home</li>
        </Link>
        <Link to='projects' spy={true} smooth={true} offset={50} duration={500}>
          <li className='mobile-nav-item'>Projects</li>
        </Link>
        <Link to='about' spy={true} smooth={true} offset={50} duration={500}>
          <li className='mobile-nav-item'>About</li>
        </Link>
        <Link to='contact' spy={true} smooth={true} offset={50} duration={500}>
          <li className='mobile-nav-item'>Contact</li>
        </Link>
      </ul>
    </>
  )
}

export default Navbar;