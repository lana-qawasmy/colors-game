import React from "react";

const Row= (props) => {
   const initArray = new Array(4).fill('gray'); 
  return (
    <div className="row bordered"> 
    {
       initArray.map((color,index) =>( 
       <span
        key={color + index}
         className='Cell round'
          style={{backgroundColor: props.value[index] || color}}></span>))
    }
    </div>
  );
  
} 
export default Row;