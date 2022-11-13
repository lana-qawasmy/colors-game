
import AnswerSection from '../../components/answer-section/answer-section.component';
import ColorCircle from '../../components/color-circle/color-circle.component';
import ColorsCard from '../../components/colors-card/colors-card.component';
import './home-page.css';


const HomePage = () => {


    return (

        <div className='body-container'>

            <div className='game-container'>

                <div className='header'>

                    <h2>Colors Game</h2>
                    <h2>Steps: 0</h2>
                </div>

                <div className='question-card'>
                    {
                        <ColorsCard>
                            
                        </ColorsCard>
                    }

                </div>

                <AnswerSection />

            </div>
        </div>
    );
}

export default HomePage;