import { GrInstagram } from "react-icons/gr";
import { GrFacebook } from "react-icons/gr";
import Whatsapp from "./Whatsapp";
import { BsGithub } from "react-icons/bs";

function Footer() {
  return (
    <div className="mt-4  text-white justify-center">
      <div className="flex justify-center">
        <div>
          {" "}
          <a
            href="https://instagram.com/centromedicohebrom"
            target="_blank"
            rel="noreferrer"
          >
            <GrInstagram />
          </a>
        </div>
        <div className="ml-2">
          {" "}
          <a
            href="https://facebook.com/centromedicohebrom"
            target="_blank"
            rel="noreferrer"
          >
            <GrFacebook />
          </a>
        </div>
      </div>
      <div className="flex mb-1 justify-around">
        <div></div>
        <div>Centro Médico Hebrom © 2023</div>
        <div>
          <Whatsapp />
        </div>
      </div>
      <div className="flex flex-wrap justify-center text-sm">
        <div className="flex ">
          made by
          <a className="ml-1" href="https://github.com/misaelucas">
            misa
          </a>
          <a
            className="ml-2 text-xl mb-1 "
            href="https://github.com/misaelucas"
          >
            {" "}
            <BsGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
