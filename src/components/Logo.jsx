import LogoBMM from "/src/assets/logo.png";
import "./styles.css";

function Logo() {
  return (
    <div className="logoContainer">
      <img src={LogoBMM} alt="Logo" className="logo" />
    </div>
  );
}

export default Logo;
