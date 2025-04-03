import Arrow from "./assets/icons/arrow.svg";
import Payments from "./assets/icons/payments.svg";
import Check from "./assets/icons/check.svg";
import plans from "./utils/plans";
import ImageGabi from "./assets/icons/image.png";

function App() {
  return (
    <div className="overflow-y-auto overflow-x-hidden h-screen bg-light dark:bg-dark">
      <p className="text-4xl md:text-8xl font-humming md:mx-20 mt-5 mx-10 text-orange">
        WeMagras
      </p>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center">
        <div className="w-full md:w-2/3 md:h-auto p-4 text-white flex flex-col">
          <p className="text-center font-bold my-6 text-orange-light dark:text-orange-light">
            A JORNADA PARA SUA MELHOR VERSÃO COMEÇA AGORA!
          </p>
          <p className="text-2xl md:text-5xl font-inter font-black text-center text-orange px-4">
            Pare de tentar emagrecer sozinha e comece a vencer com o apoio de
            quem passou e passa pelo mesmo que você!
          </p>
          <p className="text-center text-lg font-inter font-bold text-black mt-10 dark:text-white">
            Com as estratégias certas, tratar a obesidade e emagrecer se torna
            mais fácil em nossa comunidade! Dê o primeiro passo hoje!
          </p>
          <div className="flex justify-center items-center mt-10">
            <div className="inline-flex flex-col items-center gap-5">
              <button className="bg-green cursor-pointer target:bg-orange text-white font-bold py-2 px-4 rounded-4xl drop-shadow-md hover:drop-shadow-lg transition-shadow">
                Aproveite a oferta e entre na comunidade!
              </button>
              <img src={Payments} alt="Compra" className="max-w-full h-7" />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 h-1/3 md:h-auto flex items-center justify-center md:pl-0 pl-10">
          <img
            src={ImageGabi}
            alt="Gabi"
            className="w-full h-full md:max-w-none md:h-screen object-cover object-top rounded-lg md:rounded-none"
          />
        </div>
      </div>
      {/* <div
        className="inline-flex flex-col items-center mx-auto mt-8 md:mt-5 absolute left-0
        bottom-0 pl-12 pb-5"
      >
        <p className="text-2xl md:text-3xl font-IFlower text-white">
          Conheça a Gabi!
        </p>
        <img src={Arrow} alt="Seta" className="mt-2 w-12" />
      </div> */}
      <div className="flex flex-col md:flex-row py-10 px-5 justify-center items-center gap-5 bg-light dark:bg-dark">
        {plans.map((item, index) => (
          <div className="border-2 border-orange dark:border-orange w-sm md:w-md min-h-110 px-8 py-10 rounded-4xl flex flex-col h-full">
            {index === 1 && (
              <div className="flex justify-between">
                <div className="flex justify-center items-center bg-gray/10 px-2 rounded-sm">
                  <p className="font-inter text-orange-light text-xs">
                    RECOMENDADO
                  </p>
                </div>
                <div className="flex justify-center items-center bg-red/10 px-2 rounded-sm">
                  <p className="font-inter text-red text-xs">MAIS COMPRADO</p>
                </div>
              </div>
            )}
            <p className="font-inter text-xl font-black my-5 text-black dark:text-white">
              {item.name}
            </p>
            <p className="font-inter text-sm text-gray font-light">
              {item.description}
            </p>
            <div className="flex flex-col mt-5 mb-10">
              {item.items.map((item, i) => (
                <div key={i} className="flex flex-row items-start gap-3">
                  <img src={Check} alt="Check" className="mt-2 w-3" />
                  <p className="font-inter text-sm text-gray">{item}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-auto">
              <button
                className={`${index === 1 ? "bg-orange" : "bg-gray"} w-full box-border cursor-pointer font-bold py-2 px-4 rounded-4xl drop-shadow-md hover:drop-shadow-lg transition-shadow`}
              >
                <p className="font-inter text-sm text-white">
                  {index === 0
                    ? "Aproveite a oferta e emagreça agora"
                    : index === 1
                      ? "Aproveite a oferta e entre na comunidade!"
                      : "Entre para Lista de Espera"}
                </p>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
