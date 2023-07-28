import Footer from "../components/Footer";
import Header from "../components/Header";

function Especialidades() {
  return (
    <>
      <Header />
      <div className="flex  mt-4 flex-col text-white">
        <div className="text-center text-3xl">
          Especialidades:
          <div className="flex mt-6 w-full  justify-center list-none">
            <div className="text-2xl   text-center w-1/2">
              Especialidades Clínicas:
              <div className="bg-slate-800 text-justify ml-36 p-2 rounded">
                <div className="bg-red-200 w-80">
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
                </div>
              </div>
            </div>
            <div className="text-2xl text-center w-1/2">
              Exames:
              <div className="bg-red-500 text-">
                <li>Audiometria</li>
                <li>Biópsia </li>
                <li>Ecocardiograma</li>
                <li>Eletrocardiograma</li>
                <li>Eletroencefalograma</li>
                <li>Endoscopia </li>
                <li>Holter </li>
                <li>Mapa </li>
                <li>Raio-x</li>
                <li>Ultrassonografia Abd Total </li>
                <li>Ultrassonografia Abd Inferior</li>
                <li>Ultrassonografia Abd Superior </li>
                <li>Ultrassonografia Bolsa Escrotal </li>
                <li>Ultrassonografia Rins e Vias Urinárias </li>
                <li>Ultrassonografia Prostáta </li>
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
