import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

const lineColor = {
  borderColor: '#303030'
}
let details = false;
class RecentPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: false
    };
  }
  like(id) {
    this.props.likePost(id)
  }
  disLike(id) {
    this.props.disLikePost(id)
  }

  showDetails(id) {
    this.props.showPostDetails(id);
  }
  render() {
     const classes = this.props;
     const that = this;


    return (
      <div>
        {classes.postList.map((post, index) =>
          <div>
            <Post
              image={post.image}
              username={post.username}
              content={post.content}
              handle={post.handle}
              likes={post.likes}
              details={false}
              id={post.id}
              onGetDetails={this.showDetails}
              />
            <button onClick={() => this.like(post.id)}>like</button>
            <button onClick={() => this.disLike(post.id)}>dis like</button>
            <hr style ={lineColor}/>

          </div>
        )}
      </div>

    )
    RecentPosts.propTypes = {
      classes: PropTypes.object,
      likePost: PropTypes.func,
      disLikePost: PropTypes.func,
      postList: PropTypes.array,
      showPostDetails: PropTypes.func
    }
  }
}
export default RecentPosts;
