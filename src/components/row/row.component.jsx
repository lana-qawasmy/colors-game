import React from "react";
import './row.css';
const arr = new Array(5).fill('gray');

const Row = (props) => {

    return (

        <div className="row-style">
            {
                arr.map((color, index) => (
                    <span
                        key={color + index}
                        className="cell"

                        style={{ backgroundColor: !props.hidden && props.value[index] || color }}
                    //backgroundColor: props.hidden ? "grey" : color 

                    />
                ))

            }
            <div className="stat-placeholder"></div>
            <div >
                {
                    props.calculations && (
                        <h5 >
                            CC:{props.calculations.cc}
                            <br />
                            CR:{props.calculations.cr}
                        </h5>
                    )
                }
            </div>

        </div>
    );
};

export default Row;