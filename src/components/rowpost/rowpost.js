import React ,{ useEffect, useState }  from 'react'
import "./rowpost.css"
import Axios from "../../axios";
import {API_KEY,imageUrl} from "../../constants/constants";
import YouTube, { youtube } from "react-youtube";
import axios from 'axios';
function Rowpost(props) {
    const [movies,setMovies]=useState([])
    const [urlid,seturlid]=useState('')
    useEffect(()=>{
        Axios.get(props.url).then(Response=>{
            console.log(Response.data);
            setMovies(Response.data.results)
        }).catch(err=>{
            alert("Error")
        })
    },[])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };

      const handleMovie =(id)=>{
        console.log(id);
        console.log(API_KEY);
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((Response)=>{
            console.log("respo");
            if (Response.data.results.length !==0) {
                seturlid(Response.data.results[0])
            }
        })
      }

  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
            {movies.map((obj)=>
            <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="" />
            )}
          
        </div>
        {urlid && <YouTube opts={opts} videoId={urlid.key} />}
    </div>
  )
}

export default Rowpost