import Footer from "../components/Footer";
import Header from "../components/Header";

function Especialidades() {
  return (
    <>
      <Header />
      <div className="text-center">
        <div className="flex flex-col justify-center bg-[#1d2b4e] m-2 mt-2 min-w-96 sm:mt-6 rounded-md shadow-lg text-white">
          <div className="flex flex-wrap gap-2 mt-4 font-medium justify-center mb-3 sm:justify-around ">
            <div className="rounded-lg w-80 sm:w-96 bg-slate-900 mx-2 px-4 sm:p-4 ">
              <h1 className="text-xl sm:text-3xl mt-2 px-2 md:text-4xl text-start  font-semibold">
                Especialiades
              </h1>
              <div className="text-start justify-start flex  px-4 mt-4 p-2 ">
                <ul>
                  <li>Cardiologista</li>
                  <li>Clínico Geral</li>
                  <li>Cirurgião Vascular</li>
                  <li>Dermatologista</li>
                  <li>Endocrinologista</li>
                  <li>Ginecologista</li>
                  <li>Nefrologista</li>
                  <li>Neurologista</li>
                  <li>Nutricionista</li>
                  <li>Ortopedista</li>
                  <li>Otorrinolaringologista</li>
                  <li>Psicóloga</li>
                  <li>Reumatologista</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg w-80 sm:w-96 bg-slate-900 mx-2 px-4 sm:p-4 ">
              <h1 className="text-xl sm:text-3xl mt-2 px-2 md:text-4xl text-start  font-semibold">
                Exames
              </h1>
              <div className="text-center  justify-start   px-4 mt-2 p-2 ">
                <ul className="text-start">
                  <li>Audiometria</li>
                  <li>Biópsia</li>
                  <li>Ecocardiograma</li>
                  <li>Eletrocardiograma</li>
                  <li>Eletroencefalograma</li>
                  <li>Endoscopia</li>
                  <li>Holter</li>
                  <li>Mapa</li>
                  <li>Raio-x</li>
                  <li>Ultrassonografia Abd Total</li>
                  <li>Ultrassonografia Abd Inferior</li>
                  <li>Ultrassonografia Abd Superior</li>
                  <li>Ultrassonografia Bolsa Escrotal</li>
                  <li>Ultrassonografia Rins e Vias Urinárias</li>
                  <li>Ultrassonografia Prostáta</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Especialidades;
