import './color.css'

const Color = ({squared, color, setSelected, selected}) => {
    const addSelected = (color) => {
        const newSelected = [...selected];
        for (let i = 0; i < newSelected.length; i++) {
            if (newSelected[i] == `#ACACAC`) {
                newSelected[i] = color;
                break;
            }
        }
        setSelected(newSelected);
      };

    return (<div onClick={() => {
        addSelected(color)
    }} style={{backgroundColor: color, borderRadius: (squared? `5px` : `100px`)}} className='color'></div>)
}

export default Color;