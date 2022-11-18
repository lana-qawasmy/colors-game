import './colors-card.css'

let answers = new Array(4).fill('grey')
const ColorsCard = (props) => {
    return (
        <div className='colors-card'>
            {props.withClearBtn && <button className='clear-btn'>x</button>}
            {answers.map((color, index) =>
                <div
                    className='circle'
                    key={"color_" + Date.now}
                    style={{ backgroundColor: color }}
                />
            )}
        </div>
    )
}

export default ColorsCard;