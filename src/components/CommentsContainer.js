import React from 'react'
import userImg from '../images/user.png'

const commentsData = [
    {
      name: "Ayush Goel",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Ayush Goel",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [
        {
          name: "Ayush Goel",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [],
        },
        {
          name: "Ayush Goel",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [
            {
              name: "Ayush Goel",
              text: "Lorem ipsum dolor sit amet, consectetur adip",
              replies: [
                {
                  name: "Ayush Goel",
                  text: "Lorem ipsum dolor sit amet, consectetur adip",
                  replies: [
                    {
                      name: "Ayush Goel",
                      text: "Lorem ipsum dolor sit amet, consectetur adip",
                      replies: [
                        {
                          name: "Ayush Goel",
                          text: "Lorem ipsum dolor sit amet, consectetur adip",
                          replies: [],
                        },
                      ],
                    },
                    {
                      name: "Ayush Goel",
                      text: "Lorem ipsum dolor sit amet, consectetur adip",
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Ayush Goel",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Ayush Goel",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Ayush Goel",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Ayush Goel",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
  ];


const Comment = ({data}) =>{
    const {name,text,replies} = data;

    return (
        <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
            <img className='w-16 h-16 p-3' src={userImg}/>
            <div>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    );
};

const CommentsList = ({commentsData}) =>{
    return (
        <div>
            {commentsData.map((comment,index) =>{
                return( 
                    <div key={index}>
                        <Comment data={comment}/>
                        <div className='pl-5 border border-l-gray ml-5'>
                            <CommentsList commentsData={comment.replies}/>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='text-xl'>Comments:</h1>
        <CommentsList commentsData={commentsData}/>
    </div>
  )
}

export default CommentsContainer;