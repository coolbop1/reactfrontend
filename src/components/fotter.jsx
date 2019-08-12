import React, { Component } from 'react';

class Foot  extends Component {
    state = { 
        homelogo:"image/whitelogo.png",
        secure:"image/secure.png",
        rowspan:2
     }
    render() { 
        return ( 
            <React.Fragment>
                <div id="footcontain" className="fnone">
                    <div id="subscribe" className="fleft">
                        <img alt="footlogo" src={this.state.homelogo} /><br/><br/>
                        <span className="fevertext">Subscribe to our newsletter</span>
                        <br/><br/>
                        <input placeholder="Email Address" type="text" /> &nbsp;<button>SUBSCRIBE</button>
			<br/><br/>
			<span className="fevertext">&copy; 2019 All right reserved</span><br/>
			<img alt="secure" src={this.state.secure} />
                    </div>
		<div id="quicklink" className="fleft">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <span className="fevertext">Navigation</span>
                        </td>
                        <td>
                            <span className="fevertext">Get Informed</span>
                        </td>
                        <td>
                            <span className="fevertext">Discover</span>
                        </td>
                    </tr>
                    <br/>
                    <tr>
                        <td>
                            <span>
                            Homepage
                            </span>
                        </td>
                        <td>
                            <span>
                            FAQs
                            </span>
                        </td>
                        <td>
                            <span>
                            Blog
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>
                            Get started
                            </span>
                        </td>
                        <td>
                            <span>
                            Security
                            </span>
                        </td>
                        <td>
                            <span>
                            About us
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>
                            Sign in
                            </span>
                        </td>
                        <td>
                            <span>
                            Privacy policy
                            </span>
                        </td>
                        <td>
                            <span>
                            Contact us
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>
                            How it works
                            </span>
                        </td>
                        <td rowSpan = {this.state.rowspan}>
                            <span>
                            Terms of use
                            </span>
                        </td>
                        <td rowSpan = {this.state.rowspan}>
                            <span>
                            <button>Get Started</button>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>
                            Formal complaints 
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>

		</div>
		

                </div>
            </React.Fragment>
         );
    }
}
 
export default Foot ;
