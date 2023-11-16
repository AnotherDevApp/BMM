import WarrantyPic from "/src/assets/garantia.png";

export const Warranty = () => {
  return (
    <div className="warrantyContainer">
      <img className="warrantyPic" src={WarrantyPic} alt="warranty pic" />
      <div className="warrantyContext">
        <p>Quizas estás inseguro</p>
        <p>
          Por eso te ofrecemos <span>7 DÍAS DE GARANTÍA INCONDICIONAL</span>
        </p>
        <p>
          Si por alguna razón no te gusta el producto, te devolveremos{" "}
          <span>TODO TU DINERO</span>
        </p>
        <p>
          Ahora es más fácil tomar la decisión, <br />
          ¿verdad?
        </p>
      </div>
    </div>
  );
};
