
import React from 'react';
import {Jumbotron, Grid, Row, Col, Carousel, CarouselItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';


class Home extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {};
  }
  render(){

    return (
      <Grid>
        <Row>
          <h1>
            The React Framework
          </h1>
          <hr/>
          <Col md={3}></Col>
          <Col md={9}>
        <img className="commonCenter mainImg" src="static/images/logo1.png"/>
        <h4 className = "tagLine">Open-Source Full-Stack Solution For Web Applications</h4>
        </Col>
      </Row>
    </Grid>
      )
    }
  }
  Home.contextTypes = {
    data: React.PropTypes.oneOfType([
      React.PropTypes.object,
      React.PropTypes.array
    ]).isRequired
  };
  export default Home;
