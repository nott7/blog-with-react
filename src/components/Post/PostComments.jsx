import React, {useState, useEffect} from 'react'
import PostComment from './PostComments/PostComment';

const PostComments = ({id}) => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        async function getComments(id) {
          const resComment = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${id}/comments`
          );
          const dataComment = await resComment.json();
          setComments(dataComment);
        }
        getComments(id);
      }, [id]);
  return (
    <div className='mt-10'>
        <h1 className="text-lg font-bold">Comments</h1>
        {comments.map((comment) => (
            <PostComment key={comment.id} user={comment.email} comment={comment.body}/>
        ))}
    </div>
  )
}

export default PostComments