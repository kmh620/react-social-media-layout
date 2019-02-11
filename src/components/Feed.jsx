import React from 'react';
import AddPost from './AddPost';
import RecentPosts from './RecentPosts'

function Feed(){
  const feedStyle = {
    borderStyle: 'solid'
  }
  return (
    <div style={feedStyle}>
      <AddPost/>
      <RecentPosts/>
    </div>
  )
}

export default Feed;
