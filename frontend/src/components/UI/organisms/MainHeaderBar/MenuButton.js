import React, { Component } from 'react';
import HeaderMenuBtnImg from '../../image/headerMenuBtn.svg';

class MenuButton extends Component {
  render() {
    return (
      <div className="MainHeaderBar-MenuButton">
        <img src={HeaderMenuBtnImg} alt="HeaderMenu" onClick={this.props.onClick}></img>
      </div>
    );
  }
}

export default MenuButton;
