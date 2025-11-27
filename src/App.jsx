import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Blog from './pages/blog.jsx';

import Home from './pages/Home';
const  App=()=>{
  return(
    <div>
      {/* <Home></Home>
      <Blog></Blog> */}
    <Routes>
       <Route path="/" element={<Home />} />
      <Route path='/blog/:id'  element={<Blog/>}/>
      <Route path='/home'  element={<Home/>}/>
    </Routes>
    </div>
  )
}
export default App;
