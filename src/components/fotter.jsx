import React, { Component } from 'react';

class Foot  extends Component {
    state = { 
        homelogo:"image/whitelogo.png"
     }
    render() { 
        return ( 
            <React.Fragment>
                <div id="footcontain" class="fnone">
                    <div id="subscribe" class="fleft">
                        <img alt="footlogo" src={this.state.homelogo} /><br/><br/>
                        <span class="fevertext">Subscribe to our newsletter</span>
                        <br/><br/>
                        <input type="text" /> &nbsp;<button>subscribe</button>
			<br/><br/>
			<span class="fevertext">&copy; 2019 All right reserved</span><br/>
			<span>Secured by SSQL</span>
                    </div>
		<div id="quicklink">

		</div>
		

                </div>
            </React.Fragment>
         );
    }
}
 
export default Foot ;
