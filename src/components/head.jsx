import React, { Component } from 'react';
import '../App.css';

class Header  extends Component {
    state = {
        logoimga:"image/homelogo.png",
        
     }
    render() { 
        return ( 
            <React.Fragment>
                <header className="header">
                    <div id="logobox">
                        <img alt="logo" src={this.state.logoimga} />
                        

                    </div>
                    <nav>
                            <ul>
                                <li>about us</li>
                                <li>contact us</li>
                                <li>blog</li>
                                <li>carrers</li>
                                <li>sign in</li>
                                <li>get started</li>
                            </ul>
                        </nav>
                </header>
            </React.Fragment>
         );
    }
}
 
export default Header;