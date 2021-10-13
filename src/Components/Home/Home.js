import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import img from "../../image/header-shape.png";
import Services from '../Services/Services';
import "./Home.css";

const Home = () => {
    return (
        <div className="mb-5">
        <div className="home mt-5 d-flex">
        <img src={img} className="h-50 w-50" />
        <div className=" home-txt ms-5">
            <h1 className="mt-4 p-2">
                Best Machine Learning Product Creator
            </h1>
            <p className="p-3 w-75">
               <small> We have 10 years of exprine with machine learning.We designed ML model That is used by many.And we are teaching ML for over 5 years.</small>
            </p>
            <div className="mt-2">
            <Button className="ms-5  rounded-pill p-3 px-5" variant="outline-primary">Start a free trail</Button>{' '}
            <Button className="ms-5  rounded-pill p-3 px-5" variant="primary">getting started</Button>{' '}
            </div>
        </div>      
    </div>
    <div className="">
    <Services></Services>
    </div>
    </div>
    );
};

export default Home;
