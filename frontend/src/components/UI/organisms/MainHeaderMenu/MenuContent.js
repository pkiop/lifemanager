import React, { Component } from 'react';

class MenuContent extends Component {
  render() {
    const containHiddenInfoClassName = `MainHeaderMenu-MenuContent${this.props.isClicked ? '' : ' hidden2'}`;
    return (
      <div className={containHiddenInfoClassName}>
        <a href={this.props.MenuLink}>{this.props.MenuName}</a>
      </div>
    );
  }
}
export default MenuContent;
