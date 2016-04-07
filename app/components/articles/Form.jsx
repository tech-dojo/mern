import React from 'react';
import {Grid, Row, Col, Button, Input, ButtonInput} from 'react-bootstrap';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputTitle = this.handleInputTitle.bind(this);
    this.handleInputContent = this.handleInputContent.bind(this);
    this._formSubmit = this._formSubmit.bind(this);
  }

  handleInputTitle(e) {
    this.props.Article.title = e.target.value;
    this.props.handleInputTitle(this.props.Article);
  }

  handleInputContent(e) {
    this.props.Article.content = e.target.value;
    this.props.handleInputContent(this.props.Article);
  }

  _formSubmit(e) {
    e.preventDefault();
    this.props.formSubmit(this.props.Article);
  }

  render() {
    var Article = this.props.Article;
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
