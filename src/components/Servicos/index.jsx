import banho from "../../assets/banho.png";
import creche from "../../assets/creche.png";
import dogwalker from "../../assets/dogwalker.png";
import loja from "../../assets/loja.png";
import veterinario from "../../assets/veterinario.png";
import Styles from "./Servicos.module.css";
const Servico = () => {
  return (
    <div className="padding">
      <h3>Alguns dos nossos serviços</h3>

      <div className={Styles.boxServicos}>
        <ul type="circle">
          <li>
            <span className="destaque">Itens para seu animal de estimação</span>
            : Descubra nossa seleção de alta qualidade com alimentos nutritivos,
            brinquedos interativos e acessórios sofisticados em nossa loja.
          </li>
          <li>
            <span className="destaque">Spa para pets</span>: Desfrute de
            serviços como banho, hidratação, tosa higiênica, tosa especializada
            para diferentes raças e outros tratamentos, realizados por
            especialistas em parceria conosco.
          </li>
          <li>
            <span className="destaque">Serviços veterinários 24 horas</span>:
            Garantimos o bem-estar do seu fiel companheiro com consultas, exames
            e vacinação administrados por profissionais veterinários
            especializados.
          </li>
          <li>
            <span className="destaque">Passeios com especialistas caninos</span>
            : Se você está sem tempo para levar seu cachorro para passearda nós
            da pet club não só garantem caminhadas, mas também trabalham na
            correção de comportamentos e no ensino de comandos básicos.
          </li>
          <li>
            <span className="destaque">Creche para pets</span>: Uma solução
            personalizada para quem prefere não deixar seu animal de estimação
            sozinho em casa durante o dia. Oferecemos diversão, cuidados
            especiais e muito carinho!
          </li>
        </ul>
      </div>

      <div className={Styles.boxServicosImg}>
        <img src={banho} alt="Banho e Tosa" title="Banho & Tosa" />

        <img src={veterinario} alt="Veterinários" title="Veterinário 24h" />
        <img src={dogwalker} alt="Passeio" title="Dog Walker" />
        <img src={creche} alt="Creche" title="Creche Pet" />
        <img src={loja} alt="loja" title="Produtos para seu pet Pet" />
      </div>
    </div>
  );
};

export default Servico;
