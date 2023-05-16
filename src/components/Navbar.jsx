import React from "react";
import { useState, useEffect } from "react";
import PostLink from "./Navbar/PostLink";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { Search } from "@mui/icons-material";
const Navbar = ({ selectedId }) => {
  const [posts, setPosts] = useState([]);
  const [searchContent, setSearchContent] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      const dataSliced = data.slice(0, 8); // Prendo solo i primi 8 post
      setPosts(dataSliced);
    }
    getPosts();
  }, []);

  // Con questa funzione cerco i post che contengono la stringa inserita nella barra di ricerca e li salvo in searchResult
  // La funzione viene chiamata quando viene cliccato il bottone di ricerca
  // Tramite la funzione filter() vengono filtrati i post che contengono la stringa inserita nella barra di ricerca in base al contenuto del body
  // con la funzione includes() che restituisce true se la stringa inserita è contenuta nel body del post
  // Il risultato della funzione filter() viene salvato in searchResult

  function searchPostByContent(searchContent) { // in ingresso prende la stringa inserita nella barra di ricerca (searchContent)
    const postFounded = searchContent === "" ? [] : posts.filter((post) => // se la stringa inserita è vuota allora non viene filtrato nulla
      post.body.includes(searchContent) // altrimenti vengono filtrati i post che contengono la stringa inserita
    );
    setSearchResult(postFounded);
  }

  return (
    <nav className="min-h-screen border-r w-1/6 p-6">
      <ul>
        <li>
          <Link to="/">
            <HomeIcon fontSize="small" /> Home
          </Link>
        </li>
        <div id="nav-searchbar">
          <input
            type="text"
            placeholder="Search here..."
            className="mt-4 py-2 px-4 rounded-full"
            onChange={(e) => setSearchContent(e.target.value)}
          />
          <button
            className="bg-primary hover:bg-primaryhover text-white p-2 rounded-full ml-3"
            onClick={() => searchPostByContent(searchContent)}
          >
            <Search />
          </button>
        </div>
        {searchResult.length > 0 ? (
          <div className="mt-14">
            <p className="mb-5">Search Result</p>
            {searchResult.map((post) => (
              <PostLink key={post.id} id={post.id} selectedId={selectedId} />
            ))}
          </div>
        ) : (
          ""
        )}

        <p className="mt-14">Posts</p>
        {posts.map((post) => (
          <PostLink key={post.id} id={post.id} selectedId={selectedId} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
