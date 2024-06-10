import React from 'react';
import styled from 'styled-components';
import img from '../Image/contact-logo.png';
import imag from '../Image/bigbulllogo.png';

function ContactUs() {
    const data = new Date();
    const currentYear = data.getFullYear();

    console.log(currentYear);

    return (
        <>
            <StyledContact>
                <header>
                    <div className="top-container shadow-sm d-flex justify-content-between">
                        <img src={imag} alt="" width="100px" />
                        <div className="top-list p-3 px-5">
                            <i class="bi bi-list fa-2x"></i>
                        </div>
                    </div>
                </header>
                <div className='container-fluid'>
                    <div className="row mid-container bg-white pt-5 pb-5 d-flex justify-content-center align-items-center">
                        <div className="heading text-center py-3">
                            <h1>Contact Us.</h1>
                        </div>
                        <div className='row d-flex justify-content-center'>
                            <form className='col-12'>
                                <div className="col-12 bg-transparent shadow-lg p-3 mb-5 bg-white rounded">
                                    <div className=" contact_box box text-dark d-flex flex-wrap">
                                        <div className="box-image m-auto">
                                            <img className='contact_img' src={img} alt=""/>
                                        </div>
                                        <div className="inputs my-4 m-auto">
                                            <div class="name-email gap-1 gap-md-4 d-flex justify-content-center">
                                                <div>
                                                    <label class="" for="form4Example1"></label>
                                                    <input type="text" id="form4Example1" class="name form-control border border-dark" placeholder='Name' />
                                                </div>

                                                <div>
                                                    <label class="" for="form4Example2"></label>
                                                    <input type="email" id="form4Example2" class="email form-control border border-dark" placeholder='Email' />
                                                </div>
                                            </div>

                                            <div class="location-mobilenumber gap-1 gap-md-4 d-flex justify-content-center mt-2">
                                                <div>
                                                    <label class="" for="form4Example1"></label>
                                                    <input type="tel" id="form4Example1" class="mb-2 location form-control border border-dark" placeholder='Location' />
                                                </div>


                                                <div>
                                                    <label class="" for="form4Example2"></label>
                                                    <input type="text" id="form4Example2" class="mobile-number form-control border border-dark" placeholder='Mobile Number' />
                                                </div>

                                            </div>

                                            <div data-mdb-input-init class="mt-2">
                                                <label class="" for="form4Example3"></label>
                                                <textarea class="text-box form-control border border-dark" id="form4Example3" rows="4" placeholder='Text your message here'></textarea>
                                            </div>
                                            <div class="form-check pt-5 mb-5 px-0 text-center">
                                                <button data-mdb-ripple-init type="button" class="btn btn-danger w-50">Send Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <footer>
                    <div class="main-footer">
                        <div className="footer-content bg-white text-center ">
                            <img src={imag} alt="" width="100px" class="pt-4" />
                            <h4 class="pt-4">We are Social</h4>
                            <p class='bottom-para pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda!</p>
                            <div className="bottom-icons">
                                <div className="icons pt-2">
                                    <i class="bi bi-facebook px-4 fa-2x icon"></i>
                                    <i class="bi bi-twitter px-4 fa-2x icon"></i>
                                    <i class="bi bi-instagram px-4 fa-2x icon"></i>
                                    <i class="bi bi-linkedin px-4 fa-2x icon"></i>
                                    <i class="bi bi-youtube px-4 fa-2x icon"></i>
                                </div>
                            </div>

                            <div className="pt-5 bottom-content d-flex justify-content-around">
                                <div className="contact-info text-start">
                                    <p class="para line-1 "><i class="bi bi-envelope"></i>contact@company.com</p>
                                    <p class="para line-2 "><i class="bi bi-telephone"></i>(+91)000-0000</p>
                                    <p class="para line-3 "><i class="bi bi-geo-alt"></i>794 Mcallister St</p>
                                    <p class="para line-4 ">San Francisco, 94102</p>
                                </div>
                                <div className="columns d-flex">
                                    <div className="column-1">
                                        <p class='head pb-2'><b>Product</b></p>
                                        <p>Features</p>
                                        <p>Pricing</p>
                                        <p>Case studies</p>
                                        <p>Reviews</p>
                                        <p>Update</p>
                                    </div>
                                    <div className="column-2">
                                        <p class='head pb-2'><b>Company</b></p>
                                        <p>About</p>
                                        <p>Contact us</p>
                                        <p>Careers</p>
                                        <p>Culture</p>
                                        <p>Blog</p>
                                    </div>
                                    <div className="column-3">
                                        <p class='head pb-2'><b>Support</b></p>
                                        <p>Getting started</p>
                                        <p>Help center</p>
                                        <p>Server status</p>
                                        <p>Report a bug</p>
                                        <p>Chat support</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <hr class="thick-line" />
                        <div className="copyrights d-flex justify-content-around">
                            <p>Copyright &copy; {currentYear} DOAGuru InfoSystems</p>
                            <p>All Rights Reserved | <a href="#">Terms and Conditions | <a href="#">Privacy Policy</a></a></p>
                        </div>
                    </div>
                </footer>
            </StyledContact>
        </>
    )
}

export default ContactUs;
const StyledContact = styled.div`

.contact_img{
    width: 20rem;
    
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
    .contact_box {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    
    .box-image {

    }
}


@media screen and (min-width: 320px) and (max-width: 480px) {
    
    .contact_box {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    
    .contact_img {
        width: 200px;
    }
    
    .bottom-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .name-email, .location-mobilenumber {
        flex-direction: column;
        gap: 50%;
    }

    .location-mobilenumber {
        padding-top: 10px;
        margin-top: 0px;
    }

    .inputs {
        width: 100%;
    }

    .email {
        margin-bottom: 20px;
    }

    .icon {
        font-size: 20px;
        
    }

}

`;






