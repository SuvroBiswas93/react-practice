import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../Post/Post';

const Posts = () => {
    const posts = useLoaderData()
    return (
        <div>
            <h3 className='text-purple-500 text-2xl font-bold animate-bounce'>This is Post component, length is: {posts.length}</h3>
            <div className=''>
                {
                    posts.map((post,id) => <Post key={id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;
