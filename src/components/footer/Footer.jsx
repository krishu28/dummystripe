import React from 'react';
import { nanoid } from 'nanoid';
import useBrand from 'store/footer/brand/useBrand';
import useProducts from 'store/footer/products/useProducts';
import useSolutions from 'store/footer/solutions/useSolutions';
import useCustomSolutions from 'store/footer/customSolutions/useCustomSolutions';
import useDevelopers from 'store/footer/developers/useDevelopers';
import useResources from 'store/footer/resources/useResources';
import useCompany from 'store/footer/company/useCompany';
import { Grid, Typography } from '@mui/material';

import './Footer.scss';
import './Footer-media.scss';

function Footer() {
 
    const companies = ["Faq","Partnership","Disclamer","Privacy Policy", "Terms and condition", "Sitemap", "Contact us"];
    const details = ["(808) 336-2562", "info@getnow-solutions.com","Support@getnow-solutions.com","Sales@getnow-solutions.com"];
    return (
        <>
        <footer className="footer">
            <div className="tall-left">
                <div className="short-left"></div>
            </div>
            <div className="tall-right">
                <div className="short-right"></div>
            </div>

            <div className="footer-content">
                <Grid container spacing={1}>
                    {/* First Section */}
                    <Grid item xs={12} md={3}>
                        <div style={{ padding: '10px' }}>
                            <Typography variant="h4" style={{ fontWeight: '700', fontSize:"clamp(34px, 10vw, 38px)",  }}>About</Typography>
                            <Typography style={{fontSize:"14px", marginTop:"4px"}}>
                                As a result, Getnowpay focuses on offshore and high-risk merchant accounts. Everything that high-risk or offshore merchants require to complete transactions is included in our merchant accounts.
                            </Typography>
                        </div>
                    </Grid>

                    {/* Second Section */}
                    <Grid item xs={12} md={3}>
                        <div style={{ padding:"10px"  }}>
                            <Typography variant="h6" style={{ fontWeight: 'bold', fontSize:"25px" }}>Company</Typography>
                            <Typography>
                            <ol type="disc">
    {companies.map((company, idx) => (
      <li style={{ listStyle: "none", fontSize:"14px", padding:"4px" }} key={idx}>
        {company}
      </li>
    ))}
  </ol>


                            </Typography>
                        </div>
                    </Grid>

                    {/* Third Section */}
                    <Grid item xs={12} md={3}>
                        <div style={{ padding: '10px' }}>
                            <Typography variant="h6" style={{ fontWeight: '700', fontSize:"25px",  }}>Contact Info</Typography>
                            <Typography>

                            <ol >
    {details.map((detail, idx) => (
      <li style={{fontSize:"14px", padding:"4px" }} key={idx}>
        {detail}
      </li>
    ))}
  </ol>
                            </Typography>
                        </div>
                    </Grid>

                    {/* Fourth Section */}
                    <Grid item xs={12} md={3}>
                        <div style={{ padding: '10px' }}>
                            <Typography variant="h6" style={{ fontWeight: '700', fontSize:"25px",  }}>Contact Address</Typography>
                            <Typography style={{fontSize:"14px", padding:"4px" }}>1309 Coffeen Avenue
                                <br />
STE 14945 Sheridan,<br />
Wyoming<br />
82801.</Typography>
                        </div>
                    </Grid>
                </Grid>
            </div>
          
        </footer>
          <div className="new_div">
          hkjgk
      </div>
      </>
    );
}

export default Footer;
