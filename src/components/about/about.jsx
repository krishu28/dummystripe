import React from 'react';
import { MDBContainer, MDBRow, MDBCol,  MDBCard, MDBCardHeader, MDBCardBody, MDBCardTitle,MDBCardText,MDBCardFooter} from 'mdb-react-ui-kit';
import about from "../../../src/assets/images/about-us.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./about.css";
import bulb from "../../assets/images/bulb.jpg";
import mission from "../../assets/images/mission.jpg";
import Accord from 'components/accordion/accordion';
import Card from "components/card/card";
import Anothercard from 'components/card/anothercard';
const About = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    
<div >

<MDBContainer style={{marginTop:"32%", borderRadius:"10px", marginBottom:"5%"}}>
      <MDBRow className="gy-3">
        <MDBCol  sm='12' md="6" style={{padding:"10px"}}>
          <div style={{boxShadow:"2px", borderRadius:"10%"}} >
          <img src={about} className="img-fluid img-fluids" alt="about" />
          </div>
        </MDBCol>
        <MDBCol  sm="12" md="6">
          <div className="text-center" style={{marginTop:"10%"}}>
         <strong style={{fontSize:"30px"}}> Your Partner in Payment <b style={{color:"#C87D8F"}}>Processing</b> </strong>
            </div>
            <div className="mx-3">
            <p style={{padding:"2px"}}>Welcome to Getnow Solutions LLC, where we specialize in delivering top-tier payment processing services tailored to meet diverse business needs. As a leading merchant payment processing provider, we offer innovative and reliable solutions designed to facilitate seamless transactions. Whether you require online credit card processing, merchant payment processing, or online payment providers, our comprehensive suite of services has you covered.</p>
            <p style={{marginTop:"2px"}}>
              <strong>
              With </strong>expertise in high risk merchant services, low risk merchant services, ecommerce merchant solutions, offshore merchant services, and retail merchant chargeback and fraud management, Getnow Solutions LLC is dedicated to supporting businesses with secure and efficient payment solutions.</p>
              </div>
        </MDBCol>
     
      </MDBRow>
    </MDBContainer>
    <div className="text-center fonts" style={{marginBottom:"2%"}}>Mission And Vision</div>
    <div style={{marginBottom:"5%"}}>
    <Carousel responsive={responsive} arrows={false} infinite={true} autoPlay={true} autoPlaySpeed={2000} focusOnSelect={true}>
<div className="p-3">   <MDBCard alignment=' img-hover'>
      <MDBCardHeader className='text-center'>
        <img src={bulb} className=" p-5 "  style={{width:"50%"}} alt="bulb" />
      </MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>
          <h2>Our Mission</h2></MDBCardTitle>
        <MDBCardText >At Getnow Solutions LLC, our mission is to empower businesses by offering cutting-edge payment processing services that drive success. We are committed to providing innovative solutions, including merchant payment processing, online credit card processing, and online payment providers, to meet the unique needs of our clients. Our goal is to ensure that your business benefits from seamless, secure, and efficient transaction processing, helping you achieve your objectives with confidence.</MDBCardText>
       
      </MDBCardBody>
      <MDBCardFooter>2 days ago</MDBCardFooter>
    </MDBCard>
</div>
<div className="p-3"> 
    <MDBCard alignment=' img-hover'>
      <MDBCardHeader className='text-center'>
      <img src={mission} className="p-2" style={{width:"50%"}} />
      </MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle><h2>Our Vision</h2></MDBCardTitle>
        <MDBCardText>Getnow Solutions LLC envisions a future where businesses of all sizes can access advanced payment processing services and comprehensive support. We aim to be the leading provider in merchant payment processing, online credit card processing, and online payment providers. Our vision is to build a secure and efficient payment ecosystem that promotes growth, innovation, and success for our clients in an evolving market. Through our commitment to excellence, we strive to shape the future of payment processing and deliver unparalleled value to businesses worldwide.</MDBCardText>
       
      </MDBCardBody>
     
    </MDBCard>
</div>
    </Carousel>
    </div>
    <div className="text-center fonts" style={{marginBottom:"2%"}}>Frequently asked Question</div>
    <div style={{marginBottom:"10%"}}>
      <Card />
   
    <Accord />
    </div>
</div>
  );
};

export default About;
