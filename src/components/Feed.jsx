import React from 'react';
import AddPost from './AddPost';
import RecentPosts from './RecentPosts'

class Feed extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterPosts: [],
      details: false
    };
    this.handleAddingNewPost = this.handleAddingNewPost.bind(this);
    this.handleLikePost = this.handleLikePost.bind(this);
    this.handleDisLikedPost = this.handleDisLikedPost.bind(this);
    this.handlePostDetails = this.handlePostDetails.bind(this);
  }

  handleAddingNewPost(newPost) {
    let newMasterPosts = this.state.masterPosts.slice();
    newMasterPosts.push(newPost);
    this.setState({masterPosts: newMasterPosts});
  }

  handleLikePost(id){
    let posts = this.state.masterPosts.slice();
    posts.forEach(function(post){
      if (id === post.id) {

        post.likes += 1
        console.log(id)
      }
    })
    this.setState({masterPosts: posts});
  }
  handleDisLikedPost(id){
    let posts = this.state.masterPosts.slice();
    posts.forEach(function(post){
      if (id === post.id) {

        post.likes -= 1
        console.log(id)
      }
    })
    this.setState({masterPosts: posts});
  }
  handlePostDetails(id){
    let posts = this.state.masterPosts.slice();
    let username = null;
    posts.forEach(function(post){
      if (id === post.id) {
        console.log(post.username)
        username = post.username
      }
    })
    return username;
  }
  render() {
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
        <AddPost
          onNewPostCreation={this.handleAddingNewPost}
          />
        <RecentPosts
          disLikePost={this.handleDisLikedPost} likePost={this.handleLikePost}
          postList = {this.state.masterPosts}
          showPostDetails = {this.handlePostDetails}
          />
      </div>
    )
  }
}



export default Feed;
