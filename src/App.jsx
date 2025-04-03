import Arrow from "./assets/icons/arrow.svg";
import Payments from "./assets/icons/payments.svg";
import Check from "./assets/icons/check.svg";
import plans from "./utils/plans";
import ImageGabi from "./assets/icons/image.png";
import ImageCarousel from "./utils/components/ImageCarousel.jsx";

function App() {
  return (
    <div className="overflow-y-auto">
      <div className="background_white">
        <div className="flex flex-col-reverse md:flex-row h-screen bg-light dark:bg-dark items-center justify-center">
          <div className="w-full md:w-2/3 md:h-auto p-4 text-white flex flex-col">
            <p className="text-4xl md:text-7xl font-humming text-center md:mx-20 text-orange">
              WeMagras
            </p>
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
        <div
          className="inline-flex flex-col items-center mx-auto mt-8 md:mt-5 absolute left-0
          bottom-0 pl-12 pb-5 gabi_letter"
        >
          <p className="text-2xl md:text-3xl font-IFlower text_orange">
            Conheça a Gabi!
          </p>
          <img src={Arrow} alt="Seta" className="mt-2 w-12" />
        </div>
      </div>

      <div className="background_orange">
        <div className="py-10 dark:bg-dark">
          <div id="player" className="insert_white_background_with_padding">
            <iframe
              className="border_with_"
              width="850"
              height="450"
              src="https://www.youtube-nocookie.com/embed/LXb3EKWsInQ?si=ZMZnGjo7jGVgsjz_"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen>
            </iframe>
          </div>
        </div>
        <div id="ImageCarousel" className="py-10 dark:bg-dark">
          <ImageCarousel />
        </div>
      </div>
      <div className="background_white">
        <div className="flex flex-col md:flex-row py-10 px-5 justify-center gap-5 bg-light dark:bg-dark">
          {plans.map((item, index) => (
            <div className="border-2 border-orange dark:border-orange-light w-sm h-md px-8 py-10 rounded-4xl">
              {index === 1 && (
                <div className="flex absolute left-1/2 transform -translate-x-1/2">
                  <p className="font-inter text-orange-light text-xs bg-gray/10 px-2 rounded-sm">
                    RECOMENDADO
                  </p>
                  <p className="font-inter text-red text-xs bg-red/10 px-2 rounded-sm">
                    MAIS COMPRADO
                  </p>
                </div>
              )}
              <p className="font-inter text-xl font-black my-5 text-black dark:text-white">
                {item.name}
              </p>
              <p className="font-inter text-sm text-gray font-light">
                {item.description}
              </p>
              <div className="flex flex-col mt-5 mb-10">
                {item.items.map((item) => (
                  <div className="flex flex-row items-start gap-3">
                    <img src={Check} alt="Check" className="mt-2 w-3" />
                    <p className="font-inter text-sm text-gray">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* RODAPE */}
    </div>
  );
}

export default App;
