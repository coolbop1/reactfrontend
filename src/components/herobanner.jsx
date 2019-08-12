import React, { Component } from 'react';
import '../App.css';

class Hero extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <section id="hero">
                    <div className="innerfilm"></div>
                    <div className="topPopUp">Grow equity, refer friends to FirstHomes and both of you can earn up to N500,000 per sign up.  <a href="index.html" className="hotlink">Learn More</a> &nbsp; &nbsp; &times;</div>
                    <div id="herotext">
                        <h1>FirstHomes</h1>
                        <h2>The future of home ownership with <br/> unlimited possibilities.</h2>
                        <button className="active">LEARN MORE</button> &nbsp; &nbsp;
                        <button className="inactive">GET STARTED</button>
                    </div>
                </section>
            </React.Fragment>
         );
    }
}
 
export default Hero;