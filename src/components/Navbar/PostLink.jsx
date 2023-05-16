import React from "react";
import { Link } from "react-router-dom";
import ForumIcon from '@mui/icons-material/Forum';

const PostLink = ({ id, selectedId }) => {
  return (
    <li key={id} className={id == selectedId ? "post-link selected" : "post-link"}>
      <Link to={`/posts/${id}`}><ForumIcon fontSize="small"/> Post {id}</Link>
    </li>
  );
};

export default PostLink;
