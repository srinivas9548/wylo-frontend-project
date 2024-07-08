import React from 'react';
import './index.css';

const PostItem = ({ post, onEdit }) => {
  return (
    <div className="post-item">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <button onClick={() => onEdit(post.id)}>Edit</button>
    </div>
  );
};

export default PostItem;
