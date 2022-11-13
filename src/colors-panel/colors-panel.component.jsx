import { useState } from 'react'
import CirlcePanel from '../circle-panel/circle-panel.component';
import './color-panel.css'
import { COLORS } from '../data/data';


const ColorPanel = (props) => {
    const [answer, setAnswer] = useState([]);
    const buttonClicked = (color) => {
        if (answer.length < 4) {
            setAnswer([...answer, color]);
        }
    }
    return (
        <div>
            <CirlcePanel value={answer} />
            <div className='color-panel'>
                {
                    COLORS.map(color => <span
                        key={color}
                        className='box'
                        style={{ backgroundColor: color }}
                        onClick={() => buttonClicked(color)}
                    />)
                }
            </div>
        </div>
    )
}

export default ColorPanel;