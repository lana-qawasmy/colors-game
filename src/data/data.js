//red, green blue yellow orange purple

const getPalete = () =>{
    const colorPalete = ['red','green','blue','yellow','orange','purple'];
    return colorPalete;
};

const getChoice =()=>{
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      };
    const colorChoices = 
    [
        'red','green','blue','yellow','orange','purple'
    ];
    const choice =
     [
        colorChoices[getRandomInt(6)],colorChoices[getRandomInt(6)]
        ,colorChoices[getRandomInt(6)],colorChoices[getRandomInt(6)]
     ];
    return choice;
};

const getHiddenPalete =()=>{
    const hiddenPalete= ['grey','grey','grey','grey'];
    return hiddenPalete;
};
let userInput=['darkgray','darkgray','darkgray','darkgray'];

const setUserInput = (color) =>{
    for(let i=0;i<userInput.length;i++){
        if(userInput[i] === 'darkgray'){
            userInput[i] = color;
            break;
        }
    }
};
const list= [];
const evalcc=[];
const evalcr=[];
let steps =0;
const listOfTries = () =>{
    if(!userInput.includes('darkgray')){
        list.push(userInput);
        userInput=['darkgray','darkgray','darkgray','darkgray'];
        evalcc.push(evaluation().cc);
        evalcr.push(evaluation().cr);
        steps=steps+1;
    }
    return {list,userInput,evalcc,evalcr};
};
let choice = [];
const setChoice = (input) =>{
    choice = [...input];
    console.log(choice);
}
const evaluation = () =>{
    let cc=0;
    let cr=0;
    for(let i=0;i<choice.length;i++){
        console.log('wiii');
        if(choice[i] === userInput[i]){
            cc+=1;
        }
        for(let j=0;j<choice.length;j++){
            if(choice[j]===userInput[i]){
                cr +=1;
            }
        }
    }
    return {cc,cr};
};
export {
    getPalete,
    getChoice,
    getHiddenPalete,
    setUserInput,
    userInput,
    listOfTries,
    setChoice,
    steps
};