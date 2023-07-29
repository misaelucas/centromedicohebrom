import { Link } from "react-router-dom";
import Logo from "./Logo";

function Header() {
  return (
    <>
      <div className="flex text-white justify-center shadow-xl pb-2">
        <div className="mt-1 text-sm font-semibold sm:text-lg xl:text-xl flex">
          <p className="p-1 sm:p-2 transition-transform duration-500 ease-in-out transform hover:scale-110 hover:bg-opacity-75 hover:underline underline-offset-4">
            <Link to="/contato">Contato</Link>
          </p>
          <p className="p-1 sm:p-2 transition-transform duration-500 ease-in-out transform hover:scale-110 hover:bg-opacity-75 hover:underline underline-offset-4">
            <Link to="/especialidades">Especialidades e Serviços</Link>
          </p>
          <p className="p-1 sm:p-2 transition-transform duration-500 ease-in-out transform hover:scale-110 hover:bg-opacity-75 hover:underline underline-offset-4">
            <Link to="/sobre">Sobre Nós</Link>
          </p>
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <Logo />
      </div>
      <a
        href="https://api.whatsapp.com/send?phone=5582981349410"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
      </a>
    </>
  );
}

export default Header;
