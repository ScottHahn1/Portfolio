import LinkedInIcon from "./LinkedIn-Icon";
import GithubIcon from "./Github-Icon";
import '../styles/Social.css';
import EmailIcon from "./Email-Icon";

const Social = () => {

    return (
        <div className='social-links'>
        {
            // <a href='https://linkedin.com/in/scott-hahn' target='_blank' rel="noreferrer">
            //         <LinkedInIcon />
            // </a>
            
            // <a href='https://github.com/ScottHahn1' target='_blank' rel="noreferrer">
            //         <GithubIcon />
            // </a>

            // <a href='mailto:scotthahn2210@gmail.com'>
            //         <EmailIcon />
            // </a>
        }
            <div>
                <a href='https://linkedin.com/in/scott-hahn' target='_blank' rel="noreferrer">
                    <div className="social-link">
                        <p>LinkedIn</p>
                        <LinkedInIcon />
                    </div>
                </a>
            </div>

            <div>
                <a href='https://github.com/ScottHahn1' target='_blank' rel="noreferrer">
                    <div className="social-link">
                        <p>Github</p>
                        <GithubIcon />
                    </div>
                </a>
            </div>

            <div>
                <a href='mailto:scotthahn2210@gmail.com'>
                    <div className="social-link">
                        <p>E-mail</p>
                        <EmailIcon />
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Social;