import Styles from "./Localizacao.module.css";

const Localizacao = () => {
  return (
    <div className={`container ${Styles.ondeEstamos}`}>
      <h3>Onde estamos</h3>
      <p>Se ficou interessado em nossos serviços, venha nos conhecer</p>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0019614913763!2d-60.02526952457674!3d-3.094136296881477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c1a9d0a85c941%3A0x1b2f0d7a0b492315!2sAmazonas%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1718412137372!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Localizacao;
