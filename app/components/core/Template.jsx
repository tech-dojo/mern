import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

class Template extends React.Component {
    constructor(props, context){
        super(props, context);
      //  this.history = contex.history;

    }
    componentWillReceiveProps(nextProps){

        // console.log('receiveProps');
        // if(this.props.location.pathname == "/products" && (Object.keys(this.props.location.query).length > 0)){
        //     if(nextProps.location.pathname == "/products" && Object.keys(nextProps.location.query).length === 0){
        //         window.location.reload();
        //     }
        // }


    }

	render(){

		return (
            <div className="page-bottom mainBody">
          <Header history = {this.props.history}/>
          { this.props.children }
          <Footer />
			 </div>
		)
	}
}
// Template.contextTypes = {
//     history: React.PropTypes.object
// };
export default Template;
