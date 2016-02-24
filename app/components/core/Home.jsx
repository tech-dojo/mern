
import React from 'react';
import {Jumbotron, Grid, Row, Col, Button, Well} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';


class Home extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {};
  }
  render(){

    return (
      <Grid className="marginBottom">
        <Row>
          <Col md={12}>
            <Jumbotron className="mainContent">
              <img className="mainImg" src="static/images/mern.gif"/>
              <div>
                <a href="https://www.mongodb.org/" target="_blank"><img className="compImg" src="static/images/mongodb.png"/></a>
                <a href="http://expressjs.com/" target="_blank"><img className="compImg expressLogo" src="static/images/express.png"/></a>
                <a href="https://facebook.github.io/react/" target="_blank"><img className="compImg" src="static/images/react.png"/></a>
                <a href="https://nodejs.org/en/" target="_blank"><img className="compImg" src="static/images/node.png"/></a>
              </div>
              <h3 className="description">React Framework for Fullstack JavaScript Web Applications</h3>
              <h4>version 0.0.1</h4>
              <br/>
              <p>
                <LinkContainer className="callToAction" to="http://merndoc.tech-dojo.org/doc.html" target="_blank"><Button bsSize="large" bsStyle="primary">Documentation</Button></LinkContainer>
                <LinkContainer className="callToAction" to="https://github.com/tech-dojo/mern" target="_blank"><Button bsSize="large" bsStyle="success">View on GitHub</Button></LinkContainer></p>
              <br/>
              <a href="https://github.com/tech-dojo/mern-doc" target="_blank">Improve Documentation</a> | <a href="https://github.com/tech-dojo/mern" target="_blank">Contribute on GitHub</a>
            </Jumbotron>

        </Col>
      </Row>
      <Row>
        <Col md={6} mdPush={3} mdPull={3}>
          <hr/>
          <Well>
            <h3 className="text-center header_color">Usage Instructions</h3>

          <ol>
            <li>Clone the repository on GitHub</li>
            <li>Make sure MongoDB, Node.js and NPM are installed</li>
            <li>Run `mongodb` in the background</li>
            <li>Install global dependencies with `npm install -g gulp react-tools browserify`</li>
            <li>Install dependencies with `npm install`</li>
            <li>Run app with `gulp serve`</li>
          </ol>
          </Well>
          <hr/>
        </Col>
      </Row>
    </Grid>
      )
    }
  }
  export default Home;
