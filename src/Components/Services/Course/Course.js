import React, { useEffect, useState } from 'react';
import "./Course.css";


const Course = (props) => {
    const{name,img,Price,description}= props.course;
    return (
        <div className="col-lg-4 g-4">
        <div class="card h-100 my-card">
             <img src={img} class="card-img-top h-50 p-3 w-50" alt="..."/>
         <div className="card-body">
            <h4>{name}</h4>
            <p>
                <small>{description}</small>
             </p>
            <p>Starting Price: {Price}$</p>
            <button type="button" class="btn btn-outline-light text-primary">Learn More</button>
        </div>
   </div>
   </div>
    )
}

export default Course
