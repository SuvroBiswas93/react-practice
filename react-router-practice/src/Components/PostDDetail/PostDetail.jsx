import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetail = () => {
    const{title,body,id}=useLoaderData()
    return (
        <div className='border-2 w-[400px] space-y-4'>
            <h3>{id}</h3>
            <p className=''>{title}</p>
            <p className=' '>{body}</p>
        </div>
    );
};

export default PostDetail;