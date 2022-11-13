const initarray= new Array(4).fill('grey');
const ColorBallet =(props)=>{

    return(
        <div>
    <div className="ColorBallet"> {
           initarray.map((color, ind)=><span key= {color+ind } classname="cell"
           style={{background:props.value[ind]|| color}}></span>)
    }

        </div>
        </div>
    )
}
export default ColorBallet;