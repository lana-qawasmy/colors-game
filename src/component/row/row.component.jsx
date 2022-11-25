import React from 'react';
import "./row.css";
const Row = (props) => {
    return (
        <div className="row">
            {
                props.colors.map(
                    (color, index) => <span key={color + '_' + index} className="point" style={{ backgroundColor: props.hidden ? 'grey' : color }}></span>
                )
            }
            {!props.question ?
                <div className="stats">
                    <div>CC<b>[{props.stats.cc}]</b></div>
                    <div>CR<b>[{props.stats.cr}]</b></div>
                </div>
                : <div className="stat-placeholder" />
            }
        </div>
    )
}

export default Row;
