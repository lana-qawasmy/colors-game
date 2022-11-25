import './colors-card.css'

let answers = new Array(4).fill('grey')
const ColorsCard = () => {
    return (
        <div className='colors-card'>
        <button className='clear-btn'>X</button>
            {answers.map(color =>
                <div className='circle' style={{ backgroundColor: color }} />
            )}
        </div>
    )
}

export default ColorsCard;