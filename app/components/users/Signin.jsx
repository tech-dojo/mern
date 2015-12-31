
import React from 'react';
import OrderStore from './../stores/OrderStore.jsx';
import {Grid, Row, Col, Panel, Button, Input} from 'react-bootstrap';
import auth from './../services/Authentication';



class Signin extends React.Component {
    constructor(props, context){
        super(props, context);
        this.state = {};
        this.state.email = "";
        this.state.password = "";
        this.state.error = "";
        this.validEmailStatus = false;
        this.validPasswordInput= false;
        this.history = props.history;
        this.showSessionMsg = props.location.query? props.location.query.session:true;
        // this.validNameInput = false;
        // this.validNameProducts = false;
        // this.state.quotationObj = {};
        // this.handleInputName = this.handleInputName.bind(this);
        this.handleInputPassword = this.handleInputPassword.bind(this);
        this.handleInputEmail = this.handleInputEmail.bind(this);
        // this.handleInputProducts = this.handleInputProducts.bind(this);
        // this._onChange = this._onChange.bind( this );
        this.formSubmit = this.formSubmit.bind(this);
        // this.validateEmail= this.validateEmail.bind(this);
    }

    componentWillMount() {
        //OrderStore.onChange(this._onChange);
    }

    componentWillUnmount() {
        //OrderStore.removeChangeListener( this._onChange );
    }

    _onChange() {
        // this.setState(
        //     getError()
        //     );
    }

    validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
    }

    handleInputEmail(e){
        this.setState({error : ''});
        this.validEmailStatus= this.validateEmail(e.target.value)
 //        this.state.quotationObj.custEmail = e.target.value;
        this.setState({email : e.target.value});

    }


    handleInputPassword(e){
        this.setState({error : ''});
        this.validPasswordInput= e.target.value!=="" ? true : false;
       // this.state.quotationObj.custName = e.target.value;
        this.setState({password : e.target.value});

    }

    formSubmit(e) {
     e.preventDefault();


      if(!this.validPasswordInput){
        this.setState({error : 'please input the required fields'});
    }
      else if(!this.validEmailStatus){
         if(this.state.email){
              this.setState({error : 'Invalid Email Address'});

           }
           else{

               this.setState({error : 'please input the required fields'});
           }
    }
      else{
    this.setState({error : 'Signing in ...'});


    auth.login(this.state.email, this.state.password, this.history, (loggedIn) => {
      if (!loggedIn)
        return this.setState({ error: "not logged in" })





    })


 }

    }
    render(){
        return (

            <div className="container">
            <h2><b>Sign In</b></h2>
            <p className={this.showSessionMsg? 'shown':'hidden' }><span className="sessionMsg">Your session timed out.</span></p>

            <Grid>
                <Row className="productOrderForm">
                    <Col md={6} className="contactNumber">

                <form onSubmit={this.formSubmit}>

                    <Input
                        type="text"
                        placeholder="Email"
                        label="Email"
                        onChange={this.handleInputEmail} />

                     <Input
                        type="password"
                        placeholder="Password"
                        label="Password"
                        onChange={this.handleInputPassword}/>


                   <Button
                   type="submit"  bsStyle="success" >Submit</Button>
                   <p>{this.state.error}</p>
                </form>
                    </Col>
                </Row>
            </Grid>

            </div>
        )
    }
}

export default Signin;
