import React from 'react'
import styled from 'styled-components';
import img from '../Image/login.png';


const Contact = () => {
    return (

        <>
            <StyledContact>
                <div className="container">
                    <div className="heading">
                        <h1>Contact Us.</h1>
                    </div>
                    <div className="box">
                        <div className="box-image">
                            <img src={img} alt="" width="200px"/>
                        </div>
                        <div className="details-section">
                            <div className="sections">
                                <div className="column-1">
                                    <label htmlFor="name">
                                        <input type="text" id='name' name='' placeholder='Name' />
                                    </label>

                                    <label htmlFor="location">
                                        <input type="text" id='location' name='' placeholder='Location' />
                                    </label>
                                    <label htmlFor="textmessage">
                                        <input type="messsage" id='textbox' name='' placeholder='Type your message here' />
                                    </label>
                                </div>
                                <div className="column-2">
                                    <label htmlFor="email">
                                        <input type="email" id='email' name='' placeholder='Email' />
                                    </label>
                                    <label htmlFor="mobilenumber">
                                        <input type="tel" id='monumber' name='' placeholder='Mobile Number' />
                                    </label>
                                </div>
                            </div>
                            <div className="send-button">
                                <div className="button">
                                    <button className="send-btn"><b>Send Message</b></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="middledetails">
                        <div id="detail-1">
                            <div id="icon-1"></div>
                            <p>contact@company.com</p>
                        </div>
                        <div id="detail-2">
                            <div id="icon-1"></div>
                            <p><pre>(+91)000-0000</pre></p>
                        </div>
                        <div id="detail-3">
                            <div id="icon-1"></div>
                            <p>794 Mcallister
                                St San Francisco, 94102</p>
                        </div>
                    </div>
                    <div className="round-box">
                        <div className="bottom-logo">
                            <img src="" alt="" />
                        </div>
                        <h3>We are Social</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        <div className="socialmedia-icons">
                            <nav>
                                <ul type="none">
                                    <li><a href=""><div id="icon-1"></div><img src="" alt="" /></a></li>
                                    <li><a href=""><div id="icon-1"></div><img src="" alt="" /></a></li>
                                    <li><a href=""><div id="icon-1"></div><img src="" alt="" /></a></li>
                                    <li><a href=""><div id="icon-1"></div><img src="" alt="" /></a></li>
                                    <li><a href=""><div id="icon-1"></div><img src="" alt="" /></a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="aboutcompany">
                            <div className="column-1">
                                <p id='bottom-p1'><b>Product</b></p>
                                <nav>
                                    <ul type="none">
                                        <li><a href="">Features</a></li>
                                        <li><a href="">Pricing</a></li>
                                        <li><a href="">Case studies</a></li>
                                        <li><a href="">Reviews</a></li>
                                        <li><a href="">Updates</a></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="column-2">
                                <p id='bottom-p2'><b>Company</b></p>
                                <nav>
                                    <ul type="none">
                                        <li><a href="">About</a></li>
                                        <li><a href="">Contact us</a></li>
                                        <li><a href="">Careers</a></li>
                                        <li><a href="">Culture</a></li>
                                        <li><a href="">Blog</a></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="column-3">
                                <p id='bottom-p3'><b>Support</b></p>
                                <nav>
                                    <ul type="none">
                                        <li><a href="">Getting started</a></li>
                                        <li><a href="">Help center</a></li>
                                        <li><a href="">Server status</a></li>
                                        <li><a href="">Report a bug</a></li>
                                        <li><a href="">Chat support</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <div className="footer">
                        <div className="footercontents">
                            <p id='foot-p1'>Copyright &copy; 2024 DOAGuru Templates</p>
                            <p id='foot-p2'>All Rights Reserved | <div className='t&c-link'><a href="">Terms & Conditions</a></div> | <div className="policy-link"><a href="">Privacy Policy</a></div></p>
                        </div>
                    </div>
                </footer>
            </StyledContact>
        </>
    )
}

export default Contact;
const StyledContact = styled.div`

@media screen and (min-width: 320px) and (max-width: 480px){


/* .container {
    height: 340px;
    width: 400px;
    backgroundcolor: red;
} */


}










`
