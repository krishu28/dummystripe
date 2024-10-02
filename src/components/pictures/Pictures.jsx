import React from 'react';
import { Grid, Box } from '@mui/material';
import visa from '../../assets/images/visa.png';
import invoice from '../../assets/images/invoice.png';
import payment from '../../assets/images/terminal.png';
import phone from '../../assets/images/phone2.png';
import fraud from '../../assets/images/fraud.webp';

import './Pictures.scss'; // Keep your SCSS for additional styles

function Pictures() {
    return (
        <section className="pictures" style={{padding:"2%"}}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4} lg={3} data-aos="fade-up">
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={visa} alt="visa" style={{ width: '100%', height: 'auto', borderRadius: '2rem' }} />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} data-aos="fade-up">
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={invoice} alt="invoice" style={{ width: '100%', height: 'auto', borderRadius: '1rem' }} />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} data-aos="fade-up">
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={invoice} alt="payment" style={{ width: '100%', height: 'auto', borderRadius: '4.5rem' }} />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} data-aos="fade-up">
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={invoice} alt="phone" style={{ width: '100%', height: 'auto', borderRadius: '5rem' }} />
                    </Box>
                </Grid>
                {/* <Grid item xs={12} md={8} lg={6}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={fraud} alt="fraud" style={{ width: '100%', height: '300px', borderRadius: '1rem' }} />
                    </Box>
                </Grid> */}
            </Grid>
        </section>
    );
}

export default Pictures;



