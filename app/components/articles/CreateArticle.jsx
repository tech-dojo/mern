import React from 'react';
import ArticleStore from './../../stores/ArticleStore.jsx';
import {Grid, Row, Col} from 'react-bootstrap';
import Form from './Form.jsx';

class CreateArticle extends React.Component {
  constructor(props) {
    super(props);
    this.history = props.history;
    this.state = {};
    this._formSubmit = this._formSubmit.bind(this);
  }

  _formSubmit(value) {
    ArticleStore.addArticle(value, this.history);
  }

  render() {

    return (
      <Grid className="marginBottom">
        <Row>
          <Col md={12}>
            <h2>
              <b>Create Article</b>
            </h2>
            <hr></hr>
            <Form formSubmit={this._formSubmit} />
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default CreateArticle;
