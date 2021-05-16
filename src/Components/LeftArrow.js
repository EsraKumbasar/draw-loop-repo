import React from 'react';

import leftarrow from './Icons/leftarrow.svg';
import './.css/leftarrow.css';


function LeftArrow() {
  return (
    <div className="LeftArrow">
     
      <img height={215}  src={leftarrow} alt={leftarrow}/>
    </div>
  );
}


export default LeftArrow;