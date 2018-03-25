import React from 'react';
import API from 'api';

class Post extends React.Component {

  constructor(props) {
    super(props);
    this.state = {post: {}};
  }

  componentDidMount() {
    new API().get(`posts/${this.props.id}`)
    .then(data => this.setState({post: data}))
    .catch(error => console.log(error));
  }

  render() {
    var post = this.state.post;

    if (post._id) {
      return (
        <div>
          <h2>{post.title}</h2>
          <div dangerouslySetInnerHTML={{__html: post.content}}></div>
        </div>
      );
    }

    return '';
  }
}

export default Post;
