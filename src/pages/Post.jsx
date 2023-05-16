import React from "react";
import Navbar from "../components/navbar";
import { Link, useParams } from "react-router-dom";
import PostBody from "../components/Post/PostBody";
import PostComments from "../components/Post/PostComments";

const Post = () => {
  const { id } = useParams();
  

  return (
    <div className="flex h-full">
      <Navbar selectedId={id}/>
      <div className="w-5/6 p-6" id="post">
        <Link to="/">
          <h1 className="text-center text-4xl font-bold text-primary hover:text-primaryhover">
            GitHub Discussion
          </h1>
        </Link>
        <PostBody id={id} />
        <PostComments id={id} />
      </div>
    </div>
  );
};

export default Post;
