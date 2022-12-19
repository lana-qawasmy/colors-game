import React from "react";
import './header.css'

const Header = (props) => {
    return (
        <div>
            <div className='header'>

                <h1>Colors Game
                    <span>Steps: {props.answers.length}</span>
                </h1>
            </div>
        </div>


    )
}
export default Header;
