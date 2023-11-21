import React, { useState } from 'react'
import '../styles/App.css'

 const Cards = ({details,setState,state}) => {
    const[state2,setState2]=useState(false);
    
    function handleClick(){
        console.log(details);
        setState(state.filter((e)=>details!==e));
    }
    function hue(){
        setState2(!state2);
    }
    function perform(str){
       let k= str.split(" ");
       let i=0;
       let ans="";
       while(i<k.length && i<200){
        ans=ans+" "+k[i++];
       }
      console.log(ans);
      return ans;
    }


  
    return (
    <div className='card'>
        {details.name}
        
        <button className='tour-item-para' onClick={hue}>show/hide</button>
        <p>{state2&&(<p>{perform(details.info)}</p>)}</p>
        <button className='delete-btn' onClick={handleClick}>Delete</button>
    
    </div>
  )
}
export default Cards;
