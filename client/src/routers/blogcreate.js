import React from 'react'
import axios from 'axios'

export default function Blogcreate({ environment }) {
    const [created, setCreated] = React.useState(false);
    function handleSubmit(e) {
        e.preventDefault();
        const titledata = document.getElementById('title').value;
        const contentdata = document.getElementById('content').value;
        axios.post(environment+'/api/blogs', {
            title: titledata,
            content: contentdata,
            username: localStorage.getItem('username'),
        }).then(res => {
            console.log(res.data);
            setCreated(true);
        });      
    }
  return (
      <>
      <form className="text-sm px-7">
        <div className="xt-row xt-row-x-6 xt-row-y-4">
          <div className="w-1/2">
            <label className="block mb-3 font-medium text-gray-700"> Title </label>
            <input
              type="text"
              className="block w-2/3 rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
              aria-label="Title"
              placeholder="Title"
              id='title'
            />
          </div>


          <div className="w-full">
            <label className="block mb-3 font-medium text-gray-700"> Content </label>
            <textarea
              className="block w-full h-20 max-h-48 rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none resize-vertical"
              aria-label="Content"
              placeholder="Content"
              id='content'></textarea>
          </div>
          </div>

          <div className="w-full">
            <button
              type="submit"
              onClick={handleSubmit}
              className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600">
              submit
            </button>
          </div>

      </form>
      <a
          // type="button"
          className="xt-button absolute right-12 top-20 py-2.5 px-3.5 text-sm rounded-md  leading-snug tracking-wider uppercase
          font-semibold bg-blue-500
          text-white xt-links-inverse bg-primary-500 border-transparent border transition 
          hover:text-white hover:bg-primary-600 hover:border-primary-700 hover:-translate-y-1 hover:shadow-lg 
          active:text-white active:bg-primary-700 active:translate-y-0 active:shadow-md 
          on:text-white on:bg-primary-700 on:translate-y-0 on:shadow-md" href="/blog">
          Back to see Blogs!
          </a>
        {created?(<div>Successfully Created!</div>):(<div></div>)}
      </>

  )
}
