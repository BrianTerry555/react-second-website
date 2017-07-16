import React from "react";
import { DropdownButton, MenuItem } from "react-bootstrap";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/Logo">WebSiteName</a>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li className="active"><a href="/home">Home</a></li>
            <li><a href="/Contact">Contact</a></li>
            <li><a href="/Blog">Blog</a></li>
            <li>
              <DropdownButton title="Dropdown" id="bg-nested-dropdown">
                <MenuItem eventKey="1">Dropdown link</MenuItem>
                <MenuItem eventKey="2">Dropdown link</MenuItem>
              </DropdownButton>
            </li>
          </ul>
        </div>
      </nav>

    )
  }
}

export default Navbar;
