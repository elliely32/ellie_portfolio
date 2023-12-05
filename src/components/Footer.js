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
                <a href="https://www.linkedin.com/in/elliely32/" target="_blank" rel="noreferrer">
                <div className="socialMediaBubble">
                    <img className="footerSNS" src={linkedin} alt={"linkedin logo"}/>
                </div>
                </a>
                <a href="https://www.instagram.com/sketchie32" target="_blank" rel="noreferrer">
                    <div className="socialMediaBubble">
                        <img className="footerSNS" src={instagram} alt={"instagram logo"}/>
                    </div>
                </a>
                <a href="https://github.com/elliely32" target="_blank" rel="noreferrer">
                    <div className="socialMediaBubble">
                        <img className="footerSNS" src={github} alt={"github logo"}/>
                    </div>
                </a>
                <a href="mailto:elliel.4797@gmail.com" target="_blank" rel="noreferrer">
                    <div className="socialMediaBubble">
                        <img className="footerSNS" src={mail} alt={"mail logo"}/>
                    </div>
                </a>
            </div>
            <p className="copyright">© 2023 Ellie Ly, All Rights Reserved.</p>
        </div>
    )
}

export default Footer;