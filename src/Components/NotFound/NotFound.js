import React from 'react';
import img from "../../image/error.png";
import "./NotFound.css"

const NotFound = () => {
    return (
        <div className="text-center mt-5 mb-5 d-flex error container">
            <div className="ms-5">
            <img src={img} className="ms-5" />
            </div>
            <div className="ms-5 mt-5 error-txt">
                <h1 className="mt-5">
                    Oops,
                    <span className="text-danger">
                    nothing here...
                    </span>
                </h1>
                <h1>
                    Error <span  className="text-danger">404</span>
                </h1>
            </div>
        </div>
    );
};

export default NotFound;