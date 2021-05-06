import React, { Component } from 'react'
import {MenuItems} from './MenuItems'
import '../Navbar.css'

class Navbar extends Component {
  render() {
    return(
      <nav className = "NavbarItems">
        <h1 className = "navbar-logo">Logo</h1>
        <div className = "menuItems">
          {MenuItems.map((item, index) => {
            return(
              <li key = {index}>
                <a className = {item.cName} href = {item.url}>
                  {item.title}
                </a>
              </li>
            )
          })}
        </div>
      </nav>
    )
  }
}

export default Navbar;