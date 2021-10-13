import React from 'react';
import img from "../../image/logo.png"

function Footer() {
    
    return (
        <div className="text-center py-4 bg-secondary">
            <img src={img} className="p-5 me-5" />
            <p>
            Our purpose is to deliver excellence in service and execution Our purpose is
            </p>
           <p> <small>
               Copyright &copy;2021 Erudex. Designed & Developed By Shabik
               </small></p>
        </div>
    )
}

export default Footer;
