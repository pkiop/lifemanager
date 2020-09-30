import React, { Component } from 'react';
import './MainHeaderBar.scss';
import LifemanagerMainLogo from '../image/LifemanagerMainLogo.png';


class MainHeaderBar extends Component {
  render() {
    return (
      <div className="MainHeaderBar">
        <img className="MainHeaderBar-logo" src={LifemanagerMainLogo} alt="logo"></img>
        <div>
          this is header bar!  
        </div>      
      </div>
    );
  }
}

export default MainHeaderBar;