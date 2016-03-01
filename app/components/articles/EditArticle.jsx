import React from 'react';
import ArticleStore from './../../stores/ArticleStore.jsx';
import {Grid, Row, Col} from 'react-bootstrap';
import Form from './Form.jsx';

function getArticle() {
  return { EditArticle: ArticleStore.getArticle() };
}

class EditArticle extends React.Component {
    constructor(props) {
    super(props);
    this.state = {};
    this.history = props.history;
    ArticleStore.fetchArticle(props.params.id);
    this.state = getArticle();
    this.handleInputTitle = this.handleInputTitle.bind(this);
    this.handleInputContent = this.handleInputContent.bind(this);
    this._formSubmit = this._formSubmit.bind(this);
  }

  handleInputTitle(article) {
    this.setState({ Article: article });
  }

  handleInputContent(article) {
    this.setState({ Article: article });
  }

  _formSubmit(value) {
    ArticleStore.editArticle(value, value._id, this.history);
  }

  render() {
    return (
      <Grid className="marginBottom">
        <Row>
          <Col md={12}>
            <h2>
              <b>Edit Article</b>
            </h2>
            <hr></hr>
            <Form formSubmit={this._formSubmit}  Article={this.state.EditArticle}
              handleInputTitle={this.handleInputTitle}
             handleInputContent={this.handleInputContent} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default EditArticle;
