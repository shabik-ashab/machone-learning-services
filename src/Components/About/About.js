import React from 'react';
import img from "../../image/feature-shape-1.png";
import newImg from "../../image/about.png"
import Contact from '../Contact/Contact';


const About = () => {
    return (
       <div>
            <div className="d-flex mb-5">
           <div className="mt-5">
               <h5 className="text-primary ms-5 mt-5">About Us</h5>
               <h1 className="w-75 ms-5 ">Mission is to Bring The Power Of Ai To Every Buisness</h1>
               <p className="w-75 p-3 ms-5"><small>
               incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</small></p>
               <img src={newImg} className="p-5 me-5" />
               <div className="ms-5">
               <button type="button" class="btn btn-primary p-3 rounded-pill ms-5 px-5">About Us</button>
               </div>
           </div>
           <div>
           <img src={img} className="p-5 me-5" />
           </div>
        </div>
        <div>
            <Contact></Contact>
        </div>
       </div>
    )
}

export default About
