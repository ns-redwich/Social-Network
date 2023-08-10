import React from "react";
import { connect } from "react-redux";
import PostList from "./PostList";

let mapStateToProps = (state) => {
  return {
    postsD: state.profilePageD.postsD,
  };
};

const PostListContainer = connect(mapStateToProps)(PostList);

export default PostListContainer;
