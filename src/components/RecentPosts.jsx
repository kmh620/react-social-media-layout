import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

const lineColor = {
  borderColor: '#303030'
}
function RecentPosts(props) {
  function like(id) {
    props.likePost(id)
  }
  console.log(props);
  return (
    <div>
      {props.postList.map((post, index) =>
        <div>
          <Post
            image={post.image}
            username={post.username}
            content={post.content}
            handle={post.handle}
            likes={post.likes}
            id={post.id}
            />
          <button onClick={() => like(post.id)}>like</button>
          <hr style ={lineColor}/>
        </div>
      )}
    </div>
  )
  RecentPosts.propTypes = {
    likePost: PropTypes.func,
    postList: PropTypes.array
  }
}
export default RecentPosts;
