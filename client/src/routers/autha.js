import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../components/welcome/Login';
import Register from '../components/welcome/Register';
   

export default function Auth({ setToken, environment }) {
    console.log(environment)
    return (
        <>
        <Router>
        <Routes>
            <Route path="*" element={<div>404 Not Found</div>}/>
            <Route path="/" element={<Login setToken={setToken} environment={environment}/>}></Route>
            <Route path="/register" element={<Register setToken={setToken} environment={environment}/>}></Route>
        /</Routes>
        </Router>

        </>
    )
}

// function Loginbackup({ setToken, environment }){
//     const [loginUsername, setLoginUsername] = useState('');
//     const [loginPassword, setLoginPassword] = useState('');
//     const login = (e) => {
//         e.preventDefault();
//         axios({
//         method: 'POST',
//         data:{
//             username: loginUsername,
//             password: loginPassword
//         },
//         withCredentials: true,
//         url: environment+'/login'
//         }).then(res => {
//             if(res.data.token) {
//                 setToken(res.data.token)
//                 window.localStorage.setItem('token', res.data.token);
//                 window.localStorage.setItem('username', res.data.username);
//             };
//         });
//         console.log('logged in');
//     };
//     return (
        
//         <div className = 'flex items-center justify-center'>
//         <div className='block '>
//         <h1>Login</h1>
//         <input type="text" placeholder="username" onChange={e=>setLoginUsername(e.target.value)}/>
//         <input type="text" placeholder="password" onChange={e=>setLoginPassword(e.target.value)}/>
//         <button onClick={login}>Login</button>
//         <div>Do not have an account? <Link to="/register">Register</Link></div>
//         </div>
//         </div>
//     )
// }

// function Registerbackup({ setToken, environment }){
//     const [registerUsername, setRegisterUsername] = useState('');
//     const [registerPassword, setRegisterPassword] = useState('');

//     const register = (e) => {
//         axios({
//         method: 'POST',
//         data:{
//             username: registerUsername,
//             password: registerPassword
//         },
//         withCredentials: true,
//         url: environment+'/register'
//         }).then(res => {
//             if (res.data.token) {
//                 setToken(res.data.token);
//                 window.localStorage.setItem('token', res.data.token);
//                 window.localStorage.setItem('username', res.data.username);
//             }
//         })
//     };

//     return (
//         <div className='flex items-center justify-center'>
//         <h1>Register</h1>
//         <input type="text" placeholder="username" onChange={e=>setRegisterUsername(e.target.value)}/>
//         <input type="text" placeholder="password" onChange={e=>setRegisterPassword(e.target.value)}/>
//         <button onClick={register}>register</button>
//         <div>Already have an account? <Link to="/">Login</Link></div>
//         </div>
//     )
 
// }


