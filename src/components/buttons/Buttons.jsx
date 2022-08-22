import "./style.css";

export const ButtonHeader = (props) => {
  return <button className="btn-header">{props.txtBtn}</button>;
};

export const ButtonGrid = (props) => {
  return (
    <button className="btn" onClick={props.onClick}>
      {props.txtBtn}
    </button>
  );
};
