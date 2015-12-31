
import React from 'react';
import { Link } from 'react-router';
import {Grid, Row, Col, Panel, Pagination,Button, Well, Label} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';


class ArticleList extends React.Component {
  constructor(props, context){
    super(props, context);
    this.props = props;
    this.history = props.history;
    this.state = {};

  }

  componentWillReceiveProps(nextProps){
    //console.log("test props");
  }

  componentWillMount() {

  }
  componentWillUnmount() {

  }
  _onChange() {

  }

  render(){

    return (
    <div><h1>All Articles</h1></div>
      )
    }

  }


  export default ArticleList;
