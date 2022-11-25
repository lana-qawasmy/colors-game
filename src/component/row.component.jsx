import React from 'react'

const Row = (props) => {
    return (
        <>
            <div className="row">

                {
                    props.colors.map(
                        (color, index) => <span key={color  + index}
                         className="correct"
                          style={{ backgroundColor: props.hidden ? '#ffc2a1' : color }} ></span>
                    )
                }

            </div>
        </>
    )
}

export default Row;
