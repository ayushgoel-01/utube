import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu, toggleMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';

const WatchPage = () => {

    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    console.log(searchParams.get("v"));

    useEffect(() =>{
        dispatch(closeMenu());
    },[]);

  return (
    <div className='flex flex-col'>

      <div className='px-5'>
        <iframe className='rounded-xl'
              width="980" 
              height="500" 
              src={"https://www.youtube.com/embed/" + searchParams.get("v")}
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
              picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
          ></iframe>
      </div>

      <CommentsContainer/>

    </div>
  )
}

export default WatchPage