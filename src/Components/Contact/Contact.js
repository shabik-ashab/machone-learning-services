import React from 'react';
import "./Contact.css";
import mail from "../../image/mail.png";
import phone from "../../image/phone.png";
import location from "../../image/location.png";



function Contact() {
    return (
       <div className="mb-5">
           {/* contact header  */}
            <div className="text-center">
                 <h5 className="text-primary">Contact Information</h5>
                <h1>Let's Talk About For Your Business</h1>
        </div>
        {/* contact main  */}
        <div className="container contact-info p-3 d-flex mt-5 ">
            {/* contact item start  */}
            <div className="info-item ">
                <div className="d-flex align-items-center">
                <div className="mt-2">
                <h5>Send An Email</h5>
                <p><small>Don't hesitate to Email</small></p>
                </div>
                <div>
                <img src={mail} className="ms-2" />
                </div>
                </div>
                <div className="info-short">
                    <p>info@erudex.com</p>
                    <p>Support@erudex.com</p>
                </div>
            </div>
             {/* contact item start  */}
            <div className="info-item">
                <div className="d-flex align-items-center">
                <div className="mt-2">
                <h5>Make A Call</h5>
                <p><small>Let’s Talk with our Experts</small></p>
                </div>
                <div>
                <img src={phone} className="ms-2" />
                </div>
                </div>
                <div className="info-short">
                    <p>+00 321 654 98</p>
                    <p>Mon - Fri: 09.00 to 17.00</p>
                </div>
            </div>
              {/* contact item start  */}
            <div className="info-item">
                <div className="d-flex align-items-center">
                <div className="mt-2">
                <h5>Location</h5>
                <p><small>Visit Our Office</small></p>
                </div>
                <div>
                <img src={location} className="ms-2" />
                </div>
                </div>
                <div className="info-short">
                    <p>214, Queens Road 4th Cross</p>
                    <p>New York, 5240</p>
                </div>
            </div>
        </div>
       
       </div>
    )
}

export default Contact
