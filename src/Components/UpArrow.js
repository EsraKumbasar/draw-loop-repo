import React from 'react';

import uparrow from './Icons/uparrow.svg';
import './.css/uparrow.css';


function UpArrow() {
  return (
    <div className="UpArrow">
     
      <img height={150}  src={uparrow} alt={uparrow}/>
    </div>
  );
}


export default UpArrow;