import React from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/toggle'

export default function Card({props, env}) {
    console.log(props)
  const title = props.title || 'Title';
  const content = props.content || 'Content';
  const username = props.username || 'Username';
  return (
    <div>
      <div className="xt-card block w-60 rounded-2xl text-gray-900 xt-links-default bg-gray-100 scale-75">
        <div className="xt-media-container bg-gray-200 rounded-t-2xl h-40">
          <img className="xt-media object-cover" src={env+"/blo.jpeg"} loading="lazy" alt="" />
        </div>
        <div className="p-7 sm:p-9 text-base">
          <div className="xt-h4">{title}</div>
          <p>
            {content}
          </p>
        </div>
        <div className="p-6 sm:p-8 text-sm rounded-b-2xl bg-primary-100">
          <p>
            <strong>{username}</strong> 
          </p>
        </div>
      </div>
    </div>
  )
}