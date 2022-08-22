import "./style.css";
import {ButtonHeader} from "../buttons/Buttons.jsx"

export function FormApp(props) {
  return (
    <form>
      <label className="lbl-form">Seu nome:</label>
      <input type="text" placeholder="Seu nome"></input>
      <label className="lbl-form">Seu email:</label>
      <input type="text" placeholder="Seu email"></input>
      <label className="lbl-form">CPF:</label>
      <input type="number" placeholder="CPF"></input>
      <div className="btn-radio">
        <label>Masculino
        <input type="radio"></input></label>
        <label>Feminino
        <input type="radio"></input></label>
      </div>
      <ButtonHeader txtBtn="Enviar"/>
    </form>
  );
}
