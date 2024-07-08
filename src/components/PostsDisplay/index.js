import React from 'react';
import { useNavigate } from 'react-router-dom';
import PostItem from '../PostItem';
import './index.css';

const PostsDisplay = ({ posts, onEdit }) => {
  const navigate = useNavigate();

  const handleCreatePost = () => {
    navigate('/create');
  };

  return (
    <div className="posts-display">
      <h2>All Posts</h2>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} onEdit={onEdit} />
      ))}
      <button onClick={handleCreatePost}>Create Post</button>
    </div>
  );
};

export default PostsDisplay;
