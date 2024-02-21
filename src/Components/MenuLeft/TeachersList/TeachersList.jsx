import React, {useContext} from 'react';

// import styles
import s from './TeachersList.module.css';

// import routers
import {Link} from 'react-router-dom';

// import context
import { Context } from '../../../Hocks/Contexts';

export default function TeachersList({id, names, icons, avatar}) {
  const {setState, informTeachers} = useContext(Context);
  
  return (
    <Link to={avatar ? '/teachersinform' : '/teachers'} onClick={() => {
      avatar ? informTeachers(id) :
      setState(titl => titl = 'teacher');
    }}>
      <div className={s.techerList}>
          <img src={icons} />
          <p>{names}</p>
      </div>
    </Link>
  )
}

