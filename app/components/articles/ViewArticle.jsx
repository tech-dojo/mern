import React from 'react';
import ArticleStore from './../../stores/ArticleStore.jsx';
import {
  Grid,
  Row,
  Col,
  Button
} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import auth from './../../services/Authentication';
import ViewArticleChild from './ViewArticleChild.jsx';

function getArticle() {
  return { article: ArticleStore.getArticle() };
}

class ViewArticle extends React.Component {
  constructor(props, context) {
    super(props, context);
    ArticleStore.fetchArticle(props.params.id);
    this.state = {};
    this.state.article = {};
    this.state.article.user = {};
    this.state.article.user._id = '';
    this.state.userId = auth.getUserId();
    this._onChange = this._onChange.bind(this);
    this.deleteArticle = this.deleteArticle.bind(this);
    this.router = context.router;
  }

  componentWillMount() {
    ArticleStore.onChange(this._onChange);
  }

  componentWillUnmount() {
    ArticleStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(getArticle());
  }

  deleteArticle(articleId) {
    ArticleStore.deleteArticle(articleId, this.router);
  }

  render() {
    return (
    <ViewArticleChild userId={this.state.userId} articleId= {this.props.params.id}
       article = {this.state.article} deleteArticle = {this.deleteArticle} />
    );
  }
}

ViewArticle.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default ViewArticle;
