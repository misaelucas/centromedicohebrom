import Footer from "../components/Footer";
import Header from "../components/Header";
import { Player } from "@lottiefiles/react-lottie-player";
import contact from "../assets/contact.json";

function Contato() {
  return (
    <>
      <Header />

      <div className="flex flex-col items-center text-white font-sans">
        <div className="text-4xl font-bold mt-6">Como falar conosco?</div>
        <div className="sm:max-w-2xl mt-4 max-w-xs font-medium antialiased tracking-tight text-justify text-md sm:text-lg">
          <p>
            Valorizamos a comunicação com nossos clientes e estamos sempre
            prontos para ajudar. Se você tiver alguma dúvida, consulta ou
            precisa de assistência, fique à vontade para entrar em contato
            conosco. Nossa equipe dedicada está disponível para atendê-lo
            durante o horário comercial, de segunda a sábado. Responderemos a
            todas as suas perguntas o mais rápido possível, para garantir que
            você tenha a melhor experiência possível ao lidar conosco.
          </p>
          <div className="flex justify-between items-center mt-4">
            <div className="space-y-2 mr-4 underline underline-offset-3">
              <p>(82) 99669-3000</p>
              <p>(82) 99669-2000</p>
              <p>(82) 98134-9410</p>
            </div>
            <div style={{ width: "40%" }}>
              <Player
                autoplay
                loop
                src={contact}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contato;
