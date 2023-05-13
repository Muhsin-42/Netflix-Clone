// import axios from 'axios'
import React, { useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import { useEffect } from 'react';
import {API_KEY,imageUrl} from '../../constants/constants'

function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
     axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
       console.log('resss = ',response.data.results[0])
       let num = Math.floor(Math.random() * (5 - 0 + 1)) + 0
       setMovie(response.data.results[num])
     })
  
  }, [])
  
  return ( 
    <div 
    className='banner' style={{backgroundImage:  `url(${movie? imageUrl+movie.backdrop_path : null})`}}>
       <div className='content' >
           <h1 className='title'>{movie ? movie.title : ""}</h1>
           <div className='banner_buttons' >
               <button className='button' >Play</button>
               <button className='button' >My list</button>
           </div>
           <h1 className='description'>{ movie  ? movie.overview:''}</h1>
       </div>
   <div className="fade_bottom"></div>
   </div>
  )
}

export default Banner  