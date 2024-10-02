import React from "react";

import "./another.css"

export default function Anothercard(){
    return(
        <>
        <div className="container">
        <div className="drop" style={{}}>
            <div className="content">
                <h2>01</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, magnam!</p>
                <a href="#">Read More</a>
            </div>
        </div>
        <div className="drop" style={{}}>
            <div className="content">
                <h2>02</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, magnam!</p>
                <a href="#">Read More</a>
            </div>
        </div>
    </div>
        </>
    )
}