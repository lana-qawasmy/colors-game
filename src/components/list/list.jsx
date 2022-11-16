import React from 'react';
import ColorBox from '../color-box/color-box';
import './list.css';

/**
 * 
 * @param {string} list 
 * @returns 
 */
const List = ({ list, }) => {

    return (
        <div className='list'>
            {
                list.map((item) => {
                    return (
                        <ColorBox colors={item} />
                    );
                })}
        </div>
    );
};

export default List;