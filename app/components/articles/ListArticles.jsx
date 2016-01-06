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
    console.log(getArticleList());
    return (
    <div>
      <Grid>
          <Row className="productList">
            {articles.map((article) => {
              return(
                <Link
                  key={article._id}
                  to={`/articles/${article._id}`}ß>
                  <Col md={3} lg={3} sm={4} xs={6} className="products">
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
  //
  // ArticleList.contextTypes = {
  //   data: React.PropTypes.oneOfType([
  //     React.PropTypes.object,
  //     React.PropTypes.array
  //   ]).isRequired
  // };

  export default ArticleList;
