import { ButtonHeader } from "../buttons/Buttons";
import "./style.css";

export function Header(props) {
  return(
    <header className="header">
      <div>
        <p>Uma seleção de produtos</p>
        <h1>especial para você</h1>
        <p>
          Todos os produtos desta lista foram selecionados a partir da sua
          navegação. Aproveite!
        </p>
      </div>
      <div className="container-buttons">
      <ButtonHeader txtBtn='Conheça a Linx'/>
      <ButtonHeader txtBtn='Ajude o algorítimo'/>
      <ButtonHeader txtBtn='Seus produtos'/>
      <ButtonHeader txtBtn='Compartilhe'/>
      </div>
    </header>
  )
}

export function HeaderEmail() {
  return (
    <header className="header-email">
      <div>
        <p>Uma seleção de produtos</p>
        <h1>especial para você</h1>
        <p>
          Todos os produtos desta lista foram selecionados a partir da sua
          navegação. Aproveite!
        </p>
      </div>
    </header>
  );
}
