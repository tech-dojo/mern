import React from 'react';
import KewlTextStore from './../../stores/KewlTextStore.jsx';
import {Grid, Row, Col} from 'react-bootstrap';
import Form from './Form.jsx';

function getKewlText() {
  return { EditKewlText: KewlTextStore.getKewlText() };
}

class EditKewlText extends React.Component {
    constructor(props) {
    super(props);
    this.state = {};
    this.history = props.history;
    KewlTextStore.fetchKewlText(props.params.id);
    this.state = getKewlText();
    this.handleInputLocation= this.handleInputLocation.bind(this);
    this.handleInputUpdated= this.handleInputUpdated.bind(this);
    this._formSubmit = this._formSubmit.bind(this);
  }

  handleInputLocation(value) { 
 this.setState({ KewlText: value }); 
 }; 
 
handleInputUpdated(value) { 
 this.setState({ KewlText: value }); 
 }; 
 


  _formSubmit(value) {
    KewlTextStore.editKewlText(value, value._id, this.history);
  }

  render() {
    return (
      <Grid className="marginBottom">
        <Row>
          <Col md={12}>
            <h2>
              <b>Edit KewlText</b>
            </h2>
            <hr></hr>
            <Form formSubmit={this._formSubmit}  KewlText={this.state.EditKewlText}
              handleInputLocation = {this.handleInputLocation} handleInputUpdated = {this.handleInputUpdated} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default EditKewlText;
