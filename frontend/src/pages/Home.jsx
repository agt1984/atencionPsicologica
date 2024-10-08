import React from 'react';

//imagenes que deben cambiarse pero con la misma nomenclatura
import heroImg01 from '../assets/images/hero-img01.png'; //Buscar una foto de Karla o de algun otro propfesional
import heroImg02 from "../assets/images/hero-img02.png"; //Buscar una foto de Karla o de algun otro propfesional
import heroImg03 from "../assets/images/hero-img03.png"; //Buscar una foto de Karla o de algun otro propfesional
import icon01 from '../assets/images/icon01.png';
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import featureImg from "../assets/images/feature-img.png"; //Buscar una foto de Karla o de algun otro propfesional
import faqImg from "../assets/images/faq-img.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon.png"
import { Link } from 'react-router-dom'; //revisa el link a que pagina manda
import { BsArrowRight } from "react-icons/bs";
import About from '../components/About/About';
import ServiceList from '../components/Services/ServiceList';
import DoctorList from '../components/Doctors/DoctorList';
import FaqList from '../components/Faq/FaqList';
import Testimonial from '../components/Testimonial/Testimonial';

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

      {/* ========= services section ========= */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Nuestros servicios</h2>
            <p className="text__para text-center">
              Poner un texto adecuado para la promocion. Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Est aliquid deleniti error ab?
              Reiciendis error architecto sunt molestiae distinctio natus,
              dolorum aspernatur repellat, magni, quod omnis alias culpa impedit
              quos?
            </p>
          </div>

          <ServiceList />
        </div>
      </section>
      {/* ========= services section end ========= */}

      {/* ========= feature section ========= */}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/* ========= feature content ========= */}
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get virtual treatment <br /> anytime.
              </h2>
              <ul className="pl-4">
                <li className="text__para">
                  1. Schedule the apointment directly.
                </li>
                <li className="text__para">
                  2. Search for your physician here, and contact their office
                </li>
                <li className="text__para">
                  3. View our physicians who are accepting patients, use the
                  online scheduling tool to select an appointment time
                </li>
              </ul>
              <Link to="/">
                <button className="btn">Learn More</button>
              </Link>
            </div>

            {/* ========= feature img ========= */}
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} className="w-3/4" alt="" />

              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:pb-[26px] rounded-[10px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                      Tue, 24
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[400]">
                      10:00AM
                    </p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                    <img src={videoIcon} alt="" />
                  </span>
                </div>

                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                  Consultation
                </div>

                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatarIcon} alt="" />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                    Fulano de Tal
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ========= feature section end ========= */}
      {/* nuestros grandes profesionales */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Nuestros Profesionales</h2>
            <p className="text__para text-center">
              Poner un texto adecuado para la promocion. Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Est aliquid deleniti error ab?
              Reiciendis error architecto sunt molestiae distinctio natus,
              dolorum aspernatur repellat, magni, quod omnis alias culpa impedit
              quos?
            </p>
          </div>

          <DoctorList />
        </div>
      </section>
      {/* nuestros grandes profesionales */}

      {/* ========= faq section ========= */}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="" />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="heading">
                Todas las preguntas de nuestros estimados pacientes
              </h2>

              <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/* ========= faq section end ========= */}

      {/* ========= testimonial ========= */}
      <section>
        <div className="container">
        <div className="xl:w-[470] mx-auto">
          <h2 className='heading text-center'>Que dicen nuestros pacientes</h2>
          <p className='text__para text-center'>
            Atencion de cuidado psicologico para todos
          </p>
        </div>
      </div>
      </section>

      <Testimonial/>
      {/* ========= testimonial end ========= */}
    </>
  );
};

export default Home;