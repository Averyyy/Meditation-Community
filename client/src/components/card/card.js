import React from 'react'
import 'xtendui/src/toggle'
import { useNavigate } from 'react-router-dom'

export default function Card({blogs}) {
  const piclib = ['url(https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)',
  'url(https://images.unsplash.com/photo-1557187666-4fd70cf76254?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)',
  'url(https://images.unsplash.com/photo-1556680262-9990363a3e6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)',
  'url(https://images.unsplash.com/photo-1557004396-66e4174d7bf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)']
  //   console.log(props)
  // const title = props.title || 'Title';
  // const content = props.content || 'Content';
  // const username = props.username || 'Username';
  console.log(blogs)
  const navigate = useNavigate()
  const enterblog = (blog) => {
    console.log(blog);
    navigate(`/blog/${blog.id}`)
  }



  return (
    <div className='relative top-36 scale-90 sm:scale-75 sm:top-20'>
    <div className="hero-section">
      <div className="card-grid">
        {blogs.map((blog,index) => (
          <a key={index} className="card" href="/blogview" onClick={(e)=>{e.preventDefault();return enterblog(blog)}}>
            <div className="card__background" style={{backgroundImage: piclib[Math.floor(Math.random()*piclib.length)]}}></div>
            <div className="card__content">
              <p className="card__category">{blog.username}</p>
              <h3 className="card__heading">{blog.title}</h3>
            </div>
          </a>)
        )}
    </div>
   </div>
   </div>
  )
}


{/* <div>
<div classNameName="xt-card block w-60 rounded-2xl text-gray-900 xt-links-default bg-gray-100 scale-75">
  <div classNameName="xt-media-container bg-gray-200 rounded-t-2xl h-40">
    <img classNameName="xt-media object-cover" src={env+"/blo.jpeg"} loading="lazy" alt="" />
  </div>
  <div classNameName="p-7 sm:p-9 text-base">
    <div classNameName="xt-h4">{title}</div>
    <p>
      {content}
    </p>
  </div>
  <div classNameName="p-6 sm:p-8 text-sm rounded-b-2xl bg-primary-100">
    <p>
      <strong>{username}</strong> 
    </p>
  </div>
</div>
</div> */}



{/* <a className="card" href="#">
<div className="card__background" style={{'background-image': }}></div>
<div className="card__content">
  <p className="card__category">Category</p>
  <h3 className="card__heading">Example Card Heading</h3>
</div>
</a>
<a className="card" href="#">
<div className="card__background" style={{'background-image': }}></div>
<div className="card__content">
  <p className="card__category">Category</p>
  <h3 className="card__heading">Example Card Heading</h3>
</div>
</a>
<a className="card" href="#">
<div className="card__background" style={{'background-image': }}></div>
<div className="card__content">
  <p className="card__category">Category</p>
  <h3 className="card__heading">Example Card Heading</h3>
</div>
</a> */}