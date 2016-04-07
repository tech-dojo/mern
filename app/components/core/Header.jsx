import React from 'react';
import { Link } from 'react-router';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap';
import auth from './../../services/Authentication';
import UserStore from './../../stores/UserStore.jsx';

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
    this.state.loggedIn = auth.loggedIn();
    this.state.userID = '';
    this.state.username = '';
    this.state.userID = auth.getUserId();
    this.state.username = auth.getUserName();
    this.navClick = this.navClick.bind(this);
    this.collapse = this.collapse.bind(this);
    this.updateAuth = this.updateAuth.bind(this);
    this.router = context.router;
  }

  navClick() {
    this.setState({ expand:false });
  }

  collapse(expanded) {
    this.setState({ expand: expanded });
  }

  updateAuth(loggedIn, path) {
    this.setState({ loggedIn: loggedIn });
    this.setState({userID: auth.getUserId()});
    this.setState({username: auth.getUserName()});
    console.log(loggedIn);
    console.log(path);
    if (loggedIn && path == 'signin') {
      this.router.push('/');
    }
  }

  componentWillMount() {
    auth.onChange = this.updateAuth;
  }

  render() {
    return (
      <Navbar
        inverse
        className="customNav"
        expanded={this.state.expand}
        onToggle={this.collapse}>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/"><img className="brand_logo" src="static/images/mern.png"/>
             A React framework</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight onClick={this.navClick}>
            <IndexLinkContainer to="/">
              <NavItem eventKey={1}>Home</NavItem>
            </IndexLinkContainer>

            <NavDropdown
              eventKey={2}
              title="Articles"
              id="nav-dropdown">
              {this.state.loggedIn && (
                <LinkContainer to="/articles/create">
                  <MenuItem eventKey="2.1">
                    Create Article
                  </MenuItem>
                </LinkContainer>
              )}
              <LinkContainer to="/articles">
                <MenuItem eventKey="2.2">
                  Show All Articles
                </MenuItem>
              </LinkContainer>
            </NavDropdown>

            {!this.state.loggedIn ? (
              <LinkContainer to="/signin">
                <MenuItem>
                  Sign In
                </MenuItem>
              </LinkContainer>
            ) : (
              <NavDropdown
                eventKey={3}
                title={this.state.username}
                id="nav-dropdown">

                <LinkContainer to={`/users/edit/${this.state.userID}`}>
                  <MenuItem eventKey="3.1">
                    Edit Profile
                  </MenuItem>
                </LinkContainer>

                <LinkContainer to="/signout">
                  <MenuItem eventKey="3.2">
                    Sign Out
                  </MenuItem>
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
    );
  }
}

Header.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Header;
