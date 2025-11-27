import React from "react";

const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center text-gray-900 py-16 px-6 space-y-6 bg-transparent">
      <h1 className="text-3xl md:text-5xl font-bold">Never Miss a Blog!</h1>
      <p className="text-base md:text-lg text-gray-600 max-w-md mx-auto">
        Subscribe to get the latest blogs, new tech, and exclusive news.
      </p>

     <form className="flex items-center justify-center gap-0 p-6 rounded-lg shadow-md w-full max-w-4xl">
  <input
    type="email"
    placeholder="Enter your email id"
    required
    className="flex-1 px-4 py-2 text-gray-800 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300 placeholder-gray-500"
  />
  <button
    type="submit"
    className="md:px-12 px-8 py-2 text-white bg-blue-500/80 hover:bg-blue-600 transition-all cursor-pointer rounded-r-md"
  >
    Subscribe
  </button>
</form>


    </div>
  );
};

export default NewsLetter;
