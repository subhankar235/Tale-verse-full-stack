import React from 'react'
import Navbar from '../components/Navbar';
import Header from '../components/header';
import BlogList from '../components/bloglist';
import NewsLetter   from "../components/newsLetter";

import Footer from '../components/footer';
const Home=()=>{
  return(
    <>
   <Navbar/>
   <Header/>
   <BlogList/>
   <NewsLetter/>
   <Footer/>
    </>
  )
}

export default Home;