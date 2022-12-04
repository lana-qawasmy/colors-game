import ColorsCard from "../colors-card/colors-card.component";

const Question = (props) => {
  return (
    <ColorsCard
      hide={!props.win}
      colors={props.colors}
    />
  );
};
export default Question;

// calculate win here?