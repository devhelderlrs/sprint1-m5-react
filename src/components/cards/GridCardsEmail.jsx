import React, { useState, useEffect } from "react";
import CardsEmail from "./Cards.jsx";
import {ButtonGrid} from "../buttons/Buttons.jsx";
import axios from "axios";
import "./style.css";

export default function GridCardsEmail() {
  const [info, setInfo] = useState([]);
  const [page, setPage] = useState([]);

  const url =
    "https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setPage(response.data.nextPage);
        setInfo(response.data.products);
      })
      .catch((error) => console.log(error.message));
  }, []);

  function geraProdutos(url) {
    axios
      .get(`https://${url}`)
      .then((response) => {
        setPage(response.data.nextPage);
        setInfo([...info, ...response.data.products]);
      })
      .catch((error) => console.log(error.message));
  }

  return (
    <section className="container-grid-email">
      <span className="container-cards-email">
        {info.map((item) => {
          return(
            <CardsEmail
              img={item.image}
              nome={item.name}
              descricao={item.description}
              precoAntigo={item.oldPrice.toFixed(2)}
              precoAtual={item.price.toFixed(2)}
              parcelas={item.installments.count}
              precoParcelado={item.installments.value.toFixed(2)}
            />
          );
        })}
      </span>
      <ButtonGrid
        onClick={() => geraProdutos(page)}
        txtBtn="Ainda mais produtos aqui!"
      />
    </section>
  );
}
