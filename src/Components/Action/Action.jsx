import React, {useContext} from 'react';

// import styles 
import s from './Action.module.css';

// import icons
import {BsFillSunFill} from 'react-icons/bs';
import {FaMoon} from 'react-icons/fa';

// import Context
import { Context } from '../../Hocks/Contexts';

export default function Action() {
  const {setDark, dark} = useContext(Context);

  const change = () => {
    setDark(act => act = !act);
  }

  return (
    <>
      <div className={s.actions}>
          <p>Light</p>
          <div className={s.toggle} onClick={() => change()}>
              <div className={s.toggleInner} style={{
                right: dark ? '2px' : '',
                left: dark ? '' : '2px',
              }}></div>
          </div>
          <p>Dark</p>
      </div>
      <div className={s.actionMini} onClick={() => change()}>
        <BsFillSunFill style={{display: dark ? 'none' : 'block'}}/>
        <FaMoon style={{display: dark ? 'block' : 'none'}}/>
      </div>
    </>
  )
}
