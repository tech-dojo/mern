import React from 'react';
import ArticleStore from './../../stores/ArticleStore.jsx';
import {Grid, Row, Col, Panel, Button, Input, ButtonInput} from 'react-bootstrap'

class CreateArticle extends React.Component {
  constructor(props) {
    super(props);
    this.history = props.history;
    this.state = {};
    this.state.CreateArticle = {};
    this.state.error = '';

    this.handleInputTitle = this.handleInputTitle.bind(this);
    this.handleInputContent = this.handleInputContent.bind(this);
    this._formSubmit = this._formSubmit.bind(this);
  }
  handleInputTitle(e) {
    this.state.CreateArticle.title = e.target.value;
    this.setState({CreateArticle: this.state.CreateArticle});
  }

  handleInputContent(e) {
    this.state.CreateArticle.content = e.target.value;
    this.setState({CreateArticle: this.state.CreateArticle});

  }
  _formSubmit(e) {
    e.preventDefault();
    ArticleStore.addArticle(this.state.CreateArticle, this.history);
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
            <form onSubmit={this._formSubmit}>
              <Input type="text" label="Title" required onChange={this.handleInputTitle} placeholder="Enter Article Title"/>
              <Input type="textarea" label="Article Content" required onChange={this.handleInputContent} placeholder="Article Content: "/>
              <ButtonInput type="submit" value="Submit Button" bsStyle="primary"/>
            </form>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default CreateArticle;
