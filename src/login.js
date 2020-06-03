import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
// import { Link } from 'react-router-dom';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            successLogin: false
          }
    }

    handleSubmit = (e) => {
        e.preventDefault()

        if(this.state.username === 'admin' && this.state.password === 'admin123') {
            this.setState({successLogin: true, errors:""});
            
        }
        else {
            this.setState({errors: "TRY AGAIN!"})
        }
    }

    render() { 

        if(this.state.success) {
            return <Redirect to="/secret"></Redirect>
        }
        return ( 
        <form className="login" onSubmit={this.handleSubmit}>
          <h2>PLEASE LOGIN</h2>
            <input type="text" placeholder="username" onChange={(e) => this.setState({username: e.target.value})}></input>
            <input type="password" placeholder="password" onChange={(e) => this.setState({password: e.target.value})}></input>
            <button>SUBMIT</button>
            <div className="errors">{this.state.errors}</div>
         </form>
         );
    }
}
 
export default Login;
  