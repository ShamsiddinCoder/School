import React, {useContext} from 'react';

// import styles
import s from './TeacherInfoTeable.module.css';

// import pages
import Level from '../Level/Level';

// import Context
import { Context } from '../../../Hocks/Contexts';

export default function TeacherInfoTeable({id, levelKnowing, names = null, baholar, setSened = null, send = null}) {
  const {setNames} = useContext(Context);
  
  const clickBaho = (e) => {
    let a = names.levels?.map(items => {
        if(items.id === id){
          items.baholar.map(itm => {
            if(itm.id === Number(e.target.id)){
              return itm.levelAct = !itm.levelAct;
            }else {
              return itm.levelAct = false;
            }
          })
        }
      return items
    }); 
    
    setNames(inner => ({
      ...inner, levels: a
    }));

    let x = true;
    let b = send?.map(item => {
      if(item.id === id){
        x = true;
        return {
          ...item,
          id,
          levelKnowing,
          baholar: e.target.id
        }
      }else {
        x = false;
        return item;
      }
    });
    
    setSened(sent => {
      if(sent.length === 0){
        return [
          ...sent, {
            id,
            levelKnowing,
            baholar: e.target.id
          }
        ] 
      } 
      if(x){
        return b;
      }else {
        return [
          ...sent, {
            id,
            levelKnowing,
            baholar: e.target.id
          }
        ] 
      }
    });
  };

  
  return (
    <div className={s.teacherInfoTeable}>
        <div className={s.teacherInfoTableText}>
            <p>{id}</p>
            <p>{levelKnowing}</p>
        </div>
        <div className={s.baholar}>
            {
               send ?  baholar?.map(items => <Level key={items.id} {...items}
                clickBaho={clickBaho}
                send={send}
              />) : 
              <Level id={baholar} />
            }
        </div>
    </div>
  )
}
