import "./style.css";

export default function CardsEmail(props) {
  return (
    <div className="card-email">
      <div className="img-card-email">
        <img src={props.img}></img>
      </div>
      <div className="descricao-card-email">
        <h4>{props.nome}</h4>
        <p>
          {props.descricao}
        </p>
        <h6 className="preco-antigo">{`De: R$ ${props.precoAntigo}`}</h6>
        <h3>{`Por: R$ ${props.precoAtual}`}</h3>
        <h6>{`ou ${props.parcelas}x R$ ${props.precoParcelado}`}</h6>
        <button className="btn-compra">Comprar</button>
      </div>
    </div>
  );
}
