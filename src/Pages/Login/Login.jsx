import React, {useContext, useState} from 'react';

// import styles
import s from './Login.module.css';

// import elemetn
import Logo from '../../assets/logo.png';
import LogoLight from '../../assets/logo-light.png';

// import action component
import Action from '../../Components/Action/Action';

// import router
import { useNavigate } from 'react-router-dom';

// import context
import { Context } from '../../Hocks/Contexts';

export default function Login() { 
  const {setState, dark} = useContext(Context);
  const [active, setActive] = useState(true);
  const navigate = useNavigate();
  const [titles, setTitles] = useState({
    email: '',
    passsword: ''
  })

  const addNewDate = (event) => {
    let newTitle = Object.values(titles).every(elem => elem === '');

    switch(event.target.name){
      case 'email':
        return setTitles(titl => ({...titl, email: event.target.value}));
      case 'password':
        return setTitles(titl => ({...titl, password: event.target.value}));
      case 'addNewDate':
        if(!newTitle){
          navigate('/home');
          setState(titl => titl = 'home');
          setActive(act => act = true);
        }else {
          setActive(act => act = false);
        }
    }
  }

  return (
    <div className={s.login}>
      <div className={s.loginHeader}>
        <img src={dark ? LogoLight : Logo} alt="Logo" />
        <Action />
      </div>
      <div className={s.loginInner}>
        <div className={s.innerLogo}>
          <img src={Logo} alt="Logo" />
        </div>
        <div className={s.loginTitle} onChange={(e) => addNewDate(e)}>
          <input type="text" name='email'  placeholder='enter your email...' 
              style={{border: active === false ? 'solid 1px crimson' : ''}} />
          <input type="password" name='password'  placeholder='enter your password...' 
              style={{border: active === false ? 'solid 1px crimson' : ''}} />
          <button name='addNewDate' onClick={(e) => addNewDate(e)}>start</button>
        </div>
      </div>
    </div>
  )
}