import React from 'react';
import {Grid, Row, Col, Button, Input, ButtonInput} from 'react-bootstrap';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.history = props.history;
    this.handleInputLocation= this.handleInputLocation.bind(this);
   this.handleInputUpdated= this.handleInputUpdated.bind(this);
    this._formSubmit = this._formSubmit.bind(this);
  }

   handleInputLocation(e) { 
 this.props.KewlText.location = e.target.value; 
 this.props.handleInputLocation(this.props.KewlText); 
 } 
 handleInputUpdated(e) { 
 this.props.KewlText.updated = e.target.value; 
 this.props.handleInputUpdated(this.props.KewlText); 
 } 
 

  _formSubmit(e) {
    e.preventDefault();
    this.props.formSubmit(this.props.KewlText);
  }

  render() {
    var KewlText = this.props.KewlText;
    return (
        <Grid >
          <Row>
            <Col md={12}>
              <form onSubmit={this._formSubmit}>
                <Input type="text" value={KewlText.location} label="Location" required onChange={this.handleInputLocation} placeholder="Enter KewlText Location" /> 
<Input type="text" value={KewlText.updated} label="Updated" required onChange={this.handleInputUpdated} placeholder="Enter KewlText Updated" /> 
                <ButtonInput type="submit" value="Submit Button" bsStyle="primary"/>
              </form>
            </Col>
          </Row>
        </Grid>
      );
  }
  }

export default Form;
