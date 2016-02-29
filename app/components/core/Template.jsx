import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

class Template extends React.Component {
    constructor(props, context) {
      super(props, context);
    }

	render() {
  return (
            <div className="page-bottom mainBody">
          <Header history = {this.props.history}/>
          { this.props.children }
          <Footer />
        </div>
		);
	}
}

export default Template;
