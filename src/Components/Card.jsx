import React from 'react'

const Card = (props) => {
  
    
    return (

       <a href={props.url} target='_blank' className='w-1/5 h-65 mt-8'>
         <div div className = 'w-full h-full' >
            <div className='w-full h-55 overflow-hidden'>
                <img className='w-full h-full rounded-xl object-cover'src={props.img} alt="" />
            </div>
            <div className='w-full h-10'>
                <h3>Post by : {props.author}</h3>
            </div>
        </div>
        </a>
    )
}
export default Card
