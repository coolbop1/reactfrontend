import React, { Component } from 'react';

class Ads extends Component {
    state = { 
        imgurl:"image/play.png"
     }
    render() { 
        return ( 
            <React.Fragment>
                <div id="vidtext">
                    <h1>Make your rent work for you.</h1>
                    <p>Real Estate is the guaranteed way to grow your net worth. Why not make your rent work for you with our lease to own offer where you increase your equity as you make your monthly payment?</p>
                </div>
                <div id="vid">
                    <div id="play"><center><img alt="play" src={this.state.imgurl}/></center></div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Ads;