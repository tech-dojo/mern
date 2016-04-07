import React from 'react';
import { Link } from 'react-router';
import ArticleStore from './../../stores/ArticleStore.jsx';
import {Grid, Row, Col, Panel, Pagination, Button, Well, Label} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import ListArticlesChild from './ListArticlesChild.jsx';

function getArticleList() {
  return { articles: ArticleStore.getArticleList() };
}

class ArticleList extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    ArticleStore.fetchArticleList();
    this.state = {};
    this.state.articles = [];
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    ArticleStore.onChange(this._onChange);
  }

  componentWillUnmount() {
    ArticleStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(getArticleList());
  }

  render() {
    return (
    <ListArticlesChild articles= {this.state.articles} />
  );
  }
  }
export default ArticleList;
