import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    if (!isMenuOpen) return null;

    return (
        <div className='top-0 left-0 h-screen w-74 bg-white text-black shadow-lg'>
            <ul className='p-4 space-y-2'>
                <li>
                    <Link to='/' className='flex items-center text-lg font-medium hover:bg-gray-100 p-2 rounded'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/shorts' className='flex items-center text-lg font-medium hover:bg-gray-100 p-2 rounded'>
                        Shorts
                    </Link>
                </li>
                <li>
                    <Link to='/videos' className='flex items-center text-lg font-medium hover:bg-gray-100 p-2 rounded'>
                        Videos
                    </Link>
                </li>
                <li>
                    <Link to='/live' className='flex items-center text-lg font-medium hover:bg-gray-100 p-2 rounded'>
                        Live
                    </Link>
                </li>
            </ul>
            <h1 className='font-bold text-xl pt-4 px-4'>Subscriptions</h1>
            <ul className='p-4 space-y-2'>
                <li className='hover:bg-gray-100 p-2 rounded'>Music</li>
                <li className='hover:bg-gray-100 p-2 rounded'>Sports</li> 
                <li className='hover:bg-gray-100 p-2 rounded'>Gaming</li>
                <li className='hover:bg-gray-100 p-2 rounded'>Movies</li>
            </ul>
            <h1 className='font-bold text-xl pt-4 px-4'>Watch Later</h1>
            <ul className='p-4 space-y-2'>
                <li className='hover:bg-gray-100 p-2 rounded'>Music</li>
                <li className='hover:bg-gray-100 p-2 rounded'>Sports</li>
                <li className='hover:bg-gray-100 p-2 rounded'>Gaming</li>
                <li className='hover:bg-gray-100 p-2 rounded'>Movies</li>
            </ul>
        </div>
    )
}

export default Sidebar
