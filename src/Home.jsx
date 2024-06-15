import BannerTopo from "./components/BannerTop";
import Bottom from "./components/Bottom";
import FaixaRoxa from "./components/FaixaRoxa";
import Localizacao from "./components/Localizacao";
import Servicos from "./components/Servicos";

function Home() {
  return (
    <>
      <BannerTopo />
      <FaixaRoxa
        frase={
          <>
            No <span className="destaque">Pet Club Aconchego</span>, cuidar dos
            pets é nossa maior vocação.
          </>
        }
      />
      <Servicos />

      <FaixaRoxa
        frase={
          <>
            No <span className="destaque">Pet Club Aconchego</span>, garantimos
            conforto e elegância para todos os pets.
          </>
        }
      />
      <Localizacao />
      <Bottom />
    </>
  );
}

export default Home;
