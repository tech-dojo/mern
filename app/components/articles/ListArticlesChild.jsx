import React from 'react';
import {Link} from 'react-router';
import {
  Grid,
  Row,
  Col,
  Panel,
  Pagination,
  Button,
  Well,
  Label
} from 'react-bootstrap';

class ListArticlesChild extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.props = props;
  }

  render() {
    var articles = this.props.articles.map((article) => {
      return (
        <Link
          key={article._id}
          to={`/articles/${article._id}`}>
          <Col md={12} lg={12} sm={12} xs={12} className="products">
            <Panel header={article.title}>
              {article.content}

            </Panel>
          </Col>
        </Link>
    );});
    return (
      <div className="marginBottom">
        <Grid>
            <Row className="productList">
              <h1>Articles</h1>
              <hr></hr>
              {articles}
              </Row>
            </Grid>
      </div>
    );
  }
}
export default ListArticlesChild;
