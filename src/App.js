import { useState } from 'react';
import './App.css';
import Board from './components/board/board';
import { GetRandColor } from './services/services';

function App() {
    const [HiddenResult, setHiddenResult] = useState(GetRandColor());
    return (
        <div className="App">
            <Board
                setHiddenResult={setHiddenResult}
                ResultArray={HiddenResult}
            />
        </div>
    );
}

export default App;
