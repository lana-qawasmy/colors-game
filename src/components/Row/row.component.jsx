import React from "react";
import './row.css';

const array = new Array(4).fill('gray');

const Row = (props) =>{
    return (
        <div className="row">
            {
                array.map((color,index) =>
                <span className="cell" key={color+index} style={{backgroundColor:color}}/>

                )
            }
              {props.calcs && (<span className="calcs">CC: {props.calcs.cc}<br />CR: {props.calcs.cr}</span>
            )}


        </div>
    )
}

export default Row