import React from 'react';
import { Link  } from 'react-router';



class SignOut extends React.Component {
  constructor(props, context){
    super(props, context);
  }

  render(){
    return (
          <div>
            <h2>
              You are logged out. Go back to <Link to="/">Home</Link>
          </h2>
        </div>
      )
    }
}
export default SignOut;
