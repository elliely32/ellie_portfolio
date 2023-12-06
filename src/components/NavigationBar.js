import './NavigationBar.css'
import { useLocation, useNavigate } from 'react-router-dom';

const NavigationBar = () =>{
    const location = useLocation();
    const navigate = useNavigate();
    return(
        <div className="navigationBarRoot">
            {location.pathname !== '/' ? (
                <>
                    <div className="navigationHome">
                        <p className="homeLink" onClick={()=>navigate('/')}>ELLIE LY</p>
                    </div>
                    <div className="navigationLinks">
                        <p className="link" onClick={()=>navigate('/code')}>CODE</p>
                        <p className="link" onClick={()=>navigate('/art')}>ART</p>
                        <p className="link" onClick={()=>navigate('/story')}>STORY</p>
                        <p className="link" onClick={()=>navigate('/about')}>ABOUT</p>
                    </div>
                </>
            ):('')}
            
        </div>
    )
}

export default NavigationBar;