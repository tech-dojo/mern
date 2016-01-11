import React from 'react';
import { Link } from 'react-router';
import { Nav, Navbar, NavItem, NavDropdown,MenuItem } from 'react-bootstrap';
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap';
import auth from './../../services/Authentication';


class Header extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state= {};
this.state.loggedIn = auth.loggedIn();
this.state.userID = '';
this.state= getUserID();
  //  this.state.expand = false;
    //this.history = props.history;

    console.log(this.state.userID);
    this.navClick = this.navClick.bind(this);
    this.collapse = this.collapse.bind(this);
     this.updateAuth = this.updateAuth.bind(this);
  }
  navClick(){
    this.setState({expand:false});
  }
  collapse(expanded){
    this.setState({expand: expanded})
  }

  updateAuth(loggedIn) {
    this.setState({loggedIn: loggedIn});
    if(loggedIn){
      console.log(this.props.history);
      this.props.history.pushState(null,'/');
  }
}
  componentWillMount() {
    auth.onChange = this.updateAuth;
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

            <NavDropdown eventKey={2} title="Articles" id="nav-dropdown">
                {this.state.loggedIn &&(
                <LinkContainer to="/articles/create">
                <MenuItem eventKey="2.1">Create Article</MenuItem>
              </LinkContainer>
            )}
                <LinkContainer to="/articles">
          <MenuItem eventKey="2.2">Show All Articles</MenuItem>
      </LinkContainer>
      </NavDropdown>

      {!this.state.loggedIn ? (
              <LinkContainer to="/signin">
                <MenuItem>
                    Sign In
                </MenuItem>
              </LinkContainer>
            ):(
              <NavDropdown eventKey={3} title="Display User" id="nav-dropdown">

                  <LinkContainer to="/articles/create">
                  <MenuItem eventKey="3.1">Edit Profile</MenuItem>
                </LinkContainer>

                  <LinkContainer to="/signout">
             <MenuItem eventKey="3.2">Sign Out</MenuItem>
             </LinkContainer>
             </NavDropdown>
            )}
            {!this.state.loggedIn &&
               <LinkContainer to="/signup">
                 <MenuItem>
                     Sign Up
                 </MenuItem>
               </LinkContainer>
             }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header;
