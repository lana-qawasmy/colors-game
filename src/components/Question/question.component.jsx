import ColorsCard from "../colors-card/colors-card.component";

const Question = (props) => {
  return (
    <ColorsCard colors={props.colors} />
  );
};
export default Question;