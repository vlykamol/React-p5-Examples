import React, { Component } from 'react'
import {MenuItems} from './MenuItems'
import '../cssStyles/Navbar.css'

class Navbar extends Component {
  state = {buttonClicked : false}

  handleClick = () => {
    this.setState({buttonClicked: !this.state.buttonClicked})
  }

  render() {
    return(
      <div className = "NavbarItems">
        <h1 className = "navbar-logo">Logo</h1>
        <div className = "menuButton" onClick = {this.handleClick}>
          <i className = {this.state.buttonClicked ?  'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <div className = "menuItems">
          <ul className = {this.state.buttonClicked ? 'menuList active' : 'menuList'}>
            {MenuItems.map((item, index) => {
              return(
                <li key = {index}>
                  <a className = {item.cName} href = {item.url}>
                    {item.title}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default Navbar