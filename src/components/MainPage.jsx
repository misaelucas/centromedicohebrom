import medico from "../assets/medico.png";
import meninomascara from "../assets/meninomascara.png";
import computador from "../assets/computador.png";
import { Player } from "@lottiefiles/react-lottie-player";

const MainPage = () => {
  return (
    <div className="flex flex-col items-center font-sans">
      <div className="w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 mt-4">
        <Player
          autoplay
          loop
          src="https://assets6.lottiefiles.com/packages/lf20_wdXBRc.json"
          style={{ width: "100%" }}
        />
      </div>
      <div className="mt-6 font-bold text-sm">
        <a
          href="https://wa.link/txtrr2"
          className="button bg-green-600 text-white rounded-md py-3 px-7 inline-block transform hover:scale-105 transition-transform duration-500 ease-in-out hover:bg-green-700"
          id="button"
          target="_blank"
          rel="noreferrer"
        >
          AGENDAR
        </a>
      </div>

      <div className="flex flex-wrap justify-center text-center mt-6 text-white ">
        <div className="card-container bg-slate-900 rounded flex flex-col justify-center items-center m-4 p-6 w-72 lg:w-96 shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105 flex-shrink-0">
          <img
            src={medico}
            alt=""
            className="card-pics mb-4 w-32 h-32 object-cover mx-auto"
          />
          <h2 className="text-xl font-semibold mb-2">
            Profissionais Capacitados
          </h2>
          <p className="pb-4">O melhor atendimento médico da região.</p>
        </div>

        <div className="card-container flex bg-slate-900 rounded flex-col justify-center items-center m-4 p-6 w-72 lg:w-96 shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105 flex-shrink-0">
          <img
            src={meninomascara}
            alt=""
            className="card-pics mb-4 mt-5 w-32 h-32 object-cover mx-auto"
          />
          <h2 className="text-xl font-semibold mb-2">Segurança</h2>
          <p className="pb-4">
            Protocolos de segurança respeitados e ambiente higienizado.
          </p>
        </div>

        <div className="card-container flex flex-col bg-slate-900 rounded justify-center items-center m-4 p-6 w-72 lg:w-96 shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105 flex-shrink-0">
          <img
            src={computador}
            alt=""
            className="card-pics mb-4 mt-5 w-32 h-32 object-cover mx-auto"
          />
          <h2 className="text-xl font-semibold mb-2">Atendimento</h2>
          <p className="pb-4">
            Comunicação humanizada e possibilidade de marcar consultas online.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
