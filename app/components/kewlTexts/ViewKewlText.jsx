import React from 'react';
import KewlTextStore from './../../stores/KewlTextStore.jsx';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';
import auth from './../../services/Authentication';
import ViewKewlTextChild from './ViewKewlTextChild.jsx';

function getKewlText() {
  return { KewlText: KewlTextStore.getKewlText() };
}

class ViewKewlText extends React.Component {
  constructor(props, context) {
    super(props, context);
    KewlTextStore.fetchKewlText(props.params.id);
    this.state = {};
    this.state.KewlText = {};
    this.state.loggedIn = auth.loggedIn();
    this._onChange = this._onChange.bind(this);
    this.deleteKewlText = this.deleteKewlText.bind(this);
  }

  componentWillMount() {
    KewlTextStore.onChange(this._onChange);
  }

  componentWillUnmount() {
    KewlTextStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(getKewlText());
  }

  deleteKewlText(KewlTextId) {
    KewlTextStore.deleteKewlText(KewlTextId, this.props.history);
  }

  render() {
    return (
    <ViewKewlTextChild loggedIn={this.state.loggedIn} KewlTextId= {this.props.params.id}
       KewlText = {this.state.KewlText} deleteKewlText = {this.deleteKewlText} />
    );
  }
}

export default ViewKewlText;
