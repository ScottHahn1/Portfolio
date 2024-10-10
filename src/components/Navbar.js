import '../styles/Navbar.css';
import CV from '../assets/Scott Hahn Curriculum Vitae.pdf';
import { useState } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [navIsClicked, setNavIsClicked] = useState(false);

  const openNav = () => {
    setNavIsClicked(!navIsClicked);
  }

  return (
    <>
      <nav className='navbar montserrat'>
        <div className='cv'>
          <a href={CV} download>
            <p><strong>Download My CV</strong></p>
            <span>
              <FontAwesomeIcon icon={faCircleDown} />
            </span>
          </a>
        </div>

        <ul className='nav-links inter'>
          <Link to='home' spy={true} smooth={true} offset={50} duration={500}>
            <li>Home</li>
          </Link>
          <Link to='projects' spy={true} smooth={true} offset={50} duration={500}>
            <li>Projects</li>
          </Link>
          <Link to='about' spy={true} smooth={true} offset={50} duration={500}>
            <li>About</li>
          </Link>
          <Link to='contact' spy={true} smooth={true} offset={50} duration={500}>
            <li>Contact</li>
          </Link>
        </ul>

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