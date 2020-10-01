import React, { Component } from 'react';

class MenuContent extends Component {
  render() {
    return (
      <div className="MainHeaderMenu-MenuContent">
        <a href={this.props.MenuLink}>{this.props.MenuName}</a>
      </div>
    );
  }
}
export default MenuContent;