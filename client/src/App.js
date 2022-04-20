import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link }  from "react-router-dom";
import NavBar from './components/navbar';
import Home from './routers/home';
import Medi from './routers/medi';
import Score from './routers/score';
import Blog from './routers/blog';
import Auth from './routers/autha';
import Blogcreate from './routers/blogcreate';
import About from './routers/about';
import { useState, useEffect } from 'react';



function App() {
  const [token, setToken] = useState(window.localStorage.getItem('token'));
  const env = process.env.REACT_APP_SERVER;
  if (!token) {
    return <Auth setToken={setToken} environment={env}/>
  }
return (
  <>

    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/scores" element={<Score environment={env} />}/>
          <Route path="/medi" element={<Medi environment={env}/>}/>
          <Route path="/blog" element={<Blog environment={env}/>}/>
          <Route path="/blogcreate" element={<Blogcreate environment={env}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path="/" element={<Home />}/>
        </Routes>
      </div>
     </Router>
     
    </>

  );
}

export default App;
