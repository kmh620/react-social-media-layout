import React from 'react';
import AddPost from './AddPost';
import RecentPosts from './RecentPosts'

class Feed extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterPosts: []
    };
    this.handleAddingNewPost = this.handleAddingNewPost.bind(this);
  }

  handleAddingNewPost(newPost) {
    let newMasterPosts = this.state.masterPosts.slice();
    newMasterPosts.push(newPost);
    this.setState({masterPosts: newMasterPosts});
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
        <AddPost onNewPostCreation={this.handleAddingNewPost}/>
        <RecentPosts postList = {this.state.masterPosts}/>
      </div>
    )
  }
}



export default Feed;
