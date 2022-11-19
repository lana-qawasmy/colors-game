import React from 'react';
import './result.css';

/**
 *  
 * @param {{
 *      win:boolean;
 *      show:boolean;
 * }} props 
 * @returns 
 */
const Result = (props) => {
    return (
        <div className='result'>
            {
                props.win
                    ? <div className='congratulations'>
                        <span>
                            Congratulations
                        </span>
                        <span>
                            🎉
                        </span>

                    </div>
                    : <div className='try'>
                        <span>
                            Try more hard
                        </span>
                        <span>
                            💪
                        </span>
                    </div>
            }
        </div>
    );
};

export default Result;