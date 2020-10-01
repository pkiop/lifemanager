import React, { Component } from 'react';
import MenuContent from './MenuContent';

class Menu extends Component {

  state = {
    MenuList: [
      {
        MenuName: 'A',
        MenuLink: '#',
      },
      {
        MenuName: 'B',
        MenuLink: '#',
      },
      {
        MenuName: 'C',
        MenuLink: '#',
      },
      {
        MenuName: 'D',
        MenuLink: '#',
      },
    ]
  }

  render() {
    const list = this.state.MenuList.map(el => {
      return <MenuContent className="MainHeaderBar-MenuContent"
        MenuName = {el.MenuName}
        MenuLink = {el.MenuLink}
      />
    })

    return (
      <div>
        {list}
      </div>
    );
  }
}

export default Menu;