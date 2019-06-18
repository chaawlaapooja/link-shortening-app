import React from 'react';
import Accounts from './Accounts';

const PrivateHeader = (props) => {
  return (
    <div className="header">
      <div className="header__content">
        <h1 className="header__title">{props.title}</h1>
       	<span style={{backgroundColor:"inherit", color:"white"}}><Accounts /></span> 
       </div>
    </div>
  );
};


export default PrivateHeader;
