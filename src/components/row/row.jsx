import React from 'react';
import './row.css';
import Dot from './dot/dot';


const Row =(props)=>{
    let data = props.data;
        //useEffect (()=>{data=props.data});
    return(
        <div className="row">
            {data.map((item,index) =>{
                return <Dot key={index} color={item} state={props.state} setUserInput={props.setUserInput}></Dot>
            })}
        </div>
    );
};

export default Row;