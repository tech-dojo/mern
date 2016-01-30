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
    ArticleStore.fetchArticleList();
    this.state = {};
    this.state.articles = [];
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
    var articles = this.state.articles;
    return (
    <div className="marginBottom">
      <Grid>
          <Row className="productList">
            <h1>Articles</h1>
            <hr></hr>
            {articles.map((article) => {
              return(
                <Link
                  key={article._id}
                  to={`/articles/${article._id}`}>
                  <Col md={12} lg={12} sm={12} xs={12} className="products">
                    <Panel header={article.title}>
                      {article.content}

                    </Panel>
                  </Col>
                </Link>
              )})}
            </Row>
          </Grid>
    </div>
      )
    }
  }
 export default ArticleList;
