import { BsCheckCircleFill } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import "./styles.css";

export const Cards = () => {
  const cardContent = [
    {
      periodo: "SEMANAL",
      valor: "25$",
      valorPromocion: "$15",
      tiempo: "semana",
      hoja: false,
      tecnica: false,
    },
    {
      periodo: "MENSUAL",
      valor: "47$",
      valorPromocion: "$27",
      tiempo: "mes",
      hoja: false,
      tecnica: false,
    },
    {
      periodo: "TRIMESTRAL",
      valor: "97$",
      valorPromocion: "$57",
      tiempo: "trimestre",
      hoja: true,
      tecnica: true,
    },
  ];
  return (
    <div className="cardsContainer">
      {cardContent.map((card, index) => (
        <div key={index} className="card">
          <div className="card-content">
            <h2>{card.periodo}</h2>
            <p className="highValueContent">
              De <span className="highValue">{card.valor}</span> por solo:{" "}
            </p>
            <p className="card-subtitle">
              {card.valorPromocion} <span>/por {card.tiempo}</span>
            </p>
            <ul role="list" className="lista">
              <li className="unitList">
                <BsCheckCircleFill size={20} color="#00ff00" />
                <p className="unitListPar">Señales en Telegram</p>
              </li>
              <li className="unitList">
                {card.hoja ? (
                  <BsCheckCircleFill size={20} color="#00ff00" />
                ) : (
                  <MdCancel size={20} color="red" />
                )}
                <p className="unitListPar">
                  Hoja del cálculo de Gestión Bancaria
                </p>
              </li>
              <li className="unitList">
                {card.tecnica ? (
                  <BsCheckCircleFill size={20} color="#00ff00" />
                ) : (
                  <MdCancel size={20} color="red" />
                )}
                <p className="unitListPar">Técnica de apalancamiento</p>
              </li>
              <li className="unitList">
                <BsCheckCircleFill size={20} color="#00ff00" />
                <p className="unitListPar">Soporte Premium</p>
              </li>
            </ul>
            <a
              className="payButton"
              href="https://premiumpay.pro/2393/Betplaymoneymaker"
            >
              QUIERO TENER GREENS
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
