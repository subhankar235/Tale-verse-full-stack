import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { blog_data, comments_data } from "../assets/assets";
import { assets } from "../assets/assets";
import Moment from "moment";



const Blog = () => {
  const { id } = useParams();

  
  const [comments, setComments] = useState([]);
  const fetchComments=async()=>{
    setComments(comments_data);
  }


  useEffect(()=>{
    fetchComments();
  },[])

  const [data, setData] = useState(null);

  const fetchBlogData = async () => {
    const data = blog_data.find((item) => item._id === id);
    setData(data);
  };


  const addComment=async(e)=>{
    e.preventDefault();
  }
  //to stop the rerendering--
  useEffect(() => {
    fetchBlogData();
  }, []);

  return data ? (
    <div className="relative">
      <img
        src={assets.gradientBackground}
        alt=""
        className="absolute -top-50 -z-1 opacity-60 "
      />
      <Navbar />

      <div className="text-center mt-24 text-gray-600">
        <p className="text-blue-600 py-4 font-semibold">
          Published on {Moment(data.createdAt).format("MMMM Do YYYY")}
        </p>

        <h1 className="text-2xl sm:text-5xl font-semibold  max-w-2xl mx-auto text-gray-800">
          {data.title}
        </h1>

        <h2 className="my-5 max-w-lg truncate mx-auto">{data.subTitle}</h2>

        <p className="mt-4 inline-block px-6 py-2 border border-[#A39CFF] text-[#5A4AF4] rounded-full text-sm font-semibold bg-blue-900/5">
          Michael Brown
        </p>
      </div>

      <div className="mx-7 max-w-5xl md:mx-auto my-4 mt-6">
        <img src={data.image} alt="" className="rounded-3xl mb-5" />
        <div
          className="rich-text max-w-3xl bold mx-auto"
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></div>



        {/* comment section-- */}--
        <div className="mt-14 mb-10 max-w-3xl mx-auto">
          <p className="font-semibold mb-3">Comments({comments.length})</p>

          <div>{comments.map((item,index)=>(
            <div key={index} className="relative max-w-xl p-4 rounded-lg 
             border border-blue-500/10 
             bg-blue-400/5 text-gray-700">


              <div className="flex items-center gap-2 mb-2">
                <img src={assets.user_icon} alt="" className="w-6"/>
                <p className="font-medium">{item.name}</p>
              </div>
              <p>{item.content}</p>
              <div className="absolute right-4 bottom-3 items-center gap-2 text-xs">{Moment(item.createdAt).fromNow()}</div>
            </div>

          ))}
          
          </div>


        </div>

{/* comment box */}
<div className="max-w-3xl mx-auto"> 


  <p className="font-semibold mb-4">Add your comment</p>
  <form onSubmit={addComment} className="flex flex-col items-start gap-4 max-w-lg mx-0 md:mx-auto">

    <input type="text" placeholder="Name"  required className="w-full p-2 border border-gray-300 rounded outline-none"/>

    <textarea className="w-full p-2 border border-gray-300 rounded outline-none h-48" required></textarea>
<button type="submit" className="px-6 py-2 bg-blue-800 text-white rounded hover:bg-blue-500 transition cursor-pointer">Submit</button>

  </form>
</div>





      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Blog;
