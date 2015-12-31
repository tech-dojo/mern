
import React from 'react';
import {Jumbotron, Grid, Row, Col, Carousel, CarouselItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';


class Home extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {};
    this._onChange = this._onChange.bind( this );
  }
  componentWillMount() {
  console.log('Home Executed');
  }
  componentWillUnmount() {
  }
  _onChange() {
  }

  render(){

    return (
      <div>Hello Home</div>

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
