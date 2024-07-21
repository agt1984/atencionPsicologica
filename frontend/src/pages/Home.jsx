import React from 'react';

//imagenes que deben cambiarse pero con la misma nomenclatura
import heroImg01 from '../assets/images/hero-img01.png'; //Buscar una foto de Karla o de algun otro propfesional
import heroImg02 from "../assets/images/hero-img02.png"; //Buscar una foto de Karla o de algun otro propfesional
import heroImg03 from "../assets/images/hero-img03.png"; //Buscar una foto de Karla o de algun otro propfesional
import icon01 from '../assets/images/icon01.png';
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import { Link } from 'react-router-dom'; //revisa el link a que pagina manda
import { BsArrowRight } from "react-icons/bs";
import About from '../components/About/About';

const Home = () => {
  return (
    <>
      {/* === hero section === */}

      <section className="hero__section pt_[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-start justify-between">
            {/* === hero content === */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  Tu salud, tu bienestar, siempre en línea.
                </h1>
                <p className="text__para">
                  Somos un refugio digital para la salud integral,
                  proporcionando un puente confiable entre usuarios y
                  profesionales de la salud. Con un enfoque en la accesibilidad,
                  la calidad y la empatía, queremos mejorar la vida de nuestros
                  usuarios al conectarles con los recursos y el apoyo que
                  necesitan para un bienestar completo, todo desde la comodidad
                  de su hogar.
                </p>

                <button className="btn">Reserva tu consulta</button>
              </div>

              {/* === hero counter ===  REPETIR SI ES NECESARIO PROMOCIONAR ALGO MAS*/}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    +15
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Años ayudando a personas</p>
                </div>
              </div>
            </div>
            {/* === hero content === */}

            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImg01} alt="" />
              </div>
              <div>
                <img src={heroImg02} alt="" className="w-full mb-[30px]" />
                <img src={heroImg03} alt="" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* === hero section end === */}

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Proveemos los mejores servicios de salud Integral
            </h2>
            <p className="text__para text-center">
              Ofrecemos un acceso directo y confiable a servicios de salud
              integrales, combinando tecnología y empatía para cuidar de ti
              donde quiera que estés.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">

            <div className="py-[30px] p-5 ">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Encuentra a tu Profesional
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4">
                  Ofrecemos guia por parte de nuestros experimentados expertos.
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] p-5 ">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Te llevaremos a tu mejor version
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4">
                  Acompañamiento de calidad, no estarás solo.
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] p-5 ">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Apunta tu cita
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4">
                  Reserva tu cita, y comienza tu camino al autodescubrimiento
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <About />
    </>
  );
};

export default Home;