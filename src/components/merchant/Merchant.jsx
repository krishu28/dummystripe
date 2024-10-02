import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import about from "../../../src/assets/images/high_risk.jpeg";
import low from "../../../src/assets/images/low_risk.jpeg";
import blog from "../../../src/assets/images/blog.jpg";
import free from "../../../src/assets/images/free.jpg";
import retail from "../../../src/assets/images/retail.jpg";
import "./merchant.css";
const merchantData = [
    {
        title: "High Risk Merchant Account",
        content: "Starting a business and applying for a merchant account can be challenging, especially when navigating the approval process by risk departments. Businesses are classified as high-risk or low-risk, which can affect the approval of merchant accounts. Several factors may categorize a business as high-risk. Getnow Solutions LLC offers tailored Merchant Solutions to help businesses, whether high-risk or low-risk, secure the necessary accounts and manage their payment processing efficiently.",
        extraContent: "",
        risks: [
            "Questionable sales and marketing tactics.",
            "Potential legal and financial liability.",
            "Your credit is really bad.",
            "Industries with excessive chargebacks or fraud incidents.",
            "Trial continuity business.",
            "Previous credit card processing is not good enough.",
            "You’ve been branded as a terminated merchant (TMF)."
        ],
        image: about
    },
    {
        title: "Low Risk Merchants",
        content: "Prior applying for a merchant account, you must know if your business comes under low-risk. Merchants in our payment processing world come under low-risk, medium-risk, and high-risk categories. Various factors collectively decide the risk category for a particular business.",
        extraContent: "",
        examples: [
            "Home Goods/Retail Shop.",
            "Pet Supplies.",
            "Movies, CD’s and Books.",
            "Beauty & Health.",
            "Office Supplies."
        ],
        image: low
    },
    {
        title: "E-commerce Merchants",
        content: "We all are very well aware that when Business and commercial activities are done electronically it is referred to as E-commerce. The present and future of shopping is online, and numerous start-ups are achieving their goals through E-commerce.",
        extraContent: "Present and future of Shopping is online and will be completely online. And this the reason we are seeing numerous start-ups, entrepreneurs starting up with E-Commerce business and achieving their goals and growing globally. It helps a merchant to connect with their customers beyond the boundaries, and even made customer’s experience also fast, seamless, and most convenient.",
        image: blog
    },{
      title: "Offshore Merchant Accounts",
      content: "We know very well about the Merchant Account Services. All we need is to understand The term “offshore”. Well, It is a type of account for a merchant in a non-resident country. So, it is a direct account but not a domestic account. It helps the merchant to process payments through their website and allows them in making a transaction and process their sale. It offers and contains all the features just like the regular and domestic merchant account. There can also be both the categories which support High-risk Business and Low risk Business.",
      extraContent:"Often people consider that offshore merchant account is for High Risk Businesses or for such businesses that cannot get approval by their domestic banks. But this is not the case it is only the location ma",
      image: free
    },{
      title:"Retail Merchant",
      content: "Any business involved in selling finished merchandise to an end user is considered a retail business. According to figures released by the U.S. Census Bureau, the following is a list of 13 major types of retail businesses along with the percentage of total sales they generate annually in the United States. Getnow Solutions LLC offers specialized Merchant Solutions to support these retail businesses in managing their payment processing needs efficiently, ensuring smooth transactions and enhanced customer satisfaction.",
      extraContent:"In order to strengthen and update the retail business, and to meet the requirements of the customers and as an advancement in providing the customers all the ways to make the payment Merchant needs an account or merchant services for which they look for a reliable and stable Merchant Service Provider.",
      image : retail
    }
];

function Merchant() {
    return (
        <MDBContainer style={{ marginTop: "5%", backgroundColor: "white", borderRadius: "10px", marginBottom: "5%" }}>
            {merchantData.map((item, index) => (
                <MDBRow key={index} className="gy-3">
                    {index % 2 === 0 ? (
                        <>
                            <MDBCol sm="12" md="6">
                                <div className="text-center" style={{ marginTop: "10%" }}>
                                    <strong style={{ fontSize: "30px" }}>{item.title}</strong>
                                </div>
                                <div className="mx-3">
                                    <p style={{ padding: "2px" }}>{item.content}</p>
                                    {item.extraContent && (
                                        <p style={{ padding: "2px" }}>{item.extraContent}</p>
                                    )}
                                    {item.risks && (
                                        <>
                                            <p style={{ marginTop: "2px", textAlign: "center" }}>
                                                <strong style={{ fontWeight: "900", fontSize: "20px" }}>
                                                    Risk factors that make a business HIGH RISK
                                                </strong>
                                            </p>
                                            <ul style={{ listStyleType: "disc" }}>
                                                {item.risks.map((risk, idx) => (
                                                    <li key={idx}>{risk}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    {item.examples && (
                                        <>
                                            <p style={{ marginTop: "2px", textAlign: "center" }}>
                                                <strong style={{ fontWeight: "900", fontSize: "20px" }}>
                                                    Some examples of Low Risk Industries include:
                                                </strong>
                                            </p>
                                            <ul style={{ listStyleType: "disc" }}>
                                                {item.examples.map((example, idx) => (
                                                    <li key={idx}>{example}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                </div>
                            </MDBCol>
                            <MDBCol sm="12" md="6" style={{ padding: "10px" }}>
                                <div style={{ boxShadow: "2px", borderRadius: "10%", marginTop: "7%" }}>
                                    <img src={item.image} className="img-fluid img-fluidss img-fluids" alt={item.title} />
                                </div>
                            </MDBCol>
                        </>
                    ) : (
                        <>
                            <MDBCol sm="12" md="6" style={{ padding: "10px" }}>
                                <div style={{ boxShadow: "2px", borderRadius: "10%", marginTop: "7%" }}>
                                    <img src={item.image} className="img-fluid img-fluidss img-fluids" alt={item.title} />
                                </div>
                            </MDBCol>
                            <MDBCol sm="12" md="6">
                                <div className="text-center" style={{ marginTop: "10%" }}>
                                    <strong style={{ fontSize: "30px" }}>{item.title}</strong>
                                </div>
                                <div className="mx-3">
                                    <p style={{ padding: "2px" }}>{item.content}</p>
                                    {item.extraContent && (
                                        <p style={{ padding: "2px" }}>{item.extraContent}</p>
                                    )}
                                    {item.risks && (
                                        <>
                                            <p style={{ marginTop: "2px", textAlign: "center" }}>
                                                <strong style={{ fontWeight: "900", fontSize: "20px" }}>
                                                    Risk factors that make a business HIGH RISK
                                                </strong>
                                            </p>
                                            <ul style={{ listStyleType: "disc" }}>
                                                {item.risks.map((risk, idx) => (
                                                    <li key={idx}>{risk}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    {item.examples && (
                                        <>
                                            <p style={{ marginTop: "2px", textAlign: "center" }}>
                                                <strong style={{ fontWeight: "900", fontSize: "20px" }}>
                                                    Some examples of Low Risk Industries include:
                                                </strong>
                                            </p>
                                            <ul style={{ listStyleType: "disc" }}>
                                                {item.examples.map((example, idx) => (
                                                    <li key={idx}>{example}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                </div>
                            </MDBCol>
                        </>
                    )}
                </MDBRow>
            ))}
        </MDBContainer>
    );
}

export default Merchant;
