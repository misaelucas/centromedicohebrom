import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./About.module.css";

function About() {
  return (
    <>
      <Header />

      <div className="container">
        <div className="box">
          <div className="title">
            <h1 className="mb-2 text-3xl ">Quem somos nós?</h1>
          </div>
          <div className="sobre flex justify-center flex-col items-center mt-3">
            <div className={`${styles.paragrafo1} max-w-[95%]`}>
              O Centro Médico Hebrom foi fundado em 2006 com o objetivo de
              oferecer cuidados médicos de qualidade, priorizando o bem-estar e
              a saúde dos nossos pacientes. Nossa missão é fornecer atendimento
              médico excepcional, promovendo o acesso a uma ampla gama de
              especialidades clínicas e serviços de diagnóstico.
            </div>
            <div className={`${styles.paragrafo2} max-w-[95%]`}>
              Com um corpo clínico altamente capacitado, a empresa se destaca
              pelo compromisso com a excelência no atendimento médico e na
              qualidade dos serviços prestados.
            </div>
            <div className={`${styles.paragrafo2} max-w-[95%]`}>
              Através de sua abordagem multidisciplinar, o Centro Médico Hebrom
              proporciona cuidados abrangentes e personalizados, visando sempre
              o bem-estar e a saúde de seus pacientes.
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
