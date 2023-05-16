import React, { useEffect, useState } from "react";

const PostBody = ({ id }) => {
  const [post, setPost] = useState({});
  useEffect(() => {
    async function getPost(id) {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const data = await res.json();
      setPost(data);
    }
    getPost(id);
  }, [id]);
  return (
    <div className="mt-16 flex flex-col gap-3">
      <h1 className="font-bold text-3xl uppercase">{post.title}</h1>
      <div className="flex gap-2  items-center">
        <img
          src="../src/assets/avatar.png"
          alt="user icon"
        />
        <div>
          <h2 className="text-xl font-bold">User {post.userId}</h2>
          <p className="text-gray-600">5h ago</p>
        </div>
      </div>
      <p className="mt-6">{post.body}</p>
    </div>
  );
};

export default PostBody;
