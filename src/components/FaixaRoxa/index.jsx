import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Styles from "./FaixaRoxa.module.css";

const FaixaRoxa = ({ frase }) => {
  return (
    <div className={`padding ${Styles.faixa}`}>
      <p className={Styles.textFaixa}>{frase}</p>

      <div className={Styles.redesSociais}>
        <a href="https://www.facebook.com/" target="_blank">
          <FacebookIcon fontSize="large" className={Styles.icones} />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <InstagramIcon fontSize="large" className={Styles.icones} />
        </a>
        <a href="https://wa.me/5521999999999/?text=Olá" target="_blank">
          <WhatsAppIcon fontSize="large" className={Styles.icones} />
        </a>
      </div>
    </div>
  );
};

export default FaixaRoxa;
