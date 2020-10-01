import React, { Component } from 'react';
import MenuContent from './MenuContent';

class Menu extends Component {

  state = {
    MenuList: [
      {
        MenuName: '1번메뉴',
        MenuLink: '#',
      },
      {
        MenuName: '2번메뉴',
        MenuLink: '#',
      },
      {
        MenuName: '3번메뉴',
        MenuLink: '#',
      },
      {
        MenuName: '4번메뉴',
        MenuLink: '#',
      },
    ]
  };

  id = 0;

  render() {
    const list = this.state.MenuList.map(el => {
      return <MenuContent 
        MenuName = {el.MenuName}
        MenuLink = {el.MenuLink}
        key = {this.id++}
      />
    })

    return (
      <div className="MainHeaderMenu">
        {list}
      </div>
    );
  }
}

export default Menu;