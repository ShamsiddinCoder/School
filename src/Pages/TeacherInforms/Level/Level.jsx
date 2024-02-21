import React from 'react';

// import styles
import s from './Level.module.css';

export default function Level({id, levelAct, clickBaho, send}) {

  return (
    <div 
      className={s.level} 
      id={id} 
      style={{background: levelAct ? 'blue' : ''}}
      onClick={(e) => send ? clickBaho(e) : null}
    >
        <p style={{color: levelAct ? '#fff' : ''}}>{id}</p>
    </div>
  )
}
