import React from 'react';
import {Grid, Row, Col, Button, Input, ButtonInput} from 'react-bootstrap';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.history = props.history;
    this.state = {};
    this.state.error = '';
    this.state.Article = this.props.Article || {};
    this.handleInputTitle = this.handleInputTitle.bind(this);
    this.handleInputContent = this.handleInputContent.bind(this);
    this._formSubmit = this._formSubmit.bind(this);
  }

  handleInputTitle(e) {
    this.state.Article.title = e.target.value;
    this.setState({ Article: this.state.Article });
  }

  handleInputContent(e) {
    this.state.Article.content = e.target.value;
    this.setState({ Article: this.state.Article });
  }

  _formSubmit(e) {
    e.preventDefault();
    this.props.formSubmit(this.state.Article);
  }

  render() {
    var Article = this.state.Article;
    return (
        <Grid >
          <Row>
            <Col md={12}>
              <form onSubmit={this._formSubmit}>
                <Input type="text" value={Article.title} label="Title" required
                  onChange={this.handleInputTitle} placeholder="Enter Article Title"/>
                <Input type="textarea" value={Article.content} label="Article Content"
                   required onChange={this.handleInputContent} placeholder="Article Content: "/>
                <ButtonInput type="submit" value="Submit Button" bsStyle="primary"/>
              </form>
            </Col>
          </Row>
        </Grid>
      );
  }
  }

export default Form;
