import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostsDisplay from './components/PostsDisplay';
import CreatePost from './components/CreatePost';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  const handleEdit = (id) => {
    const postToEdit = posts.find((post) => post.id === id);
    setEditingPost(postToEdit);
  };

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<PostsDisplay posts={posts} onEdit={handleEdit} />}
          />
          <Route
            path="/create"
            element={
              <CreatePost
                posts={posts}
                setPosts={setPosts}
                editingPost={editingPost}
                setEditingPost={setEditingPost}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
