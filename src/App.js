import React, { useState } from 'react';
import './App.css';

// import components
import AllElements from './AllElements/AllElements';

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={`App ${dark ? 'dark' : ''}`}>
      <AllElements setDark={setDark} dark={dark}/>
    </div>
  );
}

export default App;
