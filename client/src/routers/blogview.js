import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Blogblock from '../components/blogblock/Blogblock';
import axios from 'axios';


export default function Blogview({environment}) {
    const params = useParams();
    const blogid = params.blogid;
    const [blog, setBlog] = useState({title: '', content: '', username: '', time: '', replies: []});
    useEffect(() => {
        axios.get(environment+'/api/blogs/'+blogid)
        .then(res => {
            console.log(res.data);
            setBlog(res.data);
        })
    }, []);

    function submitreply(e) {
        e.preventDefault();
        const content = document.querySelector('#reply').value;
        const username = window.localStorage.getItem('username');
        axios.post(environment+'/api/blogs/'+blogid, {username,content})
        .then(res => {
            console.log(res.data);
            setBlog(res.data);
        });
    }


    return (
        <div className='bg-cyan-400'>
        <div class="ripple-background">
        <div class="circle xxlarge shade1"></div>
        <div class="circle xlarge shade2"></div>
        <div class="circle large shade3"></div>
        <div class="circle mediun shade4"></div>
        <div class="circle small shade5"></div>
        </div>

        <div className='absolute left-12 top-20 font-bold text-4xl'>Blog View</div>
        <a
        // type="button"
        className="xt-button absolute right-12 top-20 py-2.5 px-3.5 text-sm rounded-md  leading-snug tracking-wider uppercase
        font-semibold bg-blue-500
        text-white xt-links-inverse border-transparent border transition 
        hover:text-white hover:bg-primary-600 hover:border-primary-700 hover:-translate-y-1 hover:shadow-lg 
        active:text-white active:bg-primary-700 active:translate-y-0 active:shadow-md 
        on:text-white on:bg-primary-700 on:translate-y-0 on:shadow-md" href="/blog">
        Go back to Blog Plaza
        </a>
        <div className="absolute top-36 px-24 pb-24 left-1/2 transform -translate-x-1/2 w-full">
        <div className='font-PTSans font-normal text-6xl center'>{blog.title}</div>
        <div>Creator:{blog.username} Time: {blog.time}</div>
        <div class="divider div-transparent"></div>
        <Blogblock username={blog.username} content={blog.content} />
        <br/>
        {blog.replies.map(reply => (<>
            <Blogblock username={reply.username} content={reply.content} />
            <br/>
            </>))}

    
        <h1>Leave a reply to {blog.username}:</h1>
        {/* <textarea type="text" placeholder="reply.." id='reply'/> */}
        <div className="w-full">
            <label className="block mb-3 font-medium text-gray-700"> Content </label>
            <textarea
              type='text'
              className="block w-1/2 h-20 max-h-48 rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-200 transition focus:bg-gray-300 focus:outline-none resize-vertical"
              aria-label="Content"
              placeholder="Content"
              id='reply'></textarea>
          </div>
    
        <button onClick={submitreply}
        // type="button"
        className="xt-button absolute left-2/3 bottom-28 py-2.5 px-3.5 text-sm rounded-md  leading-snug tracking-wider uppercase
        font-semibold bg-blue-500
        text-white xt-links-inverse border-transparent border transition 
        hover:text-white hover:bg-primary-600 hover:border-primary-700 hover:-translate-y-1 hover:shadow-lg 
        active:text-white active:bg-primary-700 active:translate-y-0 active:shadow-md 
        on:text-white on:bg-primary-700 on:translate-y-0 on:shadow-md" href="/blog">
        Submit the reply to {blog.username}!
        </button>
        </div>



        </div>
    )
}


{/* <div>Content:</div>
<div>{blog.content}</div>
<ul>
{blog.replies.map((reply, index) => {
    return (
        <li key={index}>{reply.username} says: {reply.content}</li>
    )
})}
</ul> */}