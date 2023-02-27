import './NavButton.css'

const NavButton = ({text, action}) => {

    return (
        <div >
            <button onClick={action()} className="nav-button">{text}</button>
        </div>
    )
}

export default NavButton