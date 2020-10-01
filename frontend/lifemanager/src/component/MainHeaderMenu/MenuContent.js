import React, { Component } from 'react';

class MenuContent extends Component {
  render() {
    return (
      <div className="MainHeaderBar-MenuContent">
        <a href={this.props.MenuLink}>{this.props.MenuName}</a>
      </div>
    );
  }
}
export default MenuContent;