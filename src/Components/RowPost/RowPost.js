import React, { useEffect,useState } from 'react'
import YouTube from 'react-youtube'
import "./RowPost.css"
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../Constants/constant'
const RowPost = (props) => {
  const [movies, setMovies] = useState([]);
  const [urlid,setUrlid] =useState('');
  useEffect(() => {
    axios.get(props.url)
    .then(response=>{
      console.log(response);
      setMovies(response.data.results)
    })
    .catch(err=>{
      console.log(err,'Network Error')
    })
  }, []);
  
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const handleMovie = (id)=>{
    console.log(id);
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
    .then(response=>{
      console.log(response.data)
      if(response.data.results.length!==0){
        setUrlid(response.data.results[0])
      }else{
        console.log('Array is empty');
      }
    })
  }
  
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {movies.map((obj)=>
            <img onClick={()=>handleMovie(obj.id)} className={props.isSmall?'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="" />
          )}
        </div>
        { urlid && <YouTube videoId={urlid.key} opts={opts} />}
    </div>
  )
}

export default RowPost