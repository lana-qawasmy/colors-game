import './panel.css';
import COLORS from '../data/data';

const Panel = () =>{

    const handleClick = (color) =>{
        
    }

    return(
        <div className='panel'>
            {
                COLORS.map(color =>(
                    <span
                     key={color}
                     className='color-field'
                     style={{backgroundColor:color}}
                     onClick={() => handleClick(color)}
                     />
                ))
            }
            {/* <span className='color-field red'></span>
            <span className='color-field green'></span>
            <span className='color-field yellow'></span>
            <span className='color-field blue'></span>
            <span className='color-field orange'></span>
            <span className='color-field purple'></span> */}
        </div>
    )
}

export default Panel;