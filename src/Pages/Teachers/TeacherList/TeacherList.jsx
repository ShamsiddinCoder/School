import React, {useContext} from 'react';

// import styles
import s from './TeacherList.module.css';

// import routers
import { Link } from 'react-router-dom';

// import context
import { Context } from '../../../Hocks/Contexts';

export default function TeacherList({id, names, title, avatar}) {
  const {setState, informTeachers} = useContext(Context);

  return (
    <div className={s.teacherList}>
        <div className={s.teacherListInner}>
          <Link to='/teachersinform' onClick={() => {
            setState(titl => titl = 'infor');
            informTeachers(id);
          }}>
              <img src={avatar} alt="Photo" />
              <div className={s.teacherListInnerText}>
                  <h3>{names}</h3>
                  <p>{title}</p>
              </div>
          </Link>
        </div>
    </div>
  )
}
