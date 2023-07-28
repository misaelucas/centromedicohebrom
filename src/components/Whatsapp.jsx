import whatsapp from "../assets/whatsapp.png";

const Whatsapp = () => {
  return (
    <a href="https://wa.link/txtrr2" target="blank" rel="noreferrer">
      <div className="fixed bottom-0 right-0 p-4 z-3">
        <img src={whatsapp} alt="" className="w-24 h-24" />
      </div>
    </a>
  );
};

export default Whatsapp;
