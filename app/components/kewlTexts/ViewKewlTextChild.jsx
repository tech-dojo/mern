import React from 'react';
import {
  Grid,
  Row,
  Col,
  Button
} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class ViewKewlTextChild extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.props = props;
    this.deleteKewlText = this.deleteKewlText.bind(this);
  }

  deleteKewlText() {
    this.props.deleteKewlText(this.props.KewlTextId);
  }

  render() {
    var KewlText = this.props.KewlText;
    return (
      <Grid className="marginBottom">
        <Row>
          <Col md={12} lg={12} sm={12} xs={12}>
            <h1>{KewlText.location}</h1>
            <hr></hr>
          </Col>
          <Col md={8} lg={8} sm={8} xs={8}>
            <h3>{KewlText.updated}</h3>
          </Col>
          <Col md={4} lg={4} sm={4} xs={4}>
            {this.props.loggedIn && <div className="pull-right">
              <LinkContainer className="editBtnCSS" to={`/kewlTexts/edit/${KewlText._id}`}>
                <Button bsStyle="primary">Edit</Button>
              </LinkContainer>
              <Button onClick={this.deleteKewlText} bsStyle="danger">Delete</Button>
            </div>
}
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default ViewKewlTextChild;
