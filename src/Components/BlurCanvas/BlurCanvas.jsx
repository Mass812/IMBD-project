import React from 'react';
import { useHistory } from 'react-router-dom';



const BurCanvas = (props) => {
  return (
    <div
      className='blur-canvas'
      onClick={props.onClick}
      style={{
        zIndex: '-9',
        position: 'absolute',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        backgroundColor: 'red'
      }}></div>
  );
};
export default BurCanvas;
