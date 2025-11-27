import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='mx-8 sm:mx-16 xl:mx-24 relative flex flex-col items-center justify-start min-h-[65vh]'>

      
      {/* Background gradient */}
      <img 
        src={assets.gradientBackground} 
        alt='' 
        className='absolute top-0 left-0 w-full h-full -z-10 opacity-60 object-cover'
      />

      {/* Move content 20% from top */}
      <div className='mt-[12vh] flex flex-col items-center gap-6'>
        {/* Tagline pill */}
        <div className='flex items-center gap-2 border border-blue-300 rounded-full px-4 py-2 bg-white/30 backdrop-blur-md text-sm font-medium text-blue-600 shadow-sm'>
          <p>New: AI feature integrated</p>
          <img src={assets.star_icon} className='w-3' alt="star" />
        </div>

        <h1 className="text-3xl sm:text-6xl font-semibold sm:leading-[1.2] text-gray-800 text-center">
  Your own <span className="text-blue-600">blogging</span>
   <br /> 
  
  
  <span className="">platform.</span>
</h1>

<p className="text-gray-600 text-sm sm:text-base mt-4 text-center font-semibold max-w-2xl mx-auto">
  Share your thoughts, ideas, and stories with the world — all in one simple, elegant platform built for writers.
</p>


<form className="flex items-center justify-center w-full max-w-xl mx-auto relative">
  <input 
    type="text" 
    placeholder="Search for blog..." 
    required 
    className="w-full px-4 py-2 pr-24 border border-gray-300 rounded-[0.7rem] focus:outline-none focus:ring-2 focus:ring-blue-400"
  />
  <button 
    type="submit" 
    className="absolute right-1 top-1 bottom-1 bg-blue-700 text-white px-5 rounded-[0.7rem] hover:bg-blue-800 hover:scale-105 transition-transform duration-200 "
  >
    Search
  </button>
</form>



      </div>
    </div>
  )
}

export default Header
