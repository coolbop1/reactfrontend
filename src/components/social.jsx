import React, { Component } from 'react';

class Socials extends Component {
    state = { 
        imrurl:"image/social.png"
     }
    render() { 
        return ( 
            <React.Fragment>

                <div id="socbar" className="fnone">
                   <center><img alt="social" src={this.state.imrurl} /></center>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Socials;