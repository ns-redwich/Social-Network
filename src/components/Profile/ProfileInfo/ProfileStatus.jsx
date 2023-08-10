import React from "react";
import styles from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  deactivateEditMode() {
    this.setState({
      editMode: false,
    });
    this.props.updateProfileStatus(this.state.status);
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  render() {
    return (
      <div className={styles.statusWrapper}>
        {!this.state.editMode && (
          <p onDoubleClick={this.activateEditMode} className={styles.status}>
            {this.props.status || "- - - - -"}
          </p>
        )}
        {this.state.editMode && (
          <input
            onChange={this.onStatusChange}
            autoFocus={true}
            onBlur={this.deactivateEditMode.bind(this)}
            value={this.state.status}
          />
        )}
      </div>
    );
  }
}

export default ProfileStatus;
