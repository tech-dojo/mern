import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
class Footer extends React.Component {
    constructor(){
        super();

    }

	render(){
		return (
            <div className="footer">
            <Grid>
            	<Row>
            		<Col xs={12} md={6} sm={6} lg={6}>React Framework &copy; 2016 | Website by <a href="http://tech-dojo.org">TechDojo</a></Col>
            		<Col xs={12} md={6} sm={6} lg={6}>
            			<ul className="list-social pull-right">
					        <li>
					            <a href="https://twitter.com/dojo_tech">
					                <span className="fa-stack fa-lg">
					                      <i className="fa fa-circle fa-stack-2x"></i>
					                      <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
					                  </span>
					            </a>
					        </li>
					        <li>
					            <a href="https://www.facebook.com/techdojoorg">
					                <span className="fa-stack fa-lg">
					                      <i className="fa fa-circle fa-stack-2x"></i>
					                      <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
					                  </span>
					            </a>
					        </li>
					        <li>
					            <a href="https://www.youtube.com/channel/UCpaqnzS5NQ1RGDPUg9_FVRw">
					                <span className="fa-stack fa-lg">
					                <i className="fa fa-circle fa-stack-2x"></i>
					                <i className="fa fa-youtube fa-stack-1x fa-inverse"></i>
					              </span>
					            </a>
					        </li>
					        <li>
					            <a href="https://plus.google.com/u/0/+Tech-dojoOrg/about">
					                <span className="fa-stack fa-lg">
					                <i className="fa fa-circle fa-stack-2x"></i>
					                <i className="fa fa-google-plus fa-stack-1x fa-inverse"></i>
					              </span>
					            </a>
					        </li>
					    </ul>
            		</Col>
            	</Row>
            </Grid>
            </div>
		)
	}

}

export default Footer;
