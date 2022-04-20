import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';


   

export default function Auth({ setToken, environment }) {
    console.log(environment)
    const [registerUsername, setRegisterUsername] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const register = (e) => {
        axios({
        method: 'POST',
        data:{
            username: registerUsername,
            password: registerPassword
        },
        withCredentials: true,
        url: environment+'/register'
        }).then(res => {
            if (res.data.token) {
                setToken(res.data.token);
                window.localStorage.setItem('token', res.data.token);
                window.localStorage.setItem('username', res.data.username);
            }
        })
    };
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
        <div className=''>
        <div className='flex items-center justify-center'>
        <h1>Register</h1>
        <input type="text" placeholder="username" onChange={e=>setRegisterUsername(e.target.value)}/>
        <input type="text" placeholder="password" onChange={e=>setRegisterPassword(e.target.value)}/>
        <button onClick={register}>register</button>
        </div>
        <div className='flex items-center justify-center '>
        <h1>Login</h1>
        <input type="text" placeholder="username" onChange={e=>setLoginUsername(e.target.value)}/>
        <input type="text" placeholder="password" onChange={e=>setLoginPassword(e.target.value)}/>
        <button onClick={login}>login</button>
        </div>
        </div>
    )
}


