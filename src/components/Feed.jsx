import React from 'react';
import AddPost from './AddPost';
import RecentPosts from './RecentPosts'

function Feed(){
  const feedStyle = {
    backgroundColor: '#303030',
    margin: '30',
    height: '100%',
    color: 'white',
    fontFamily: 'helvetica',
    padding: '10',
    borderStyle: 'solid',
    borderColor: 'rgba(255, 255, 255, .02)',
    borderRadius: '3px'
  }
  return (
    <div style={feedStyle}>
      <AddPost/>
      <RecentPosts/>
    </div>
  )
}

export default Feed;
