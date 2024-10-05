import React, { useEffect, useState } from 'react'
import hamburger from '../images/hamburger.png'
import userImg from '../images/user.png'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { GOOGLE_API_KEY, YOUTUBE_KEYWORD_SEARCH, YOUTUBE_SEARCH_API } from '../utils/constants'
import { cacheResults, searchResults } from '../utils/searchSlice'
import lensIcon from '../images/magnifying-glass.png'

const Head = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(true);

    const searchCache = useSelector((store) => store.search);
    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) { // present in cache
                setSuggestions(searchCache[searchQuery]);
            } else {
                getSearchSuggestions(); // not present in cache
            }
        }, 200);

        return () => {
            clearTimeout(timer); // clear the timer when component unmounts
        };
    }, [searchQuery]);

    const getSearchSuggestions = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        console.log(json);
        setSuggestions(json[1]);

        // update the cache
        dispatch(cacheResults({
            [searchQuery]: json[1],
        }));
    };

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };

    const handleSearchClick = (s) => {
        setSearchQuery(s);
        setShowSuggestions(false);
        getSearchVideos(s);
    }

    const getSearchVideos = async (query) => {
        const data = await fetch(YOUTUBE_KEYWORD_SEARCH + query + "&key=" + GOOGLE_API_KEY);
        const json = await data.json();
        console.log(json.items);
        dispatch(searchResults(json.items));
    }

    return (
        <div className='grid grid-flow-col p-2 m-2 shadow-md bg-white'>

            <div className='flex col-span-1'>
                <img onClick={() => toggleMenuHandler()} className='h-7 mt-2 cursor-pointer' src={hamburger} alt="Menu" />
                <img className='h-20 -mt-5 mx-2' 
                src='https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg' alt="Logo" />
            </div>

            <div className='col-span-10 px-14'>

                <form onSubmit={(e) =>{
                    e.preventDefault();
                }} className='flex'>
                    
                    <input 
                        className='w-3/5 border border-gray-300 px-5 p-2 rounded-l-full' 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setShowSuggestions(false)}
                        type='text'
                        placeholder='Search'
                    />

                    <button onClick={() => handleSearchClick(searchQuery)} className='border border-gray-300 px-4 py-2 rounded-r-full bg-gray-200'>

                        <img className='w-6' src={lensIcon}></img>

                    </button>
                </form>

                {searchQuery !== "" && showSuggestions && 
                <div className='fixed bg-white py-2 px-2 w-[35.3rem] shadow-md rounded-lg border border-gray-300'>
                    <ul>
                        {suggestions.map((s) => (
                            <li key={s} onMouseDown={() => handleSearchClick(s)} className='py-2 px-3 shadow-sm hover:bg-gray-100'>{s}</li>
                        ))}
                    </ul>
                </div>}
            </div>

            <div className='col-span-1'>
                <img className='h-8' src={userImg} alt="User" />
            </div>

        </div>
    )
}

export default Head
