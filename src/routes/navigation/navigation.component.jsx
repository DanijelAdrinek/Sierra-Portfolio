import "./navigation.styles.scss";
import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

import NavigationLink from "../../components/common/navigation-link/navigation-link.component";
import { useRef } from "react";

const Navigation = () => {

  const navRef = useRef(null);
  
  const menuButtonClickHandler = () => {
    navRef.current.classList.toggle("nav-visible");
  }

  return (
      <>
      <nav ref={navRef} id="nav">
      <div className="nav left">
        <span className="gradient skew"><h1 className="logo un-skew"><a href="#home">Sierra Dawn Paton</a></h1></span>
        <button id="menu" className="btn-nav" onClick={menuButtonClickHandler}><FontAwesomeIcon icon={faBars} /></button>
      </div>
      <div className="nav right">
        <NavigationLink name="Home" />
        <NavigationLink name="About" />
        <NavigationLink name="Gallery" />
        <NavigationLink name="Contact" />
      </div>
    </nav>
    <Outlet />
    </>
  )
}



export default Navigation;