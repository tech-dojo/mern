import React from 'react';
import { Link } from 'react-router';
import ArticleStore from './../../stores/ArticleStore.jsx';
import {Grid, Row, Col, Panel, Pagination,Button, Well, Label} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import auth from './../../services/Authentication';

function getArticle() {
    return {article: ArticleStore.getArticle()}
}

class ViewArticle extends React.Component {
  constructor(props, context){
    super(props, context);
    ArticleStore.fetchArticle(props.params.id);
    this.state = {};
    this.state.article = {};
    this.state.loggedIn = auth.loggedIn();
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

     ArticleStore.deleteArticle(this.state.articleID, this.props.history);

  }

  render(){
      var article = this.state.article;

  		return (
        <Grid className="marginBottom">
          <Row>
        <Col md={12} lg={12} sm={12} xs={12}>
          <h1>{article.title}</h1>
          <hr></hr>
          </Col>
          <Col md={8} lg={8} sm={8} xs={8}>
          <h3>{article.content}</h3>
        </Col>
        <Col md={4} lg={4} sm={4} xs={4}>
          {this.state.loggedIn && <div className="pull-right">
            <LinkContainer className="editBtnCSS" to={`/articles/edit/${article._id}`}><Button  bsStyle="primary">Edit</Button></LinkContainer>
            <Button onClick={this.deleteArticle} bsStyle="danger">Delete</Button>
          </div>
          }
      </Col>
         </Row>
      </Grid>
      )
    }
}

export default ViewArticle;
