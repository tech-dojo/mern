import React from 'react';
import { Link } from 'react-router';
import { Nav, Navbar, NavItem, NavDropdown,MenuItem } from 'react-bootstrap';
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap';

class Header extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state= {};
    this.state.expand = false;
    this.navClick = this.navClick.bind(this);
    this.collapse = this.collapse.bind(this);
  }
  navClick(){
    this.setState({expand:false});
  }
  collapse(expanded){
    this.setState({expand: expanded})
  }

  render(){
    return (
      <Navbar
        inverse
        className="customNav"
        expanded={this.state.expand}
        onToggle={this.collapse}>
        <Navbar.Header>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight onClick={this.navClick}>
            <IndexLinkContainer to="/">
              <NavItem eventKey={1}>Home</NavItem>
            </IndexLinkContainer>
            <LinkContainer to="/articles">
              <NavItem eventKey={2}>Articles</NavItem>
            </LinkContainer>
            <NavDropdown eventKey={4} title="Articles" id="nav-dropdown">
              <LinkContainer to="/articles">
                <MenuItem eventKey="4.1">Show all articles</MenuItem>
              </LinkContainer>

        <MenuItem eventKey="4.2">Another action</MenuItem>
        <MenuItem eventKey="4.3">Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="4.4">Separated link</MenuItem>
      </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header;
