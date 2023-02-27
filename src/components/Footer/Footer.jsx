import './footer.css'
import twitter from '../../assets/footer/twitter-icon.svg'
import instagram from '../../assets/footer/instagram-icon.svg'
import linkedin from '../../assets/footer/linkedin-icon.svg'
const Footer = () => {

    return (
        <div className="footer">
            <div className='footer-contacts'>
                <h2 className='footer-contacts-header'>Dolia Cats</h2>
                <p className='footer-contacts-text'>Enter your email to get notified by Dolia Cats for latest updates.</p>
                <div className='footer-socialmedia'>
                    <img className='footer-socialmedia-icon' src={twitter} alt="twitter" loading="lazy"/>
                    <img className='footer-socialmedia-icon' src={instagram} alt="instagram" loading="lazy"/>
                    <img className='footer-socialmedia-icon' src={linkedin} alt="linkedin" loading="lazy"/>
                </div>
                <div className='footer-context-email'>
                    <input type="email" placeholder='Email address'/>
                </div>
                <div className='footer-context-termsconditions'>
                    <p>terms</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
            <div className='footer-section'>
                <h2 className='footer-section-header'>Marketplace</h2>
                <a className='footer-link' href="#"><p className='footer-link-text'>Explore</p></a>
                <a className='footer-link' href="#"><p className='footer-link-text'>All connections</p></a>
                <a className='footer-link' href="#"><p className='footer-link-text'>About</p></a>
            </div>
            <div className='footer-section'>
                <h2 className='footer-section-header'>My account</h2>
                <a className='footer-link' href="#"><p className='footer-link-text'>Profile</p></a>
                <a className='footer-link' href="#"><p className='footer-link-text'>Favorites</p></a>
                <a className='footer-link' href="#"><p className='footer-link-text'>Watchlist</p></a>
                <a className='footer-link' href="#"><p className='footer-link-text'>My collections</p></a>
                <a className='footer-link' href="#"><p className='footer-link-text'>Settings</p></a>
            </div>
            <div className='footer-section'>
                <h2 className='footer-section-header'>Resources</h2>
                <a className='footer-link' href="#"><p className='footer-link-text'>Platform Status</p></a>
                <a className='footer-link' href="#"><p className='footer-link-text'>Partners</p></a>
                <a className='footer-link' href="#"><p className='footer-link-text'>Taxes</p></a>
                <a className='footer-link' href="#"><p className='footer-link-text'>Newsletter</p></a>
            </div>
            <div className='footer-section'>
                <h2 className='footer-section-header'>Community</h2>
                <a className='footer-link' href="#"><p className='footer-link-text'>Help center</p></a>
                <a className='footer-link' href="#"><p className='footer-link-text'>Meelk Token</p></a>
                <a className='footer-link' href="#"><p className='footer-link-text'>Suggest Feature</p></a>
                <a className='footer-link' href="#"><p className='footer-link-text'>Subscribe</p></a>
            </div>
        </div>
    )
}

export default Footer