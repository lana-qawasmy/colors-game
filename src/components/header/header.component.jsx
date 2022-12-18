import './header.css'
import { steps } from '../../data/data';

const Header= () =>{
    return (
        <div className="header-container">
            <span className="game-name">Colors Game</span>
            <span className="header-steps-counter">Steps: {steps}</span>
        </div>
    );
}

export default Header;