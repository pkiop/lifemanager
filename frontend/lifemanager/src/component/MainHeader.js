import React, { Component, Fragment } from 'react';
import './MainHeader.scss';
import LifemanagerMainLogo from '../image/LifemanagerMainLogo.png';
import CentorClock from './MainHeaderBar/CentorClock';
import MenuButton from './MainHeaderBar/MenuButton';
import Menu from './MainHeaderMenu/Menu';


class MainHeader extends Component {
  render() {
    return (
      <div className="MainHeader">
        <div className="MainHeaderBar">
          <img className="MainHeaderBar-logo" src={LifemanagerMainLogo} alt="logo"></img>
          <CentorClock></CentorClock>
          <MenuButton></MenuButton>
        </div>
        <Menu></Menu>
      </div>
    );
  }
}

export default MainHeader;