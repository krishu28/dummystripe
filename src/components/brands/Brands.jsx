import React,{useEffect} from 'react';
import booking from '../../assets/images/booking.svg';
import statista from '../../assets/images/statista.svg';
import shareNow from '../../assets/images/shareNow.svg';
import joyn from '../../assets/images/joyn.svg';
import asos from '../../assets/images/asosMarketplace.svg';
import sales from '../../assets/images/salesforce.svg';
import axel from '../../assets/images/axelSpringer.svg';
import shopify from '../../assets/images/shopify.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Brands.css";
import './Brands-media.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
function Brands() {
    useEffect(() => {
        AOS.init();
      }, []);
      const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        }, 
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };
    return (
       <>
              <div data-aos="fadeup"> 
       
            <Carousel responsive={responsive} arrows={false} infinite={true} autoPlay={true} autoPlaySpeed={2000}>
           
            <div > 
                <img src={booking} alt="" />
            </div>
          
           
            <div  >
                <img src={statista} alt="" />
            </div>
         
            <div  >
                <img src={shareNow} alt="" />
            </div>
           
            <div  >
                <img src={joyn} alt="" />
            </div>
          
            </Carousel>
          </div>

           <div data-aos="fadeup" style={{marginTop:"5%"}}> 
       
            <Carousel responsive={responsive} arrows={false} infinite={true} autoPlay={true} style={{marginTop:"20px"}}>
           
            <div>
                <img src={asos} alt="" />
            </div >
          
           
            <div  >
                <img src={sales} alt="" />
            </div>
          
           
            <div  >
                <img src={axel} alt="" />
            </div>
          
           
            <div  >
                <img src={shopify} alt="" />
            </div>
      
            </Carousel>
        </div>
        </>

    );
}

export default Brands;
