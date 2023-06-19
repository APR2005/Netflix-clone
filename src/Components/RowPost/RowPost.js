import React,{useEffect,useState} from 'react'
import "./RowPost.css"
import Youtube from "react-youtube"
import {imageUrl,API_KEY}from  '../../Constants/Constants'
import axios from 'axios'
function RowPost(props) {
  const [movies, setmovies] = useState([])
  const [urlId,setUrlId] = useState('' )
  useEffect(() => {
    axios.get(props.url).then(response=>{
      console.log(response.data);
      setmovies(response.data.results)

    }).catch(err=>{
      // alert(`Network Error`)
    })

  }, [props.url])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
   const handleMovie  = (id)=>{
    console.log(id);
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
     if (response.data.results.length!==0) {
      setUrlId(response.data.results[0])
      
     }
     else{
    console.log(`array is empty`);
     }
    }).catch(err=>{
      console.log(err.message);
    })
   }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj)=>
          
            <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="" />


          )}
        
        </div>
       {urlId &&  <Youtube  opts={opts} videoId={urlId.key} />}
    </div>
  )
}

export default RowPost