import { useState } from 'react';
import { COLORS } from '../../data/data';
import ColorCircle from '../color-circle/color-circle.component';
import ColorsCard from '../colors-card/colors-card.component';
import './answer-section.css';
const AnswerSection = () => {

    const [answer, setAnswer] = useState([]);

    const handleOnColorClick = (color) => {
        if (answer.length < 4)
            setAnswer([...answer, color]);
    }

    return (

        <div className='answer-section-container'>
            {
                <ColorsCard>
                    {
                        answer.map(e => <ColorCircle color={e} />)
                    }
                </ColorsCard>

            }

            <div className='input-colors-card'>
                {
                    <ColorsCard>
                        {COLORS.map(color => <ColorCircle
                            key={color}
                            onClick={handleOnColorClick(color)}
                            color={color}
                        />
                        )}
                    </ColorsCard>
                }
            </div>
        </div>
    );
}

export default AnswerSection;