import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Styles from "./bannerTop.module.css";
import LogoPatas from "./patas.png"
export const BannerTop = () => {
  return (
    <div className={Styles.bannerTopo}>
      <div className="container">
        <div className={Styles.containerNomeLogo}>
          <a href="/aconchego-pet-club">
            <p className={Styles.nomePetShop}>
              Pet Club
              <img src={LogoPatas} alt="Logo Pet Shop" />
              Aconchego
            </p>
          </a>
          <p className={Styles.sloganPetShop}>
            Conforto e Estilo para Cães e Gatos
          </p>
        </div>
        <div className={Styles.containerTituloTopo}>
          <h1 className={Styles.tituloTopo}>
            Proporcione o melhor cuidado para seu companheiro
          </h1>
          <a
            className={Styles.linkFaleConosco}
            href="https://wa.me/5521999999999/?text=Olá"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fale conosco <WhatsAppIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BannerTop;
