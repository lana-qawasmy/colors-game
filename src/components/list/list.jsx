import React from 'react';
import ColorBox from '../color-box/color-box';
import './list.css';

const List = ({ list }) => {

    return (
        <div className='list'>
            {
                list.map((item, ind) => {
                    return (
                        <ColorBox
                            key={'colors' + item + 'color' + ind}
                            colorsArray={item}
                            hidden={false}
                            state={1}
                        />
                    );
                })}
        </div>
    );
};

export default List;