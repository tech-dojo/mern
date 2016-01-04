import React from 'react';
import { Link } from 'react-router';
import ArticleStore from './../../stores/ArticleStore.jsx';
import {Grid, Row, Col, Panel, Pagination,Button, Well, Label} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

function getArticle() {
    return {article: ArticleStore.getArticle()}
}

class ViewArticle extends React.Component {
  constructor(props, context){
    super(props, context);
    ArticleStore.fetchArticle(props.params.id);
    console.log ('ID' + props.params.id)
    this.props = props;
    ArticleStore.fetchArticleList();
    this.state = {};
    this.state.article = {};
    this._onChange = this._onChange.bind( this );
  }


  componentWillMount() {
    ArticleStore.onChange(this._onChange);
  }
  componentWillUnmount() {
    ArticleStore.removeChangeListener(this._onChange);
  }
  _onChange() {
    this.setState( getArticle());
  }
  render(){
          var article = this.state.article;
          console.log ('Get Article ViewArticle' + getArticle());

  		return (
        <div>
          <h1>{article.title}</h1>
          <hr></hr>
          <h3>{article.content}</h3>
        </div>

      )
    }
}

export default ViewArticle;
