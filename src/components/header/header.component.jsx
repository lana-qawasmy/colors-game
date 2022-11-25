import './header.css';

const Header = (props) => {
  return (
    <div className='heading'>
      <h1>Colors Game</h1>
      <h2>Steps: {props.history.length}</h2>
    </div>
  );
};
export default Header;