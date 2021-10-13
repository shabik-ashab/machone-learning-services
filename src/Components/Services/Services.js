import React, { useContext, useEffect, useState } from 'react';
import { CardContext } from '../../App';
import Course from './Course/Course';
import "./Services.css";

const Services = () => {
    // getting the value of card with context api 
    // card help us to know the current page 
    const card = useContext(CardContext);
    // using state to set courses we get from api 
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [card]);
    // we will show cards in home page  
    if(card === 'home'){
        courses.length = 4;
    }
    return (
        <div>
            <header className="text-center mt-5">
                <h5 className="text-primary">Services</h5>
                <h1 className="w-75 ">Our Purpose is to Deliver Excellence
                    In Service And Execution
                </h1>
            </header>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 mb-5 ms-3 me-3">
                {/* using map to send data and creating cards in ui  */}
                {
                    courses.map(course => <Course
                        Key = {course.name}
                        course={course}
                    ></Course>)
                }
            </div>
        </div>
    )
}

export default Services
