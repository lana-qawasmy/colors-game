import './App.css';
import Board from './components/board/board';
import { GetRandColor } from './services/services';

function App() {
    const HiddenResult = GetRandColor();
    return (
        <div className="App">
            <Board ResultArray={HiddenResult} />
        </div>
    );
}

export default App;
