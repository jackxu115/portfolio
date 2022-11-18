import LinkedInIcon from '../media/icons8-linkedin-96.png';
import EmailIcon from '../media/icons8-gmail-logo-96.png';
import GitHubIcon from '../media/icons8-github-96.png';
import "../style/Contact.scss"


export const Contact = () => {
    return (
        <div className="Contact">
            <a href="mailto:pengxu19890115@gmail.com"><img src={EmailIcon} alt="Email" className="Contact_Icon"/></a>
            <a href="https://github.com/jackxu115"><img src={GitHubIcon} alt="GitHub" className="Contact_Icon"/></a>
            <a href=""><img src={LinkedInIcon} alt="LinkedIn" className="Contact_Icon"/></a>
        </div>
    )
}