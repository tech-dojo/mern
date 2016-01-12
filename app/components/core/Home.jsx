
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
      <h1>Hello Home</h1>

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
