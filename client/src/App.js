import './App.css';
import { BrowserRouter as Router, Routes, Route }  from "react-router-dom";
import NavBar from './components/navbar';
import Home from './routers/home';
import Medi from './routers/medi';
import Score from './routers/score';
import Blog from './routers/blog';
import Auth from './routers/autha';
import Blogcreate from './routers/blogcreate';
import About from './routers/about';
import Blogview from './routers/blogview';
import { useState } from 'react';



function App() {
  const [token, setToken] = useState(window.localStorage.getItem('token'));
  const env = process.env.REACT_APP_SERVER;
  if (!token) {
    return <Auth setToken={setToken} environment={env}/>
  }
return (
  <>

    <Router>
    <div className='z-50'> 
        <NavBar />
      </div>
      <div>
        <Routes>
          <Route path="*" element={<div>404</div>}/>
          <Route path="/scores" element={<Score environment={env} />}/>
          <Route path="/medi" element={<Medi environment={env}/>}/>
          <Route path="/blog" element={<Blog environment={env}/>}/>
          <Route path="/blogcreate" element={<Blogcreate environment={env}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path="/" element={<Home />}/>
          <Route path="/blog/:blogid" element={<Blogview environment={env}/>}/>
        </Routes>
      </div>

     </Router>
     
    </>

  );
}

export default App;
