import React from 'react';
import { Link } from 'react-router';

const Post = ({post}) => {
    const {title,body,id} = post
    return (
        <div className='border-2 border-red-400 space-y-2 w-[500px] mt-4 rounded-xl'>
            <h3>{title}</h3>
            <h3>{body}</h3>
            <Link className='text-green-400 underline' to={`/posts/${id}`}>Show Details</Link>
        </div>
    );
};

export default Post;