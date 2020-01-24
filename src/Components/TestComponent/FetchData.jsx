import React, { useState, useEffect } from 'react';
import axios from 'axios';


const FetchData =(props)=>{

    const [kept, setKept]= useState;


    const holdURL = {props.holdURL};
    
    const FetchDataFromAPI = (props) => {
        axios
        .get(holdURL)
        .then(res => res.data.results)
        .then(res => {
          props.setKept(res);
        })
        .catch(err => console.error(err, '☹️'))
        .finally(window.scrollTo(0,0))
    }
    


    useEffect(()=>{

        FetchDataFromAPI();


    }, [])
      
 





}




export default FetchData;