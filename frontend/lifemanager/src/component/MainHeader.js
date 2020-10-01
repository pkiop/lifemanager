import React, { Component  } from 'react';
import './MainHeader.scss';
import LifemanagerMainLogo from '../image/LifemanagerMainLogo.png';
import CentorClock from './MainHeaderBar/CentorClock';
import MenuButton from './MainHeaderBar/MenuButton';
import Menu from './MainHeaderMenu/Menu';


class MainHeader extends Component {

  state = {
    menuClicked: false
  }

  handleToggleMenuClicked = () => {
    this.setState({
      menuClicked: !this.state.menuClicked 
    })
  }
  
  render() {
    return (
      <div className="MainHeader">
        <div className="MainHeaderBar">
          <img className="MainHeaderBar-logo" src={LifemanagerMainLogo} alt="logo"></img>
          <CentorClock></CentorClock>
          <MenuButton ={this.handleToggleMenuClicked}></MenuButton>
        </div>
        {this.state.menuClicked ? <Menu></Menu> : ''}
      </div>
    );
  }
}

export default MainHeader;