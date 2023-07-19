import LinkedInIcon from "./LinkedIn-Icon";
import GithubIcon from "./Github-Icon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styles/Social.css';

const Social = () => {

    return (
        <div className='social-links'>
            <a href='https://linkedin.com/in/scott-hahn' target='_blank' rel="noreferrer">
                <div className='social' >
                    <LinkedInIcon />
                </div>
            </a>
            
            <a href='https://github.com/ScottHahn1' target='_blank' rel="noreferrer">
                <div className='social' >
                    <GithubIcon />
                </div>
            </a>

            <a href='mailto:scotthahn2210@gmail.com'>
                <div className='social'>
                    <FontAwesomeIcon icon={faEnvelope} style={{width: '2rem'}} />
                </div>
            </a>
        </div>
    )
}

export default Social;