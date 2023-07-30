import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
/* import { faApple } from "@fortawesome/free-solid-svg-icons"; */
import  Styles  from "./Navbar.module.css";
import{BsApple} from 'react-icons/bs'

const Navbar = () => {
  return (
    <nav>
     <div className={Styles.navWrap}>
        <div className={Styles.logoWrap}>
          <span><NavLink to=''><BsApple className={Styles.navLogo}/></NavLink></span>
        </div>
        <div className={Styles.menuWrap}>
          <ul className={Styles.menuUl}>
            <li className={Styles.navItem}>
              <NavLink to="">홈페이지</NavLink>
            </li>
            <li className={Styles.navItem}>
              <NavLink to="movie">영화</NavLink>
            </li>
            <li className={Styles.navItem}>
              <NavLink to="store">스토어</NavLink>
            </li>
            <li className={Styles.navItem}>
              <NavLink to="movies">위시리스트</NavLink>
            </li>
            <li className={Styles.navItem}>
              <NavLink to="users">올해의 감독</NavLink>
            </li>
          
           
          </ul>
        </div>
        <div className={Styles.navIconWrap}>
          <div>
            <span>
              <FontAwesomeIcon className={Styles.navIcon} icon={faUser} />
            </span>
          </div>
          <div>
            <span>
              <FontAwesomeIcon className={Styles.navIcon} icon={faLock} />
            </span>
          </div>
        </div>
     </div>
    </nav>
  );
};

export default Navbar;
