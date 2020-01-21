import React, {useRef} from 'react';





 const Spinner =( )=>{

let spinner = useRef()





    return (  
    <div className=''>       
        <img src={'../../Assets/greenLanternMWlogo.jpg'}
             atr={''}
             ref={cr=>spinner=cr}
             style={{borderRadius: '50%'}}/>
             loading . . . 
    </div>
    )
};
export default Spinner;