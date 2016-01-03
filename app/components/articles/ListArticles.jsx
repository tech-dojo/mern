
import React from 'react';
import { Link } from 'react-router';
import ArticleStore from './../../stores/ArticleStore.jsx';
import {Grid, Row, Col, Panel, Pagination,Button, Well, Label} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

function getArticleList(){
  return {articles: ArticleStore.getArticleList()}
}

class ArticleList extends React.Component {
  constructor(props, context){
    super(props, context);
    this.props = props;
    this.history = props.history;
    ArticleStore.fetchArticleList();
    this.state = {};
    this.state.articles = context.data;
    this._onChange = this._onChange.bind( this );
  }


  componentWillMount() {
    ArticleStore.onChange(this._onChange);
  }
  componentWillUnmount() {
    ArticleStore.removeChangeListener(this._onChange);
  }
  _onChange() {
    this.setState( getArticleList());
  }

  render(){
console.log(getArticleList());
    return (
    <div><h1>All Articles</h1></div>
      )
    }

  }

  ArticleList.contextTypes = {
    data: React.PropTypes.oneOfType([
      React.PropTypes.object,
      React.PropTypes.array
    ]).isRequired
  };

  export default ArticleList;
