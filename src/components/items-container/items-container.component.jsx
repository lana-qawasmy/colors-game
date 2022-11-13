import "./item-container.css";
import Color from "../color/color.component";
import XSign from "../x-sign/x-sign.component";

const ItemContainer = ({ squared, colors, setSelected, selected, cc, cr }) => {
  return (
    <div className="item-container">
        {/* <XSign></XSign> */}
      {colors.map((color) => <Color setSelected={setSelected} selected={selected} color={color} squared={squared}></Color>)}
      {!squared && <div className="data">
        {cc != null && cr != null && (<p>CC: {cc} <br /> CR: {cr}</p>)}
      </div>}
    </div>
  );
};

export default ItemContainer;