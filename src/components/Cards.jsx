import { BsCheckCircleFill } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import "./styles.css";

export const Cards = () => {
  return (
    <div className="cardsContainer">
      <div className="card">
        <div className="card-content">
          <h2>TRIMESTRAL</h2>
          <p className="card-subtitle">
            $57 <span>/Trimestre</span>
          </p>
          <ul role="list" className="lista">
            <li className="unitList">
              <BsCheckCircleFill fontSize={20} color="#00ff00" />
              Señales en Telegram
            </li>
            <li className="unitList">
              <BsCheckCircleFill fontSize={20} color="#00ff00" />
              Hoja del cálculo de Gestión Bancaria
            </li>
            <li className="unitList">
              <BsCheckCircleFill fontSize={20} color="#00ff00" />
              Técnica de apalancamiento
            </li>
            <li className="unitList">
              <BsCheckCircleFill fontSize={20} color="#00ff00" />
              Soporte Premium
            </li>
          </ul>
          <a
            className="payButton"
            href="https://premiumpay.pro/2393/Betplaymoneymaker"
          >
            ¡Lo quiero!
          </a>
        </div>
      </div>

      <div className="cardContainer">
        <div className="card">
          <div className="card-content">
            <h2>MENSUAL</h2>
            <p className="card-subtitle">
              $27 <span>/Mes</span>
            </p>
            <ul role="list" className="lista">
              <li className="unitList">
                <BsCheckCircleFill size={20} color="#00ff00" />
                Señales en Telegram
              </li>
              <li className="unitList cancelledItem">
                <MdCancel size={20} color="red" />
                Hoja del cálculo de Gestión Bancaria
              </li>
              <li className="unitList cancelledItem">
                <MdCancel size={20} color="red" />
                Técnica de apalancamiento
              </li>
              <li className="unitList">
                <BsCheckCircleFill size={20} color="#00ff00" />
                Soporte Premium
              </li>
            </ul>
            <a
              className="payButton"
              href="https://premiumpay.pro/2393/Betplaymoneymaker"
            >
              ¡Lo quiero!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
