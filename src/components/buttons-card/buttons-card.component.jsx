import './buttons-card.css'

const ButtonsCard = (props) => {
    return (
        <div className='buttons-card'>
            {props.colors.map(color =>
                <button
                    style={{ backgroundColor: color }}
                />)}
        </div>
    )
}

export default ButtonsCard;