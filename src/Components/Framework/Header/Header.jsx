import React from 'react';

const greenLanternLogo = require('../../../Assets/greenLanternMWlogo2.jpg');


 const Header =( )=>{
    return (  
        <header className='framework-header'>
        <div className='framework-under-header' />
      
        <img
          className='greenLantern'
          src={greenLanternLogo}
          alt={'Matt Wellman Logo'}
        />
        <div className='title-top'>Movie</div>
        <div className='title-bottom'>Warehouse</div>
        <div className='framework-under-header' />
      </header>
    )
};
export default Header;