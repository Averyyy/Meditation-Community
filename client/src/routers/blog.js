import React from 'react'
import axios from 'axios'
import Card from '../components/card'
// import { Button, ButtonGroup } from '@chakra-ui/react'

export default function Blog({environment}) {
  const [blogs, setBlogs] = React.useState([{'title': 'Loading...', 'content': 'Loading...', 'username': 'Loading...'}]);
  React.useEffect(() => {
    axios.get(environment+'/api/blogs')
      .then(res => {
        setBlogs(res.data);
      });
    }, [])


  return (
    <>
    <div className='absolute left-12 top-20 font-bold text-4xl'>Blog Plaza</div>
    <a
    // type="button"
    className="xt-button absolute right-12 top-20 py-2.5 px-3.5 text-sm rounded-md  leading-snug tracking-wider uppercase
    font-semibold bg-blue-500
    text-white xt-links-inverse bg-primary-500 border-transparent border transition 
    hover:text-white hover:bg-primary-600 hover:border-primary-700 hover:-translate-y-1 hover:shadow-lg 
    active:text-white active:bg-primary-700 active:translate-y-0 active:shadow-md 
    on:text-white on:bg-primary-700 on:translate-y-0 on:shadow-md" href="/blogcreate">
    Create Your Blog!
    </a>
    <div className="absolute top-36">
    {blogs.map((blog, index) => (
      console.log(blog),
    console.log(index.toString()),
    <div key={index.toString()} className="inline-block justify-center">
    <Card props={blog} env={environment}/>
    </div>))}
    </div>



    </>
  )
}
