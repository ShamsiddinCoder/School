import React from 'react';

// import componetn
import Headers from '../Components/Headers/Headers';
import MenuLeft from '../Components/MenuLeft/MenuLeft';

export default function LoyAut({children}) {
  return (
    <>
        <Headers /> 
        <MenuLeft>
          {children}
        </MenuLeft>
    </>
  )
}
