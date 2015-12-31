
import React from 'react';
import {Grid, Row, Col, Panel, Button, Input} from 'react-bootstrap';
import auth from './../services/Authentication';
import { Link  } from 'react-router';



class SignOut extends React.Component {
    constructor(props, context){
        super(props, context);
    }

    componentDidMount() {
        auth.logout();
    }


    render(){
        return (

            <div className="container page-bottom">

            <Grid>
                <Row className="order-process">
                    <Col md={6}>

                        <p>You are logged out. Go back to <Link to="/">Home</Link></p>
                    </Col>
                </Row>
            </Grid>

            </div>
        )
    }
}

export default SignOut;
