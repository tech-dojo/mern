import React from 'react';
import {Link} from 'react-router';
import {
  Grid,
  Row,
  Col,
  Panel,
  Pagination,
  Button,
  Well,
  Label
} from 'react-bootstrap';

class ListKewlTextsChild extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.props = props;
  }

  render() {
    var KewlTexts = this.props.KewlTexts.map((KewlText) => {
      return (
        <Link
          key={KewlText._id}
          to={`/kewlTexts/${KewlText._id}`}>
          <Col md={12} lg={12} sm={12} xs={12} className="products">
            <Panel header={KewlText.location}>
              {KewlText.updated}

            </Panel>
          </Col>
        </Link>
    );});
    return (
      <div className="marginBottom">
        <Grid>
            <Row className="productList">
              <h1>KewlTexts</h1>
              <hr></hr>
              {KewlTexts}
              </Row>
            </Grid>
      </div>
    );
  }
}
export default ListKewlTextsChild;
