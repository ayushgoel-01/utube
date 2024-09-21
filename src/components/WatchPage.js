import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { closeMenu, toggleMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
import { currentVideo } from '../utils/searchSlice';
import userImg from '../images/user.png'
import like from '../images/like.png'
import dislike from '../images/dislike.png'
import share from '../images/share.png'
import download from '../images/download.png'

const WatchPage = () => {

    const [showDescription,setShowDescription] = useState(false);
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const currentVideoData = useSelector((store) => store.search.currentVideo);

    useEffect(() =>{
        dispatch(closeMenu());
    },[]);

  return (
    <div className='flex flex-col w-full'>

      <div className='px-5 flex w-full'>

        <div>
          <iframe className='rounded-xl'
                width="980" 
                height="540" 
                src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
                picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
            ></iframe>

        <div className='flex flex-col'>
          <div>
            <h2 className='py-2 font-bold text-xl'>{currentVideoData?.snippet?.title}</h2>
          </div>

          <div className='flex px-2 items-center justify-between'>
            
            <div className='flex items-center py-2'>
              <img className='w-10 h-10 rounded-full mr-3' src={userImg} alt="Channel Avatar"/>
              <p className='text-xl font-semibold'>{currentVideoData?.snippet?.channelTitle}</p>
            </div>


            <div className='flex items-center space-x-4 cursor-pointer'>

              <div className='flex bg-gray-100 px-4 py-2 border border-gray-300 rounded-full items-center shadow-sm'>
                <img className='w-6 h-6 mr-2' src={like} alt="Like" />
                <p className='text-md mr-4'>
                  {(currentVideoData?.statistics?.likeCount / 1000).toFixed(1) + "K"}
                </p>

                <img className='w-6 h-6' src={dislike} alt="Dislike" />
              </div>


              <div className='flex items-center bg-gray-100 p-2 border border-gray-300 rounded-full shadow-sm'>
                <img className='w-6 h-6' src={share} alt="Share" />
              </div>


              <div className='flex items-center bg-gray-100 p-2 border border-gray-300 rounded-full shadow-sm'>
                <img className='w-6 h-6' src={download} alt="Download" />
              </div>
            </div>
          </div>
        </div>


        <p className='w-full rounded-lg mt-2 p-2 bg-gray-200 cursor-pointer' onClick={() =>{
            setShowDescription(!showDescription)
          }}>
            {showDescription ? "Hide" : "See"} Channle Info..⬇
          
          {showDescription && <div className='pt-4  bg-gray-200'>
          <p>{currentVideoData.snippet?.description}</p>
        </div>}
          
          </p>

          </div>

          <div className='w-full'>
              <LiveChat/>
          </div>

      </div>

      <CommentsContainer/>

    </div>
  )
}

export default WatchPage