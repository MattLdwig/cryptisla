import React, { Component } from "react";
import { Link } from "gatsby";
import UserLinks from "../UserLinks/UserLinks";
import OffCanvas from 'react-aria-offcanvas';
import "./Header.css";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  render() {
    const { config } = this.props;
    const url = config.menuLink;
    const isMobile = config.isMobile ? 'item visible' : 'item hidden';

    return (
        <nav id="menu">
        <ul className="primary-nav__items">
            <li className="item"><Link to={url[1].link}>👨‍🎓 GUIDES</Link></li>
            <li className="item"><Link to={url[2].link}>📈 TRADING</Link></li>
            <li className="item no-margin"><Link to={url[3].link}>🤝 BLOCKCHAIN</Link></li>
        </ul>
        </nav>
    );
  }
}

export default Navigation;
