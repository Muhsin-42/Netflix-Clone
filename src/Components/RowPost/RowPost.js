import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import axios from '../../axios'
import './RowPost.css'
import {API_KEY, imageUrl} from '../../constants/constants'
// import {originals} from '../../urls'

function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId,setUrlId] = useState()




  useEffect(() => {
    axios.get(props.url).then((response)=>{
      setMovies(response.data.results)
    })
  }, [])


  //Youtube
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  


  const handleMovie = (id)=>{
    console.log('movie id = ',id)
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
    // axios.get(`https://api.themoviedb.org/3/movie/811656/videos?api_key=70dcbe0b3e27569940267305628dfc97&language=en-US`).then((response)=>{
      console.log('377 = ',response.data.results)
      if(response.data.results.length !=0)
      {
        setUrlId(response.data.results[0])
      }else{
        console.log('No Video found')
      }
    })
  }
  return (
    <div className='row'>
        <h2   >{props.title}</h2>
        <div className="posters">
          {
            movies.map((movie)=>{
              return (
                
              // <img onClick={()=>handleMovie(movie ? movie.id : null)} className='poster' src={movie? imageUrl+ (props.isSmall? movie.poster_path : movie.backdrop_path ) : null} alt="Movie poster" />
              <img onClick={()=>handleMovie(movie ? movie.id : null)} className='poster' src={movie? imageUrl+movie.poster_path } alt="Movie poster" />
              )
            })
          }
        </div>
        { urlId &&   <YouTube opts={opts} videoId={urlId.key} />  }
    </div>
  )
}

export default RowPost