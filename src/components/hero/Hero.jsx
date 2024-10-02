import React from 'react';
import desktop from '../../assets/images/desktop.jpg';
import phone from './images/phone1.png';

import './Hero.scss';
import './Hero-media.scss';

function Hero() {
    return (
        <section className="hero">
            <div>
                <div className="hero-title-container">
                    <h1 className="title title-main ">
                        Payments infrastructure <br />
                        for the internet
                    </h1>
                    <p className="title title__second">
                        Payments infrastructure <br />
                        for the internet
                    </p>
                    <p className="title title__overlay">
                        Payments infrastructure <br />
                        for the internet
                    </p>
                </div>

                <div className="hero-desc-container">
                    <p className="desc">
                        Millions of businesses of all sizes—from startups to
                        large enterprises—use Get_Now_Pay’s software and APIs to
                        accept payments, send payouts, and manage their
                        businesses online.
                    </p>
                </div>

                <div className="hero-btn-container">
                    <button className="btn1">Start now &gt;</button>
                    <button className="btn2">Contact sales &gt;</button>
                </div>
            </div>
 
            <div className="hero-pictures" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                <img className="desktop" src={desktop} alt="desktop" />
                <img className="phone bounce" src={phone} alt="phone" />
            </div>
        </section>
    );
}

export default Hero;
