import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="max-w-3xl flex flex-col justify-center items-center mx-auto"
      id="home"
    >
      <h1 className="font-bold text-primary">GitHub Discussion</h1>
      <h2 className="font-bold text-7xl text-text text-center my-6">
        The home for developer communities
      </h2>
      <p className="text-gray-500 text-center">
        Ask questions, share ideas, and build connections with each other - all
        right next to your code. GitHub Discussions enables healthy and
        productive software collaboration.
      </p>
      <Link to="/posts/1">
        <button className="bg-primary px-4 py-2 mt-6 text-white rounded-lg hover:bg-primaryhover">
          Enable discussions &gt;
        </button>
      </Link>
    </div>
  );
};

export default Home;
