import Winner from "/src/assets/winners1.jpg";
import Winner2 from "/src/assets/winners2.jpg";
import Winner3 from "/src/assets/winners3.jpg";
import testimonio1 from "/src/assets/testimonio1.jpg";
import testimonio2 from "/src/assets/testimonio2.jpg";
import testimonio3 from "/src/assets/testimonio3.jpg";

export const Winners = () => {
  return (
    <div className="winnersContainer">
      <h1 className="winnersTitle">
        Testimonios actualizados <span>Noviembre</span>:
      </h1>
      <div className="winnerImageContainer">
        <img src={testimonio3} alt="Ganadores" />
        <img src={testimonio1} alt="Ganadores" />
        <img src={testimonio2} alt="Ganadores" />
        <img src={Winner} alt="Ganadores" />
        <img src={Winner2} alt="Ganadores" />
        <img src={Winner3} alt="Ganadores" />
      </div>
    </div>
  );
};
