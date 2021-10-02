import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import './Css/Seting_l.css';
import './Css/Seting_c.css';
import './Css/Seting_r.css';
import './Css/Cssreponsive/Biccentereposive.css';
import './Css/Cssreponsive/Centerreposive.css';
import './Css/Cssreponsive/Smailreposive.css';
import RouteSeting from './Route/RouteSeting';
import RouteSeting_l from './Route/RouteSeting_l';
import RouteSeting_r from './Route/RouteSeting_r';
function App() {
  const [hiden, setHiden] = useState(0);
 
  
  return (
    <div className="seting-layout">
      <RouteSeting_l hiden={hiden} setHiden={setHiden}/>
      <RouteSeting hiden={hiden} setHiden={setHiden}/>
      <RouteSeting_r />
    </div>
  );
}

export default App;
