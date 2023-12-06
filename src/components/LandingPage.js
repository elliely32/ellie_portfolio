import './LandingPage.css'
import icon from '../assets/icon.png';
import { useNavigate } from 'react-router-dom';

const LandingPage = () =>{
    const navigate = useNavigate();
    return(
        <div className="landingPageRoot">
            <div className="landingBanner">
                <img className="landingImage" src={icon} alt="cartoon drawing of Ellie Ly"/>
                <div className="landingPageDesc">
                    <p className="name">ELLIE LY</p>
                    <p className="titles">SOFTWARE ENGINEER | ARTIST |  STORYTELLER</p>
                </div>
            </div>
            <div className='landingBlurbContainer'>
                <p className="landingBlurb">Hey There! Welcome to my portofolio website. I'm a NYC based software engineer exploring the combination of tech and art. Check out some of my work!</p>
                <div className="buttonContainer">
                    <div className="button" onClick={()=>navigate('/code')}>CODE PROJECTS</div>
                    <div className="button" onClick={()=>navigate('/art')}>ARTWORK</div>
                    <div className="button" onClick={()=>navigate('/story')}>STORY PIECES</div>
                    <div className="button" onClick={()=>navigate('/about')}>ABOUT ME</div>
                </div>
            </div>
            
        </div>
    )
}

export default LandingPage;