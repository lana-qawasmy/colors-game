
const AnAnswer = (props) => {
    return (
        <div className="answer-panel">
            {
                props.colors.map(
                    (color, index) => <span key={`${color}${index}`} className="answer-color-field" style={{ backgroundColor: props.hidden ? 'grey' : color }}></span>
                )
            }
            {!props.question
                ? <div className="result">
                    <div>CC: <b>{props.result.cc}</b></div>
                    <div>CR: <b>{props.result.cr}</b></div>
                </div>
                : <div className="empty" />
            }
        </div>
    )
}

export default AnAnswer;