import './buttons-card.css'

const ButtonsCard = (props) => {
    return (
        <div className='buttons-card'>
            {props.colors.map((color, ) =>
                <button
                    key={'button_'+  Date.now() }
                    style={{ backgroundColor: color }}
                />)}
        </div>
    )
}

export default ButtonsCard;