import './navigation.css'
import NavButton from './UI/NavButton'
import { Link, useNavigate } from 'react-router-dom'

const Navigation = () => {
    const navigate = useNavigate()
    const handleConnect = () => {
        console.log('connect happend')
    }

    const scrollTop = () => {
        window.scrollTo(0, 0)
    }

    const goBack = () => {
        navigate(-1)
    }

    return (
        <div className="navigation">
            {window.location.pathname === ('/' || '/home') ?
                <NavButton
                    text={`\u1431 home`}
                    action={() => scrollTop}
                /> :
                <Link to={'/home'}>
                    <NavButton
                        text={`\u276E collections`}
                        action={() => goBack}
                    />
                </Link>
            }
            <div className='navigation-connect-section'>
                <NavButton
                    text={`connect`}
                    action={() => handleConnect}
                />
                <div className='navigation-avatar'>

                </div>
            </div>
        </div>
    )
}

export default Navigation