import Arrow from "./assets/icons/arrow.svg";
import Payments from "./assets/icons/payments.svg";
import Check from "./assets/icons/check.svg";
import plans from "./utils/plans";
import ImageGabi from "./assets/icons/gabi.png";
import { FaWhatsapp } from "react-icons/fa";
import ImageCarousel from "./utils/components/ImageCarousel.jsx";

function App() {
  return (
    <div className="overflow-y-auto overflow-x-hidden h-screen bg-light">
      <div className="flex flex-col">
        <div className="flex flex-col-reverse md:flex-row justify-center">
          <div className="w-full md:w-2/3 md:h-auto text-white flex flex-col items-end justify-center">
            <div className="items-center mt-auto">
              <p className="text-7xl md:text-10xl font-humming md:mx-20 mx-10 text-orange flex justify-center">
                WeMagras
              </p>
              <p className="text-center font-inter font-normal mb-6 text-orange-light hidden md:block">
                A JORNADA PARA SUA MELHOR VERSÃO COMEÇA AGORA!
              </p>
              <p className="text-2xl md:text-5xl font-inter font-extralight text-center justify-self-center max_width987 text-orange px-4">
                Pare de tentar emagrecer sozinha e comece a vencer com o apoio
                de quem passou e passa pelo mesmo que você!
              </p>
              <div className="flex justify-center items-center mt-10 ">
                <div className="inline-flex flex-col items-center gap-5 ">
                  <a
                    href="https://pay.hub.la/BYUDz3k224mIFzaXhXgT"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-green font-inter cursor-pointer text-white font-bold py-2 px-4 rounded-4xl drop-shadow-md hover:drop-shadow-lg transition-shadow pulse-button">
                      Aproveite a oferta e entre na comunidade!
                    </button>
                  </a>
                  <img src={Payments} alt="Compra" className="max-w-full h-7" />
                </div>
              </div>
            </div>
            <div className="inline-flex flex-col gabi_letter items-center mx-auto mt-auto">
              <p className="text-2xl md:text-3xl font-humming text-orange">
                Conheça a Gabi!
              </p>
              <img src={Arrow} alt="Seta" className="mt-2 w-12" />
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
      </div>
      <div className="py-10 bg-orange">
        <div className="overflow-hidden mx-auto place-self-center bg-light insert_white_background_with_padding max-w-[850px] w-full">
          <div
            id="player"
            className="w-full max-w-[850px] aspect-video min-h-[350px] mx-auto"
          >
            <iframe
              className="w-full h-full border-0"
              src="https://www.youtube-nocookie.com/embed/3jD0Xs-BsNo?si=Lh9hCjcsqPPie3BG"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
        <p className="text-center text-lg font-inter font-normal text-black justify-self-center mt-10">
          Com as estratégias certas, tratar a obesidade e emagrecer se torna
          mais fácil em nossa comunidade! <br /> Dê o primeiro passo hoje!
        </p>
        <div id="ImageCarousel" className="py-10">
          <ImageCarousel />
        </div>
      </div>

      <div className="flex flex-col md:flex-row py-10 px-5 justify-center items-center gap-5 bg-light">
        {plans.map((item) => (
          <div className="border-2 border-orange w-sm md:w-md min-h-110 px-8 py-10 rounded-4xl flex flex-col h-full">
            {!!item.important && (
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
            <p className="font-inter text-xl font-black my-5 text-black">
              {item.name}
            </p>
            <p className="font-inter text-sm text-gray font-light">
              {item.description}
            </p>
            <div className="flex flex-col mt-5 mb-10">
              {item.items.map((item, i) => (
                <div key={i} className="flex flex-row items-start gap-3">
                  <img src={Check} alt="Check" className="mt-2 w-3" />
                  <p className={`font-inter text-sm ${item.colorText || "text-gray"}`}>{item.message}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-auto">
              <a
                href={item.linkToRedirect}
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  item.important ? "bg-orange" : "bg-gray"
                } w-full box-border cursor-pointer font-bold py-2 px-4 rounded-4xl drop-shadow-md hover:drop-shadow-lg transition-shadow text-center`}
              >
                <p className="font-inter text-sm text-white">
                  {item.buttonMessage}
                </p>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="py-10 bg-orange px-4">
        <div className="flex flex-col md:flex-row items-center gap-6 px-8 py-10 border-2 rounded-3xl shadow-md max-w-5xl mx-auto justify-between">
          <p className="text-2xl md:text-4xl font-inter font-black text-center md:text-left">
            Está com dúvidas? <br /> Entre em contato com a gente.
          </p>

          <a
            href="https://wa.me/message/BOQP43QYLUQYE1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[linear-gradient(to_right,_#00B23A,_#F8AA2D)] font-inter flex items-center justify-center px-6 py-3 rounded-4xl text-white font-bold drop-shadow-md md\:w-2\/3 min-w-60 hover:drop-shadow-lg transition-shadow"
          >
            <FaWhatsapp size={20} />
            Whatsapp
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
