import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();
  const { _id, title, description, category, image } = blog;

  return (
    <div
      onClick={() => navigate(`/blog/${_id}`)}
      className="cursor-pointer bg-white border border-gray-100 rounded-2xl 
                 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 
                 flex flex-col overflow-hidden h-full"
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-44 object-cover"
      />

      {/* Content */}
      <div className="flex flex-col justify-between flex-grow p-4">
        <div>
          <span className="inline-block text-[11px] font-medium text-purple-600 bg-purple-100 
                           px-2.5 py-0.5 rounded-full">
            {category}
          </span>

          <h3 className="mt-2 text-base font-semibold text-gray-800 hover:text-purple-700 transition line-clamp-2">
            {title}
          </h3>

          <p
  className="mt-1.5 text-sm text-gray-500 line-clamp-2"
  dangerouslySetInnerHTML={{ __html: description.slice(0, 80) }}
></p>

        </div>
      </div>
    </div>
  );
};

export default BlogCard;
