import Arrow from "./assets/icons/arrow.svg";
import Payments from "./assets/icons/payments.svg";

function App() {
  return (
    <div className="relative h-screen overflow-y-auto bg-orange dark:bg-dark">
      <div className="absolute top-0 left-0 w-full p-4 text-white">
        <p className="text-5xl font-humming mx-20">WeMagras</p>
        <p className="text-center font-bold my-6 dark:text-orange-light">
          A JORNADA PARA UM NOVO VOCÊ COMEÇA AGORA!
        </p>
        <p className="text-6xl font-inter font-black w-full text-center leading-normal">
          <span className="bg-orange-light dark:bg-orange px-2">Emagreça</span>{" "}
          de Forma{" "}
          <span className="bg-orange-light dark:bg-orange px-2">Saúdavel</span>{" "}
          e{" "}
          <span className="bg-orange-light dark:bg-orange px-2">
            Duradoura!
          </span>
        </p>
        <p className="text-center text-sm font-inter text-white/75 mt-10">
          Com as estratégias certas, emagrecer se torna mais fácil
          <br /> do que você imagina. Dê o primeiro passo hoje!
        </p>
        {/* <div className="inline-flex flex-col items-center mx-auto">
          <p className="text-3xl font-IFlower text-white">Conheça a Gabi!</p>
          <img src={Arrow} alt="Seta" className="mt-2 w-12" />
        </div> */}
        <div className="flex justify-center items-center mt-10">
          <div className="inline-flex flex-col items-center gap-5">
            <button className="bg-orange-light cursor-pointer target:bg-orange text-white font-bold py-2 px-4 rounded-4xl">
              Aproveite a oferta e emagreça agora
            </button>
            <img src={Payments} alt="Compra" className="max-w-full h-7" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
