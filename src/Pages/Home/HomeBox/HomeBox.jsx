import React, {useContext} from 'react';

// import styles
import s from './HomeBox.module.css';

// import routers
import { Link } from 'react-router-dom';

// import context
import { Context } from '../../../Hocks/Contexts';

export default function HomeBox({id, names, icon}) {
  const {setState} = useContext(Context);

  return (
    <div className={s.homeBoxes}>
        <Link to='/teachers' onClick={() => setState(titl => titl = 'teacher')}>
          <div className={s.homeBox}>
              <div className={s.homeBoxInner}>
                  <img src={icon} alt="Mathematics" />
                  <p>{names}</p>
              </div>
          </div>
        </Link>
    </div>
  )
}
