import React from 'react'

const Home = () => {
  return (
    <>
      {/* === hero section === */}
      <>
        <section className="hero__section pt_[60px] 2xl:h-[800px]">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
              {/* === hero content === */}
              <div>
                <div className="lg:w-[570px]">
                  <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                    Tu salud, tu bienestar, siempre en línea.
                  </h1>
                  <p className="text__para">
                    Somos un refugio digital para la salud integral, proporcionando un
                    puente confiable entre usuarios y profesionales de la salud.
                    Con un enfoque en la accesibilidad, la calidad y la empatía,
                    queremos mejorar la vida de nuestros usuarios al
                    conectarles con los recursos y el apoyo que necesitan para
                    un bienestar completo, todo desde la comodidad de su hogar.
                  </p>
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