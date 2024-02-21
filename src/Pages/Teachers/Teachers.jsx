import React from 'react';

// import styles
import s from './Teachers.module.css';

// import pages
import TeacherList from './TeacherList/TeacherList';

// import date
import { dates } from '../../Dates/TeacherDates';

export default function Teachers() {
  return (
    <div className={s.teachers}>
      <div className={s.teacherInner}>
        {
          dates?.map(item => <TeacherList key={item.id} {...item} />)
        }        
      </div>
    </div>
  )
}
