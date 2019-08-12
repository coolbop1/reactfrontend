import React, { Component } from 'react';

class Features extends Component {
    state = { 
        img:["image/touch-idg.png","image/transparent.png","image/flexible.png","image/settings.png","image/hold.png","image/tower.png","image/invest.png","image/nigeria.png"]
     }
    render() { 
        return ( 
            <React.Fragment>
                <div id="feattab">
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                <center><div className="activetab">
                                <img alt="touch-id" src={this.state.img[0]} /><br/>
                                <span className="undertext">Unique</span>
                                </div></center>
                            </td>
                            <td>
                                <center><div >
                                <img alt="touch-id" src={this.state.img[0]} /><br/>
                                <span className="undertext">Unique</span>
                                </div></center>
                            </td>
                            <td>
                                <center><div className="normal">
                                <img alt="transparency" src={this.state.img[1]} /><br/>
                                <span className="undertext ">Transparent</span>
                                </div></center>
                            </td>
                            <td>
                                <center><div className="normal">
                                <img alt="flexibility" src={this.state.img[2]} /><br/>
                                <span className="undertext ">Flexible</span>
                                </div></center>
                            </td>
                            <td>
                                <center><div className="normal">
                                <img alt="control" src={this.state.img[3]} /><br/>
                                <span className="undertext ">Control</span>
                                </div></center>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                </div>

                <div id="featbox">
                    <center><h2>How it works.</h2></center>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                     <center>
                                        <div className="activechoice">
                                            <img alt="hold" src={this.state.img[4]} /><br/>
                                            <h4>Choose your preferences</h4>
                                            <p>Apartment type, City, Neighbourhood & budget</p>

                                        </div>
                                    </center>

                                </td>
                                <td>
                                <center>
                                    <div className="choice">
                                        &nbsp; <br/> &nbsp; <br/><br/> 
                                        <h4>Start to save</h4>
                                        <p>Save a minimum of 15% of budget sum for 15 Months.</p>
                                    </div>
                                </center>

                                </td>
                                <td>
                                <center>
                                    <div className="choice">
                                        &nbsp; <br/> &nbsp; <br/><br/> 
                                        <h4>Build your credit worthiness</h4>
                                        <p>Grows your credit worthiness through a consistent saving habit.</p>
                                    </div>
                                </center>
                                </td>
                                <td>
                                <center>
                                    <div className="choice">
                                        &nbsp; <br/> &nbsp; <br/><br/> 
                                        <h4>Qualify</h4>
                                        <p>No more human bias or Mortgage officer interviews.</p>
                                    </div>
                                </center>

                                </td>

                            </tr>
                        </tbody>
                    </table>

                </div>
                <div id="threepick">
                <table>
                        <tbody>
                            <tr>
                                <td>
                                     <center>
                                        <div id="fpick">
                                            <img alt="" src={this.state.img[5]} />
                                            <br/>&nbsp;<br/>
                                            <span>60,000 apartments in 4 years</span>
                                        </div>
                                    </center>
                                </td>
                                <td>
                                <center>
                                        <div id="spick">
                                            <img alt="" src={this.state.img[6]} />
                                            <br/>&nbsp;<br/>
                                            <span>$3 billion worth of investments</span>
                                        </div>
                                    </center>
                                </td>
                                <td>
                                <center>
                                        <div id="tpick">
                                            <img alt="" src={this.state.img[7]} />
                                            <br/>&nbsp;<br/>
                                            <span>Available in 36 states of the Nigerian Federation</span>
                                        </div>
                                    </center>
                                </td>
                            </tr>
                        </tbody>
                </table>
                

                </div>
            </React.Fragment>
         );
    }
}
 
export default Features;