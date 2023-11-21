import React from 'react'
import '../styles/App.css'

 const Cards = ({details,setState,state}) => {
    function handleClick(){
        console.log(details);
        setState(state.filter((e)=>details!==e));
    }


  
    return (
    <div className='card'>
        {details.name}
        <button className='delete-btn' onClick={handleClick}>Delete</button>
    
    </div>
  )
}
export default Cards;
