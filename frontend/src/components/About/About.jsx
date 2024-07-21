import React from 'react';
import aboutImg from '../../assets/images/about.png'; //esta es otra imagen de otro feo, esta tal vez hay que cambiarla
import aboutCardImg from '../../assets/images/about-card.png'; //aqui ocurre lo mismo, debo crearme una card propia

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/* ====== about img ====== */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img src={aboutCardImg} alt="" />
            </div>
          </div>

          {/* ======= about content ======= */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">Orgullosos de dar lo mejor</h2>
            <p className="text__para">
              Esto hay que rellenarlo con algun texto significativo, recuerdalo
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio dicta iusto commodi porro ab et odit. Libero quidem quas, reprehenderit magni ab itaque odio, rem omnis nisi explicabo saepe! Nesciunt.
            </p>

            <p className="text__para">
              Esto hay que rellenarlo con algun texto significativo, recuerdalo
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, sint mollitia. Praesentium maxime quidem, aspernatur facere consequuntur labore porro modi qui vel obcaecati, nam voluptatibus beatae perferendis amet, odio unde?
            </p>

            <Link to='/'>
                <button className='btn'>Learn More</button> 
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About