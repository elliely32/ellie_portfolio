import './Footer.css';
import github from '../assets/footer/github.svg';
import instagram from '../assets/footer/instagram.svg';
import linkedin from '../assets/footer/linkedin.svg';
import mail from '../assets/footer/mail.svg';

const Footer = () =>{
    return(
        <div className="footerRoot">
            <p className="footerHook"> TELL ME YOUR STORY!</p>
            <div className="socialMediaIcons">
                <div className="socialMediaBubble">
                    <a href="https://www.linkedin.com/in/elliely32/" target="_blank" rel="noreferrer">
                        <img className="footerSNS" src={linkedin} alt={"linkedin logo"}/>
                    </a>
                </div>
                <div className="socialMediaBubble">
                    <a href="https://www.instagram.com/sketchie32" target="_blank" rel="noreferrer">
                        <img className="footerSNS" src={instagram} alt={"instagram logo"}/>
                    </a>
                </div>
                <div className="socialMediaBubble">
                    <a href="https://github.com/elliely32" target="_blank" rel="noreferrer">
                        <img className="footerSNS" src={github} alt={"github logo"}/>
                    </a>
                </div>
                <div className="socialMediaBubble">
                    <a href="mailto:elliel.4797@gmail.com" target="_blank" rel="noreferrer">
                        <img className="footerSNS" src={mail} alt={"mail logo"}/>
                    </a>
                </div>
            </div>
            <p className="copyright">© 2023 Ellie Ly, All Rights Reserved.</p>
        </div>
    )
}

export default Footer;