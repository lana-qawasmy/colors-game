import './App.css';
import Board from './components/board/board';
import GetRandColor from './services/services';
let A =[];
function App() {
    GetRandColor(A);
    return (
        <div className="App">
            <Board ResultArray={A} />
        </div>
    );
}

export default App;
