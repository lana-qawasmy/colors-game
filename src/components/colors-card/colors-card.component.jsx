import './colors-card.css'
import Card from '../card/card.component'

let answers = new Array(4).fill('#c1c0c0')
const ColorsCard = (props) => {
    return (
        <div className='colors-card'>
            <Card>
                {props.withClearBtn && <button className='clear-btn'>x</button>}
                {answers.map((color, index) =>
                    <div
                        className='circle'
                        key={"color_" + Date.now() + index}
                        style={{ backgroundColor: color }}
                    />
                )}
            </Card>
        </div>
    )
}

export default ColorsCard;