import React from 'react';
import {
  Grid,
  Row,
  Col,
  Button
} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class ViewArticleChild extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.deleteArticle = this.deleteArticle.bind(this);
  }

  deleteArticle() {
    this.props.deleteArticle(this.props.articleId);
  }

  render() {
    var article = this.props.article;
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
            {this.props.userId == article.user._id && <div className="pull-right">
              <LinkContainer className="editBtnCSS" to={{pathname: `/articles/edit/${article._id}`}}>
                <Button bsStyle="primary">Edit</Button>
              </LinkContainer>
              <Button onClick={this.deleteArticle} bsStyle="danger">Delete</Button>
            </div>
}
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default ViewArticleChild;
