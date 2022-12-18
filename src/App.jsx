import './App.css';
import Game from './pages/game-page/game-page';
import { getChoice,setChoice } from './data/data';

function App() {
  const randPalete = getChoice();
  setChoice(randPalete);
  return (
    <div className="App">
      <Game randPalete = {randPalete}/>
    </div>
  );
}

export default App;
