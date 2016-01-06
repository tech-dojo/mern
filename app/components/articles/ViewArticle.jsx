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
    ArticleStore.fetchArticleList();
    this.state = {};
    this.state.article = {};
    this.state.articleID = this.props.params.id;
    this._onChange = this._onChange.bind( this );
    this.deleteArticle = this.deleteArticle.bind(this);
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

  deleteArticle() {

    console.log('asda');
     ArticleStore.deleteArticle(this.state.articleID, this.props.history);

  }

  render(){
          var article = this.state.article;
          console.log ('Get Article ViewArticle' + getArticle());

  		return (
        <div>

          <div className="pull-right">
            <LinkContainer to={`/articles/edit/${article._id}`}><Button  bsStyle="primary">Edit</Button></LinkContainer>
            <Button onClick={this.deleteArticle} bsStyle="danger">Delete</Button>
          </div>
        <div>
          <h1>{article.title}</h1>
          <hr></hr>
          <h3>{article.content}</h3>
        </div>

       </div>
      )
    }
}

export default ViewArticle;
