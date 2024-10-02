import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import mission2 from "../../../src/assets/images/mission2.jpg";

export default function Mission() {
    return (
        <>
              <MDBContainer style={{ marginTop: "5%", backgroundColor: "white", borderRadius: "10px", marginBottom: "5%" }}>
                <MDBRow className="gy-3">
                <MDBCol sm="12" md="6">
                                <div className="text-center" style={{ marginTop: "10%" }}>
                                    <strong style={{ fontSize: "30px" }}>Our Mission</strong>
                                </div>
                                <div className="mx-3">
                                
                                  
                                  
                                    
                                            <p style={{ marginTop: "2px", textAlign: "left" }}>
                                               
                                                At Getnow Solutions LLC, our mission is to empower businesses with innovative and reliable merchant services. We strive to provide comprehensive solutions that meet the unique needs of our clients.By offering high risk merchant services, low merchant services, ecommerce merchant solutions, offshore merchant services, and retail merchant chargeback and fraud management, Getnow Solutions LLC is dedicated to supporting businesses in achieving seamless and secure payment processing.
                                              
                                            </p>
                                             </div>
                            </MDBCol>
                            <MDBCol sm="12" md="6" style={{ padding: "10px" }}>
                                <div style={{ boxShadow: "2px", marginTop: "7%" }}>
                                    <img src={mission2} className="img-fluid img-fluids" alt="image" />
                                </div>
                            </MDBCol>
                  


                </MDBRow>
              </MDBContainer>
        </>
    )}