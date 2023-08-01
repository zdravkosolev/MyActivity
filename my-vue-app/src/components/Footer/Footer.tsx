import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookSquare , faTwitterSquare, faInstagramSquare} from "@fortawesome/free-brands-svg-icons"

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css"


export const Footer = () =>{
    return <>
            <div className="footer">
                <div>
                    <h3>Social Share</h3>
                    <div>
                    <FontAwesomeIcon className="footerIcons" icon={faFacebookSquare} />
                    <FontAwesomeIcon className="footerIcons" icon={faInstagramSquare} />
                    <FontAwesomeIcon  className="footerIcons"icon={faTwitterSquare} />
                    <FontAwesomeIcon className="footerIcons" icon={faLinkedin} />
                    </div>
                 </div>
                <div>
                    <h3>Event Info</h3>
                    <div className="paragraphsProps">
                        <p>Enter Now</p>
                        <p>Event Info</p>
                        <p>Course Mpas</p>
                        <p>RacePack</p>
                        <p>Results</p>
                        <p>FAQs</p>
                        <p>Am I Registered?</p>
                    </div>
                </div>
                <div>
                   <h3>Registration</h3>
                   <div className="paragraphsProps">
                        <p>Volunteers</p>
                        <p>Gallery</p>
                        <p>Press</p>
                        <p>Results</p>
                        <p>Privacy Policy</p>
                        <p>Service Plus</p>
                        <p>Contacts</p>
                    </div>
                </div>
                <div>
                    <h3>Shedule</h3>
                    <div className="paragraphsProps">
                        
                        <p>Gallery</p>
                        <p>About</p>
                        <p>Videos</p>
                        <p>Results</p>
                        <p>FAQs</p>
                        <p>Results</p>
                        <p>Volunteers</p>
                    </div>
                </div>
            </div>
    
    
    
    
    
    </>
}