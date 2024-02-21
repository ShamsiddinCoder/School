import React, {useState, useEffect} from 'react';

// import styles
import s from './AllElements.module.css';

// import routers
import {Routes, Route} from 'react-router-dom';

// import Routers
import {routers} from '../Rotuers/routers';
import LoyAut from '../Rotuers/LoyAut';

// import context
import { Context } from '../Hocks/Contexts';

// import date 
import { dates } from '../Dates/TeacherDates';

// import background
import DarkLogo from '../assets/app-logo-dark.png';
import LightLogo from '../assets/app-logo.png';

export default function AllAllElements({setDark, dark}) {
  const [state, setState] = useState(localStorage.getItem('names') || '');
  const [names, setNames] = useState(JSON.parse(localStorage.getItem('namesInfor')) || {});
  const [chenge, setChenge] = useState(false);
  
  useEffect(() => {
    localStorage.setItem('names', state);
  }, [state]);

  const informTeachers = (id) => {
    setState(titl => titl = 'infor');
    dates?.map(items => {
      if(items.id === id){
        setNames(({
          id: items.id,
          icons: items.icons,
          names: items.names,
          title: items.title,
          avatar: items.avatar,
          levels: items.levels,
        }));
      }
    });
    setChenge(act => act = false);
  };
  localStorage.setItem('namesInfor', JSON.stringify(names));

  return (
    <Context.Provider value={{
      setState, 
      state,
      setNames,
      names,
      informTeachers,
      setChenge,
      chenge,
      setDark,
      dark
    }}>
      <div className={s.allComponents}
        style={{
          background: `url(${dark ? DarkLogo : LightLogo})`
        }}
      >
        <Routes>
          {
            routers?.map(({paths, element: Component}, index) => (
              <Route 
                key={index}
                path={paths}
                element={
                  paths === '/' ? 
                  <Component /> 
                  :
                  <LoyAut>
                    <Component />
                  </LoyAut>
                }
              />
            ))
          }
        </Routes>
      </div>
    </Context.Provider>
  )
};