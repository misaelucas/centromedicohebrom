import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img
          src={logo}
          alt="logo da empresa, estrela de davi"
          className="w-40 h-40"
        />
      </Link>
    </div>
  );
};

export default Logo;
