import React from 'react';
import KewlTextStore from './../../stores/KewlTextStore.jsx';
import ListKewlTextsChild from './ListKewlTextsChild.jsx';

function getKewlTextList() {
  return { KewlTexts: KewlTextStore.getKewlTextList() };
}

class KewlTextList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.props = props;
    KewlTextStore.fetchKewlTextList();
    this.state = {};
    this.state.KewlTexts = [];
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    KewlTextStore.onChange(this._onChange);
  }

  componentWillUnmount() {
    KewlTextStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(getKewlTextList());
  }

  render() {
    return (
    <ListKewlTextsChild KewlTexts= {this.state.KewlTexts} />
  );
  }
  }
export default KewlTextList;
