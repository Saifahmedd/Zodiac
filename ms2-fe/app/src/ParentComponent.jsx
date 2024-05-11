// ParentComponent.js

import React, { useState } from 'react';
import Post from './Post';
import ViewOrg from './ViewOrg';

const ParentComponent = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div>
      <Post addPost={addPost} />
      <ViewOrg posts={posts} />
    </div>
  );
};

export default ParentComponent;