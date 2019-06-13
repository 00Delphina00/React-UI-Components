import React from 'react';
import './Header.css';

const HeaderTitle = ()=>{
    let today = new Date;
  return  <h3><strong>Lambda School</strong> @LambdaSchool*{today.toDateString()}</h3>
};

export default HeaderTitle;