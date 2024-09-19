import React from 'react'
import userImg from '../images/user.png'

const VideoCard = ({ info }) => {
    const { snippet, statistics } = info || {};
    const { channelTitle, title, thumbnails } = snippet || {};

    return (
        <div className='p-2 h-50 m-2 w-72 cursor-pointer bg-white rounded-lg shadow-md'>
            <img className='rounded-lg w-full' alt='Thumbnail' src={thumbnails?.medium.url} />

            <div className='flex gap-2 mt-2'>
                <div className='flex-shrink-0 mt-2'>
                    <img className='w-8 h-8 rounded-full' src={userImg} alt='Channel Icon' />
                </div>

                <div className='flex-1'>
                    <ul>
                        <li className='font-semibold text-lg h-[3.7rem] py-1 px-2 overflow-hidden text-black'>
                            {title.length > 60 ? title.substr(0, 60) + "..." : title}
                        </li>
                        <li className='text-gray-600'>{channelTitle}</li>
                        <li className='text-gray-500'>{statistics?.viewCount} views</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
