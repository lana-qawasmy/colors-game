import ButtonsCard from '../buttons-card/buttons-card.component';
import ColorsCard from '../colors-card/colors-card.component';
import './answer-form.css'

const AnswerForm = (props) => {
    return (
        <div className='answer-form'>
            <ColorsCard withClearBtn/>
            <ButtonsCard
                colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
            />
        </div>
    )
}
export default AnswerForm;