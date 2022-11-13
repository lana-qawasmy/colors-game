import './header.css'

const Header = ({steps}) => {
    return <div className='header'>
        <p className='title'>Colors Game</p>
        <p>Steps: {steps}</p>
    </div>
}

export default Header;