import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

class Template extends React.Component {
    constructor(props) {
      super(props);
    }

	render() {
  return (
            <div className="page-bottom mainBody">
          <Header/>
          { this.props.children }
          <Footer />
        </div>
		);
	}
}

export default Template;
