
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
                <img className="compImg" src="static/images/mongodb.png"/>
                <img className="compImg expressLogo" src="static/images/express.png"/>
                <img className="compImg" src="static/images/react.png"/>
                <img className="compImg" src="static/images/node.png"/>
              </div>
              <br/>
              <h3>version 0.0.1</h3>
              <br/>
              <p><Button bsSize="large" bsStyle="primary">Documentation</Button> <Button bsSize="large" bsStyle="success">View on GitHub</Button></p>
              <br/>
              <a>Improve Documentation</a> / <a>Contribute on GitHub</a>
            </Jumbotron>

        </Col>
      </Row>
      <Row>
        <Col md={6} mdPush={3} mdPull={3}>
          <hr/>
          <Well>
            <h3 class="text-center header_color">Usage Instructions</h3>

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
