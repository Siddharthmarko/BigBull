import React from 'react';
import img from './../images/contact-logo.png';
// import imag from './../images/bigbulllogo.png';
const imag = 'https://media.licdn.com/dms/image/C4E0BAQE6c_gHVXL1CQ/company-logo_200_200/0/1658297696916?e=2147483647&v=beta&t=rSQBljEav4Wr94uPYEShnJIammNfmOY6mTwMQojLrYQ';
// import d from './../images/contact-logo.png';

function ContactUs() {
    const data = new Date();
    const currentYear = data.getFullYear();

    console.log(currentYear);

    return (
        <>
        <section className="py-24">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 grid-cols-1">
      <div className="lg:mb-0 mb-10">
        <div className="group w-full h-full">
          <div className="relative h-full">
            <img
              src="https://pagedone.io/asset/uploads/1696488602.png"
              alt="ContactUs tailwind section"
              className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-indigo-700"
            />
            <div className="absolute bottom-0 w-full lg:p-11 p-5">
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
        <h2 className="text-indigo-600 font-manrope text-4xl font-semibold leading-10 mb-11">
          Send Us A Message
        </h2>
        <input
          type="text"
          className="w-full h-12 text-gray-600 placeholder-gray-400  shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
          placeholder="Name"
        />
        <input
          type="text"
          className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
          placeholder="Email"
        />
        <input
          type="text"
          className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
          placeholder="Phone"
        />
        {/* <div className="mb-10">
          <h4 className="text-gray-500 text-lg font-normal leading-7 mb-4">
            Preferred method of communication
          </h4>
          <div className="flex">
            <div className="flex items-center mr-11">
              <input
                id="radio-group-1"
                type="radio"
                name="radio-group"
                className="hidden checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
              />
              <label
                htmlFor="radio-group-1"
                className="flex items-center cursor-pointer text-gray-500 text-base font-normal leading-6"
              >
                <span className="border border-gray-300 rounded-full mr-2 w-4 h-4  ml-2 " />{" "}
                Email
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="radio-group-2"
                type="radio"
                name="radio-group"
                className="hidden checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
              />
              <label
                htmlFor="radio-group-2"
                className="flex items-center cursor-pointer text-gray-500 text-base font-normal leading-6"
              >
                <span className="border border-gray-300  rounded-full mr-2 w-4 h-4  ml-2 " />{" "}
                Phone
              </label>
            </div>
          </div>
        </div> */}
        <input
          type="text"
          className="w-full h-12 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
          placeholder="Message"
        />
        <button className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:bg-indigo-800 bg-indigo-600 shadow-sm">
          Send
        </button>
      </div>
    </div>
  </div>
</section>

                   </>
    )
}

export default ContactUs;
 {/* <div className="bg-gray-50 min-h-screen">
                <header>
                    <div className="shadow-sm flex justify-between items-center p-4 bg-white">
                        <img src={imag} alt="" className="w-24" />
                        <div className="p-3">
                            <i className="bi bi-list fa-2x text-2xl"></i>
                        </div>
                    </div>
                </header>
                <div className='container mx-auto'>
                    <div className="bg-white py-10 flex flex-col items-center">
                        <div className="text-center py-3">
                            <h1 className="text-3xl font-bold">Contact Us.</h1>
                        </div>
                        <div className='w-full flex justify-center'>
                            <form className='w-full max-w-lg'>
                                <div className="bg-white shadow-lg p-6 mb-6 rounded-lg">
                                    <div className="text-dark flex flex-wrap">
                                        <div className="w-full flex justify-center">
                                            <img className='contact-img' src={img} alt="" className="w-80" />
                                        </div>
                                        <div className="w-full flex flex-col items-center mt-4">
                                            <div className="flex flex-col md:flex-row justify-between w-full gap-4">
                                                <div className="flex flex-col w-full">
                                                    <label className="text-gray-700" htmlFor="form4Example1">Name</label>
                                                    <input type="text" id="form4Example1" className="form-control border border-gray-400 p-2 rounded-md mb-4" />
                                                </div>

                                                <div className="flex flex-col w-full">
                                                    <label className="text-gray-700" htmlFor="form4Example2">Email</label>
                                                    <input type="email" id="form4Example2" className="form-control border border-gray-400 p-2 rounded-md" />
                                                </div>
                                            </div>

                                            <div className="flex flex-col md:flex-row justify-between w-full gap-4 mt-4">
                                                <div className="flex flex-col w-full">
                                                    <label className="text-gray-700" htmlFor="form4Example3">Location</label>
                                                    <input type="text" id="form4Example3" className="form-control border border-gray-400 p-2 rounded-md mb-4" />
                                                </div>

                                                <div className="flex flex-col w-full">
                                                    <label className="text-gray-700" htmlFor="form4Example4">Mobile Number</label>
                                                    <input type="text" id="form4Example4" className="form-control border border-gray-400 p-2 rounded-md" />
                                                </div>
                                            </div>

                                            <div className="w-full mt-4">
                                                <textarea className="form-control border border-gray-400 p-2 rounded-md w-full" id="form4Example5" rows="4" placeholder='Text your message here'></textarea>
                                            </div>

                                            <div className="form-check pt-4 flex items-center">
                                                <input className="form-check-input border-gray-400 rounded mr-2" type="checkbox" id="check" />
                                                <label className="form-check-label" htmlFor="check">
                                                    I agree to our friendly <a href="#" className='text-blue-500 underline'>Privacy Policy</a>
                                                </label>
                                            </div>

                                            <div className="form-check pt-5 w-full text-center">
                                                <button type="button" className="btn btn-danger w-full bg-red-500 text-white p-2 rounded-md">Send Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                            </form>
                        </div>
                    </div>
                </div>
            </div> */}
