import React, {useContext, useState, useEffect} from 'react';

// import styles
import s from './TeacherInform.module.css';

// import routers
import {useNavigate} from 'react-router-dom';

// import context
import { Context } from '../../Hocks/Contexts';

// import icons
import {BsEyeFill} from 'react-icons/bs';

// import pages
import TeacherInfoTeable from './TeacherInfoTeable/TeacherInfoTeable';

export default function TeacherInform() {
  const {names, chenge, setChenge, dark} = useContext(Context);
  const [send, setSened] = useState([]);
  
  const [inform, setInform] = useState(JSON.parse(localStorage.getItem('baholash')) || []);
  const navigate = useNavigate();

  const baholash = () => {
    setInform(send);
    localStorage.setItem('baholash', JSON.stringify(inform));
    setChenge(act => act = !act);

    names.levels?.map(items => {
      items.baholar.map(itm => {
        return itm.levelAct = false;
      })
      return items
    });
  }

  useEffect(() => {
    if(!chenge){
      setSened([]);
    };
  }, [chenge]);
  
  return (
    <div className={s.teacherInfo}>
      <div className={s.teacherInfoInner}>
        <div className={s.teacherInformFoto}>
          <img src={names.avatar} alt="Photo" />
        </div>
        <div className={s.teacherInformText}>
          <div className={s.teacherInformTextInner}>
            <h3>{names.names}</h3>
            <BsEyeFill style={{color: dark ? '#fff' : ''}}/>
          </div>
          <p>{names.title}</p>
        </div>
      </div>
      <div className={s.teacherInfoTable}>
        {
          chenge ? inform?.map((items, index) => <TeacherInfoTeable key={index} {...items}/>)  : 
          names.levels?.map((items, index) => <TeacherInfoTeable key={index} {...items} names={names} setSened={setSened} send={send}/>)
        }
      </div>
      <div className={s.teacherInfoButton}>
        <button style={{display: chenge ? 'none' : ''}} onClick={() => {
          send.length === 0 ? alert('Baholashni tanlang!') : baholash();
        }}>Yuborish</button>
        <button style={{display: chenge ? '' : 'none'}} onClick={() => {
          setChenge(act => act = !act);
          navigate('/');
        }}>Chiqish</button>
      </div>
    </div>
  )
}
