import React from 'react'

const PostComment = ({user, comment}) => {
  return (
    <div className='mt-4 w-[50%] bg-primary p-3 rounded-lg'>
        <div className='flex items-center gap-2 mb-2'>
            <img src="../src/assets/avatar.png" alt="user icon" />
            <h4 className='font-bold text-white'>{user}</h4>
        </div>
        <p className='text-gray-200'>{comment}</p>
    </div>
  )
}

export default PostComment