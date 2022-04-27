import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login({setToken, environment}) {
    const [showPass, setShowPass] = useState(true);
    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const login = (e) => {
        e.preventDefault();
        axios({
        method: 'POST',
        data:{
            username: loginUsername,
            password: loginPassword
        },
        withCredentials: true,
        url: environment+'/login'
        }).then(res => {
            if(res.data.token) {
                setToken(res.data.token)
                window.localStorage.setItem('token', res.data.token);
                window.localStorage.setItem('username', res.data.username);
            };
        });
        console.log('logged in');
    };
  return (
    <div className="flex flex-col h-screen">
    <div className="grid place-items-center mx-2 my-20 sm:my-auto" x-data="{ showPass: true }">
        <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12
            px-6 py-10 sm:px-10 sm:py-6
            bg-white rounded-lg shadow-md lg:shadow-lg">
            <div className="text-center mb-4">
                <h6 className="font-semibold text-[#063970] text-xl">Login</h6>
            </div>
                <div>
                    <input id="email" type="text" placeholder="Username" onChange={e=>setLoginUsername(e.target.value)}
                    className="block w-full py-3 px-3 mt-2
                        text-gray-800 appearance-none
                        border-2 border-gray-100
                        focus:text-gray-500 focus:outline-none focus:border-gray-200 rounded-md" />
                </div>

                <div className="relative w-full">
                    <input type={showPass ? 'password' : 'text'} id="password" placeholder="Password" onChange={e=>setLoginPassword(e.target.value)}
                    className="block w-full py-3 px-3 mt-2 mb-4
                        text-gray-800 appearance-none
                        border-2 border-gray-100
                        focus:text-gray-500 focus:outline-none focus:border-gray-200 rounded-md" />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                            <p className="font-semibold" onClick={()=>setShowPass(!showPass)} x-text ={showPass ? 'Show' : 'Hide'}>Show</p>
                        </div>
                </div>

                <button type="submit"  onClick={login} className="w-full py-3 mt-10 bg-[#063970] rounded-md
                    font-medium text-white uppercase
                    focus:outline-none hover:shadow-none">
                    Login
                </button>
                <div className='flex items-center justify-center'>Do not have an account?  <Link to="/register">  Register</Link></div>
        </div>
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
    </div>
    </div>

  )
}
