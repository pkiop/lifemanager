import React, { Component } from 'react';
import '../MainHeaderBar.scss';
class MenuButton extends Component {
  render() {
    return (
      <div className="MainHeaderBar-MenuButton">
        <button>선택</button>  
      </div>
    );
  }
}

export default MenuButton;