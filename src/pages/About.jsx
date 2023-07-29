import Footer from "../components/Footer";
import Header from "../components/Header";
import { MdOutlineLocationOn } from "react-icons/md";

function About() {
  return (
    <>
      <Header />

      <div className="mt-4 text-center flex flex-col bg-[#1d2b4e] gap-2 text-white">
        <div className="text-4xl font-bold mt-6 ">Quem somos nós?</div>
        <div className="flex flex-col gap-2 font-medium items-center justify-center mt-3">
          <div className="w-80 sm:w-1/2 text-justify">
            O Centro Médico Hebrom foi fundado em 2006 com o objetivo de
            oferecer cuidados médicos de qualidade, priorizando o bem-estar e a
            saúde dos nossos pacientes. Nossa missão é fornecer atendimento
            médico excepcional, promovendo o acesso a uma ampla gama de
            especialidades clínicas e serviços de diagnóstico.
          </div>
          <div className="w-80 sm:w-1/2 text-justify">
            Com um corpo clínico altamente capacitado, a empresa se destaca pelo
            compromisso com a excelência no atendimento médico e na qualidade
            dos serviços prestados.
          </div>
          <div className="w-80 sm:w-1/2 text-justify">
            Através de sua abordagem multidisciplinar, o Centro Médico Hebrom
            proporciona cuidados abrangentes e personalizados, visando sempre o
            bem-estar e a saúde de seus pacientes.
          </div>
          <div className="w-full text-center justify-center rounded shadow-xl mt-6 flex bg-slate-900 p-4 ">
            <MdOutlineLocationOn className="text-2xl mr-2" />{" "}
            <p className="nowrap">
              R. Pref. Joaquim Ferreira, 30, Santana do Ipanema - AL, 57500-000
            </p>
          </div>
          <div className="w-full mt-2 rounded">
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                paddingTop: "16.25%",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15746.328798449978!2d-37.2481248!3d-9.3701891!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7061fa62c74e5c1%3A0xba912f94fd94f973!2sCentro%20M%C3%A9dico%20Hebrom!5e0!3m2!1sen!2sbr!4v1690607467837!5m2!1sen!2sbr"
                width="100%"
                height="300px"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "!300px",
                }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
