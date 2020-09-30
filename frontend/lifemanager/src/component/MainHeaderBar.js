import React, { Component } from 'react';
import './MainHeaderBar.scss';
import LifemanagerMainLogo from '../image/LifemanagerMainLogo.png';
import CentorClock from './MainHeaderBar/CentorClock';
import MenuButton from './MainHeaderBar/MenuButton';


class MainHeaderBar extends Component {
  render() {
    return (
      <div className="MainHeaderBar">
        <img className="MainHeaderBar-logo" src={LifemanagerMainLogo} alt="logo"></img>
        <CentorClock></CentorClock>
        <MenuButton></MenuButton>
      </div>
    );
  }
}

export default MainHeaderBar;