import React, { Component } from 'react';
import '../MainHeaderBar.scss';
import HeaderMenuBtnImg from '../../image/headerMenuBtn.svg';
class MenuButton extends Component {
  render() {
    return (
      <div className="MainHeaderBar-MenuButton">
        <img src={HeaderMenuBtnImg} alt="HeaderMenu"></img>
      </div>
    );
  }
}

export default MenuButton;