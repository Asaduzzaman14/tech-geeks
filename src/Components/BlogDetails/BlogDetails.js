// import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BlogContext } from "../../App";
import "./BlogDetails.css";
import { BsChevronLeft } from 'react-icons/bs'
import { useContext, useEffect, useState } from "react";
import { logRoles } from "@testing-library/react";

const BlogDetails = () => {
  const { id } = useParams();
  const navigat = useNavigate()
  const [blogs] = useContext(BlogContext)

  const blog = blogs.find(blog => blog._id == id)
  console.log(blog);
  return (
    <>

      <div className='header-gradient' />
      <div>
        <button className='back-button' onClick={() => navigat(-1)}>
          <BsChevronLeft />
          <p>Back</p>
        </button>
        <div className="blog-details">
          <div className="blog-image">
            <img src={blog.imageURL} alt="" />
          </div>
          <h1>{blog?.title}</h1>
          <p>{blog?.blog}</p>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
