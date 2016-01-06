import React from 'react';
import ArticleStore from './../../stores/ArticleStore.jsx';
import {
  Grid,
  Row,
  Col,
  Panel,
  Button,
  Input,
  ButtonInput
} from 'react-bootstrap'

function getArticle() {
    return {EditArticle: ArticleStore.getArticle()}
}

class EditArticle extends React.Component {
  constructor(props) {
    super(props);
    //  props= this.props;
      this.state = {};
    this.history = props.history;
//console.log(this.history);
    ArticleStore.fetchArticle(props.params.id);

  //  this.state.EditArticle = {};
    this.state.error = '';
    this.state=getArticle();
    this.handleInputTitle = this.handleInputTitle.bind(this);
    this.handleInputContent = this.handleInputContent.bind(this);
      this._onChange = this._onChange.bind( this );
    this._formSubmit = this._formSubmit.bind(this);
  }
  handleInputTitle(e) {
    this.state.EditArticle.title = e.target.value;
    this.setState({EditArticle: this.state.EditArticle});
  }

  handleInputContent(e) {
    this.state.EditArticle.content = e.target.value;
    this.setState({EditArticle: this.state.EditArticle});

  }
  _formSubmit(e) {
    e.preventDefault();
  console.log("entered");
  //  var newArticle = {
  //   this.state.CreateArticle
  //  };
    ArticleStore.editArticle(this.state.EditArticle, this.state.EditArticle._id,this.history);
  }

  componentWillMount() {
      ArticleStore.onChange(this._onChange);


  }
  componentWillUnmount() {
     ArticleStore.removeChangeListener( this._onChange );

  }
  _onChange() {
      this.setState( getArticle() );


  }

  render() {
  //  this.state = getArticle();
var article = this.state.EditArticle;
console.log("test");
console.log(article);
    return (
      <Grid>
        <Row>
          <Col md={12}>
            <h2>
              <b>Edit Article</b>
            </h2>
            <form onSubmit={this._formSubmit}>
              <Input type="text" value={article.title} label="Title" onChange={this.handleInputTitle} placeholder="Enter Article Title"/>
              <Input type="textarea" value={article.content} label="Article Content" onChange={this.handleInputContent} placeholder="Article Content: "/>
              <ButtonInput type="submit" value="Submit Button" bsStyle="primary"/>
            </form>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default EditArticle;
