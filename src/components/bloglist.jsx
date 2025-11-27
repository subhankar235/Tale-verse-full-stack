//in blog list switching in other options and showing the cards--


import React, { useState } from 'react';
import { blogCategories,blog_data } from '../assets/assets.js';
import { motion } from "framer-motion";   
import Blogcard from './blogcard.jsx';

const BlogList = () => {
  const [menu, setMenu] = useState("All");

  return (
    <div>
      {/* Category list showing the names */}
      <div className="flex justify-center flex-wrap gap-4 sm:gap-5 my-6">
        {blogCategories.map((item) => (
          <motion.button
            whileTap={{ scale: 0.9 }} // optional animation
            onClick={() => setMenu(item)}
            key={item}
            className={`cursor-pointer px-4 py-2 rounded-full transition-all duration-200
              ${menu === item
                ? "bg-blue-700 text-white hover:bg-blue-500"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"}
            `}
          >
            {item}
          </motion.button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-4 sm:mx-16 xl:mx-40">
        {/* blog cards */}
  {blog_data.filter((blog)=>menu==="All"?true:blog.category===menu).map((blog)=><Blogcard  key={blog._id} blog={blog}/>)}

      </div>
    </div>
  );
};

export default BlogList;
