import {COLORS} from '../data/data';

const Answeform =()=>{




    return(
        <div className="AnswerForm">
          <div className="choices">
          {COLORS.map(color =><span key ={color} className="cell" style={{background:color}}></span>)}
       </div> 
       </div>
    )







}
export default Answeform;
