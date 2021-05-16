import React from 'react';

import rightarrow from './Icons/rightarrow.svg';
import './.css/rightarrow.css';


function RightArrow() {
  return (
    <div className="RightArrow">
     
      <img height={215}  src={rightarrow} alt={rightarrow}/>
    </div>
  );
}


export default RightArrow;