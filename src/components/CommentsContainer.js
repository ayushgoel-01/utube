import React from 'react';
import userImg from '../images/user.png';

const commentsData = [
  {
    name: "John Doe",
    text: "This is an awesome video! Thanks for sharing.",
    replies: [],
  },
  {
    name: "Jane Smith",
    text: "I totally agree with the points made in this video.",
    replies: [
      {
        name: "Mike Johnson",
        text: "Absolutely, it really made me rethink some things.",
        replies: [],
      },
      {
        name: "Sarah Brown",
        text: "I had a similar experience! This video is so relatable.",
        replies: [
          {
            name: "Paul Davis",
            text: "I'm glad I'm not the only one who feels this way.",
            replies: [
              {
                name: "Anna Wilson",
                text: "Same here, this video changed my perspective.",
                replies: [
                  {
                    name: "Chris Lee",
                    text: "This discussion is so helpful!",
                    replies: [],
                  },
                ],
              },
              {
                name: "Tom Green",
                text: "Thanks for starting this conversation!",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Emily Taylor",
    text: "Great content! Keep it up.",
    replies: [],
  },
  {
    name: "David Martinez",
    text: "I learned so much from this, thank you!",
    replies: [],
  },
  {
    name: "Sophia Williams",
    text: "Very insightful, I really enjoyed this.",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;

  return (
    <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
      <img className='w-10 h-10 p-2 rounded-full' src={userImg} alt="User" />
      <div className='ml-3'>
        <p className='font-bold'>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ commentsData }) => {
  return (
    <div>
      {commentsData.map((comment, index) => (
        <div key={index}>
          <Comment data={comment} />
          <div className='pl-5 border-l border-gray-300 ml-5'>
            <CommentsList commentsData={comment.replies} />
          </div>
        </div>
      ))}
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
      <h1 className='text-xl font-semibold'>Comments:</h1>
      <CommentsList commentsData={commentsData} />
    </div>
  );
};

export default CommentsContainer;
