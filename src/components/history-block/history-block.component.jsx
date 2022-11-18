import './history-block.css'
import Card from '../card/card.component'
import ColorsCard from '../colors-card/colors-card.component'

const HistoryBlock = () => {
    return (
        <div className='history-block'>
            <Card>
                <ColorsCard />
                <ColorsCard />
                <ColorsCard />
                <ColorsCard />
                <ColorsCard />
                <ColorsCard />
                <ColorsCard />
                <ColorsCard />
                <ColorsCard />
                <ColorsCard />
                <ColorsCard />
                <ColorsCard />
            </Card>
        </div>
    )
}

export default HistoryBlock;