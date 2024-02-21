import React from 'react';

// import styles
import s from './Home.module.css';

// import HomeBox 
import HomeBox from './HomeBox/HomeBox';

// import date 
import { fanlar } from '../../Dates/TeacherDates';

export default function Home() {
  return (
    <div className={s.home}>
      {
        fanlar?.map(items => <HomeBox key={items.id} {...items} />)
      }
    </div>
  )
}
