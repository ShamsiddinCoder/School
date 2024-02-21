import React, {useContext} from 'react';

// import styles
import s from './Headers.module.css';

// import routers
import { Link, useNavigate } from 'react-router-dom';

// import elements
import LogoHome from '../../assets/home.png';
import LogoUser from '../../assets/logouser.png';
import LogoUserLight from '../../assets/logouser-light.png';
import Logo from '../../assets/logo.png';

// import toggle dark light
import Action from '../Action/Action';

// import context
import { Context } from '../../Hocks/Contexts';

export default function Headers() {
  const {setState, state, names, dark} = useContext(Context);
  const navigate = useNavigate();

  const navHomeLogo = (e) => {
    switch(e.target.id) {
        case 'home':
          setState(titl => titl = 'home');
          navigate('/home');
        break;
        case 'teacher':
          setState(titl => titl = 'teacher');
          navigate('/teachers');
        break;
    }
  }

  return (
    <header>
      <div className={s.headers}>
        <div className={s.headerInner}>
          <div className={s.headerMenu}>
            <Link to='/'><img src={Logo} alt="Logo"/></Link>
          </div>
          <div className={s.headerLogoText} onClick={(e) => navHomeLogo(e)}>
              <img src={LogoHome} id='home' /> 
              {
                state === 'home' ? <p id='home'>Home...</p> :
                state === 'teacher' ? <><p id='home'>Home</p><p id='teacher'>/Teacher</p></> : 
                state === 'infor' ? <><p id='home'>Home/</p><p id='teacher'>Teacher/</p><p>{names.names}</p></> : null
              }           
          </div>
        </div>
        <nav>
          <div className={s.navInner}>
            <select className={s.selecInner}>
              <option value='EN' >EN</option>
            </select>
            <select>
              <option value='English'>English</option>
            </select>
            <Action />
          </div>
          <img src={dark ? LogoUserLight : LogoUser} />
        </nav>
      </div> 
    </header>
  );
};
