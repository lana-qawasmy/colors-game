import './game-page.css';
import Header from '../../components/header/header.component';
import TryList from '../../components/tries/try-list.component';
import Row from '../../components/row/row';
import { getPalete} from '../../data/data';
import { useState } from 'react';




const Game =(props)=>{
    const [userInput,setUserInput]= useState(['darkgray','darkgray','darkgray','darkgray']);
    let randPalete = props.randPalete;
    return <div className="game-container">
        <Header/>
        <Row data ={randPalete} state = {true}  ></Row>
        <TryList  setUserInput={setUserInput}/>
        <Row data={userInput} state={true} ></Row>
        <Row data ={getPalete()} state={false} setUserInput={setUserInput}></Row>
        {console.log('helooooo')}
    </div>;
}


export default Game;