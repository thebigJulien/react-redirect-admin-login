import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Secret extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div className="secret">
        <h1>SUPER SECRET PAGE</h1>
        <Link to="/">BACK</Link>
      </div>
         );
    }
}
 
export default Secret;


