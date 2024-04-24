import React from 'react';
import './Contact.css';
import {SectionHeader} from '../../Container/index';


const Contact = () => {
  return (
    <div className="contact " id="contact">
       <div className="container py-5  " >
        <div className="row mx-0">
            <div className="col-md-6 d-flex flex-column justify-content-center align-items-stretch">
                <SectionHeader className="pt-0 text-white">
                    <div className="text-white">Contact us</div>
                </SectionHeader>
                <h4 className="text-white py-3 fw-bolder">We Leave A Delicious Memory For You</h4>
                <p className="text-white py-3"> Yummy is one of the best restaurant HTML templates with Bootstrap v4.5.2 CSS 
                framework. You can download and feel free to use this website template layout for your 
                restaurant business. You are allowed to use this template for commercial purposes.
                You are NOT allowed to redistribute the template ZIP file on any template donwnload 
                website. Please contact us for more information.
                </p>
    
            </div>
            <div className="col-md-6 d-flex flex-wrap justify-content-center align-items-center">
              <div className="box1 bg-white text-danger p-3 me-3 rounded">
                <h5 className='text-dark fw-bold'>Phone Numbers</h5>
                <p>080-090-0990</p>     
                <p>080-090-0880</p>
               
              </div>
              <div className="box1 bg-white text-danger p-3  me-3 rounded" >
                <h5 className='text-dark fw-bold'>Emails</h5>
                <p>hello@company.com</p>     
                <p>info@company.com</p>
               
              </div>
            </div>

        </div>

        </div>
    </div>

  )
}

export default Contact
