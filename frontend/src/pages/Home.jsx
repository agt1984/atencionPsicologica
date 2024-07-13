import React from 'react'

//imagenes que deben cambiarse pero con la misma nomenclatura
import heroImg01 from '../assets/images/hero-img01.png'; //Buscar una foto de Karla o de algun otro propfesional
import heroImg02 from "../assets/images/hero-img02.png"; //Buscar una foto de Karla o de algun otro propfesional
import heroImg03 from "../assets/images/hero-img03.png"; //Buscar una foto de Karla o de algun otro propfesional


const Home = () => {
  return (
    <>
      {/* === hero section === */}
      <>
        <section className="hero__section pt_[60px] 2xl:h-[800px]">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-[90px] items-start justify-evenly">
              {/* === hero content === */}
              <div>
                <div className="lg:w-[570px]">
                  <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                    Tu salud, tu bienestar, siempre en línea.
                  </h1>
                  <p className="text__para">
                    Somos un refugio digital para la salud integral,
                    proporcionando un puente confiable entre usuarios y
                    profesionales de la salud. Con un enfoque en la
                    accesibilidad, la calidad y la empatía, queremos mejorar la
                    vida de nuestros usuarios al conectarles con los recursos y
                    el apoyo que necesitan para un bienestar completo, todo
                    desde la comodidad de su hogar.
                  </p>

                  <button className="btn">Reserva tu consulta</button>
                </div>

                {/* === hero counter === */}
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
      </>
    </>
  );
};

export default Home;