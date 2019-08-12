import React, { Component } from 'react';

class Partner extends Component {
    state = { 
        imgurl:["image/partner1.png","image/partner2.png"],
        testimonials:["image/Ellipse.png","image/Ellipse-1.png","image/Ellipse-2.png","image/Ellipse-3.png"]
     }
    render() { 
        return ( 
            <React.Fragment>
                <div id="partnerimg">
                    <center>
                        <h1>Partners</h1>
                        <p>Our ecosystem is powered by trusted corporate partners</p>
                        <img alt="partner1" src={this.state.imgurl[0]} /><br/>&nbsp;<br/><br/>&nbsp;<br/>
                        <img alt="partner2" src={this.state.imgurl[1]} />
                        <h2>Pre-launch Feedback</h2>
                    </center>
                    <div id="feedback">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <center>
                                            <div>
                                            <img alt="testimonial" src={this.state.testimonials[0]} /><br/>
                                            <span>
                                            “ Wow! I love the proposition, when will I be able to download the app and start our journey to freedom? It has been really painful before you guys came along.”
                                            </span>
                                            <h4>Edward Akintayo<br/>Lagos</h4>

                                            </div>
                                        </center>
                                    </td>
                                    <td>
                                    <center>
                                            <div>
                                            <img alt="testimonial" src={this.state.testimonials[1]} /><br/>
                                            <span>
                                            “ I cannot wait to get the app and enjoy its benefits, I wish Firsthomes was available earlier. It will be a great relief.”
                                            </span>
                                            <h4>Dr Rose Azubuike<br/>Port-Harcourt</h4>

                                            </div>
                                        </center>
                                    </td>
                                    <td>
                                        <center>
                                            <div>
                                            <img alt="testimonial" src={this.state.testimonials[2]} /><br/>
                                            <span>
                                            “ The benefits are far reaching especially the transparent system which removes bias from loan application. It’s a breath of fresh air in the home ownership space. It will be a game changer.”
                                            </span>
                                            <h4>Danladi Abubakar<br/>Kano</h4>

                                            </div>
                                        </center>
                                    </td>
                                    <td>
                                    <center>
                                            <div>
                                            <img alt="testimonial" src={this.state.testimonials[3]} /><br/>
                                            <span>
                                            “ I cannot wait to get the app and enjoy its benefits, I wish Firsthomes was available earlier. It will be a great relief.”
                                            </span>
                                            <h4>Elizabeth Odukoya<br/>Abuja</h4>

                                            </div>
                                        </center>
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
 
export default Partner;