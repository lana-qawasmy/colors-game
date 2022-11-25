import React from 'react';
import './row.css';
const initialColors = new Array(4).fill('gray');
const Row = (props) => {
    return (
        <div className='row'>
            {
                initialColors.map((color, ind) => (
                    <span
                        className="cell"
                        key={color + ind}
                        style={{ backgroundColor: !props.hidden && props.value[ind] || color }} />
                ))
            }
            {props.calcs && (
                <span className="calcs">
                    CC: {props.calcs.cc}
                    <br />
                    CR: {props.calcs.cr}
                </span>
            )}
        </div>
    )
}
export default Row;