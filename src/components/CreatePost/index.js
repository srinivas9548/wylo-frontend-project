import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const CreatePost = ({ posts, setPosts, editingPost, setEditingPost }) => {
  const [title, setTitle] = useState(editingPost ? editingPost.title : '');
  const [content, setContent] = useState(editingPost ? editingPost.content : '');
  const navigate = useNavigate();

  useEffect(() => {
    if (editingPost) {
      setTitle(editingPost.title);
      setContent(editingPost.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [editingPost]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingPost) {
      const updatedPosts = posts.map((post) =>
        post.id === editingPost.id ? { ...post, title, content } : post
      );
      setPosts(updatedPosts);
      setEditingPost(null);
    } else {
      const newPost = { id: Date.now(), title, content };
      setPosts([...posts, newPost]);
    }

    navigate('/');
  };

  return (
    <div className="create-post">
      <h2>{editingPost ? 'Edit Post' : 'Create Post'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          required
        />
        <button type="submit" className='button'>{editingPost ? 'Update Post' : 'Create Post'}</button>
      </form>
    </div>
  );
};

export default CreatePost;
