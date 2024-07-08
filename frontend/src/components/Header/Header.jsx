import { useEffect, useRef } from 'react';
import logo from "../../assets/images/LogoEmpresaKarla.png";
import userImg from "../../assets/images/avatar-icon.png";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";

//Navegacion
const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Encuentra un Profesional",
  },
  {
    path: "/services",
    display: "Servicios",
  },
  {
    path: "/contact",
    display: "Contacto",
  },
];

const Header = () => {
  return (
    <header className="header flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* === logo === */}
          <div>
            <img src={logo} alt="" />
          </div>

          {/* === menu === */}
          <div className="navigation">
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500]"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* === nav === */}
          <div className='flex  items-center gap-4'>

            <div>
              <Link to='/'>
              <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
                <img src={userImg} className='w-full rounded-full' alt="" />
              </figure>
              </Link>
            </div>

            <Link to='/login'>
              <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'>
                Acceso
              </button>
            </Link>

            <span>
              <BiMenu className='w-6 h-6 cursor-pointer'/>
            </span>

          </div>



        </div>
      </div>
    </header>
  );
}

export default Header