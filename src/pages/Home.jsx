// Home.js
import React from 'react';
import Hero from 'components/hero/Hero';
import Brands from 'components/brands/Brands';
import Unified from 'components/unified/Unified';
import Pictures from 'components/pictures/Pictures';
import Terminal from 'components/terminal/Terminal';
import Approach from 'components/approach/Approach';
import Scale from 'components/scale/Scale';
import More from 'components/more/More';
import Anothercard from 'components/card/anothercard';

function Home() {
    return (
        <main>
            <Hero />
            <Brands />
            <div data-aos="fade-up-right">
                <Unified />
            </div>
            <div data-aos="fade-in">
                <Pictures />
            </div>
            <div >
                <Terminal />
            </div>
          
            <div data-aos="fade-left">
                <Approach />
            </div> 
            <Anothercard />
            <Scale />
            <More />
        </main>
    );
}

export default Home;
