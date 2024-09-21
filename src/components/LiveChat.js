import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';
import sendIcon from '../images/sendIcon.png'

const LiveChat = () => {
    const dispatch = useDispatch();
    const [liveMessage,setLiveMessage] = useState("");

    const chatMessages = useSelector((store) => store.chat.messages);

    // API Polling
    useEffect(() =>{

        const i = setInterval(() =>{
            dispatch(addMessage({
                name: generateRandomName(),
                message: makeRandomMessage(20),
            }));
        },1500);

        return () => clearInterval(i);
    },[]);


  return (
    <>
    <div className='ml-2 p-2 w-full h-[540px] border border-gray-300 bg-gray-50 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        {chatMessages.map((m,index) => (
            <ChatMessage key={index} name={m.name} message={m.message}/>
        ))
        }
    </div>

    <form 
    onSubmit={(e) =>{
        e.preventDefault();
        dispatch(addMessage({
            name: "Ayush Goel",
            message: liveMessage,
        }));
        setLiveMessage("");
    }} 
    className='flex w-full p-2 ml-2 border border-gray-300 rounded-lg'>

        <input placeholder='Chat...'
        className='px-2 py-1 w-[320px] border border-gray-300 rounded-2xl' type='text' value={liveMessage} onChange={(e) =>{
            setLiveMessage(e.target.value);
        }}/>

        <button className='px-2 mx-2'>
            <img className='w-8' src={sendIcon}/>
        </button>

    </form>
    </>
  )
}

export default LiveChat