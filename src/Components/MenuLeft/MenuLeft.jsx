import React, {useContext} from 'react';

// import styles
import s from './MenuLeft.module.css';

// import teacher List
import TeachersList from './TeachersList/TeachersList';

// import date
import { fanlar } from '../../Dates/TeacherDates';
import { dates } from '../../Dates/TeacherDates';

// import context
import { Context } from '../../Hocks/Contexts';

export default function MenuLeft({children}) {
  const {state} = useContext(Context);

  return (
    <div className={s.menuParent}>
      <div className={s.menuLeft}>
          <div className={s.menuTitle} style={{display: state === 'infor' ? 'none' : 'flex'}}>
              {state === 'home' ? 
                <p>Choose Subject</p> :
                state === 'teacher' ?
                <p>Choose The Teacher</p> :
                null
              }
          </div>
          <div className={s.menuLeftInner}>
            {
              state === 'home' ? fanlar?.map(item => <TeachersList key={item.id} {...item} />) : 
              state === 'teacher' ? dates?.map(item => <TeachersList key={item.id} {...item}/>) :
              dates?.map(item => <TeachersList key={item.id} {...item} />)
            }
          </div>
      </div>
      <div className={s.boxRight}>
        {children}
      </div>
    </div>
  )
}
