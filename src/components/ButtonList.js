import React from 'react'
import Button from './Button'

const list = ["All", "Gaming", "Songs", "Live", "Soccer", "Cricket", "Cooking", "Watched", "Colleges", "New to you"];

const ButtonList = () => {
  return (
    <div className='flex overflow-hidden'>
        {list.map((item) =>
            <Button key={item} name={item}/>
        )}
    </div>
  )
}

export default ButtonList