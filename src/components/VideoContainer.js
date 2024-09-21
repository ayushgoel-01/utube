import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { searchResults } from '../utils/searchSlice';

const VideoContainer = () => {
  const dispatch = useDispatch();

  // Get the searched videos from the Redux store
  const searchedVideos = useSelector((store) => store.search.searchedData);
  const [videos, setVideos] = useState([]);


  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();

    setVideos(json.items);
  };



  // Conditionally render either searched videos or default popular videos
  let isSearch = false;
  let displayedVideos = videos;
  if(searchedVideos?.length > 0){
    displayedVideos = searchedVideos;
    isSearch = true;
   }
  else{ 
    displayedVideos = videos;
    isSearch = false;

  };

  return (
    <div className='flex flex-wrap'>
      {displayedVideos.map((video) => (
        <Link to={isSearch ? '/watch?v='+video.id.videoId : '/watch?v='+video.id}
        key={isSearch ? video.id.videoId : video.id}
      >
        <VideoCard info={video} />
      </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
