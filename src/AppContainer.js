import "./App.css";
import { connect } from "react-redux";
import React, { Component } from "react";
import App from "./App";
import { initializeApp } from "./redux/reducers/appReducer";

class AppContainer extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if(!this.props.initialized) {
      return <div className="preloaderMain">
        <img src="/preloader.svg" />
      </div>;
    }
    return <App />;
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default connect(mapStateToProps, { initializeApp })(AppContainer);
