import React from 'react';
import ArticleStore from './../../stores/ArticleStore.jsx';
import {Grid, Row, Col} from 'react-bootstrap';
import Form from './Form.jsx';

function getArticle() {
  return { EditArticle: ArticleStore.getArticle() };
}

class EditArticle extends React.Component {
    constructor(props,context) {
    super(props,context);
    this.state = {};
    this.router = context.router;
    ArticleStore.fetchArticle(props.params.id);
    this.state = getArticle();
    this.handleInputTitle = this.handleInputTitle.bind(this);
    this.handleInputContent = this.handleInputContent.bind(this);
    this._formSubmit = this._formSubmit.bind(this);
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
     ArticleStore.onChange(this._onChange);

   }
   componentWillUnmount() {
     ArticleStore.removeChangeListener( this._onChange );

   }
   _onChange() {
     this.setState( getArticle());
   }

  handleInputTitle(article) {
    this.setState({ EditArticle: article });
  }

  handleInputContent(article) {
    this.setState({ EditArticle: article });
  }

  _formSubmit(value) {
    ArticleStore.editArticle(value, value._id, this.router);
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

EditArticle.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default EditArticle;
