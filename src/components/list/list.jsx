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
                            colorsArray={item.answer}
                            hidden={false}
                            state={item.State}
                        />
                    );
                })}
        </div>
    );
};

export default List;