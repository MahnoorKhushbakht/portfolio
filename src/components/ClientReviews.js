import React from 'react';
import { Carousel } from 'react-bootstrap';
import Typography from '@mui/material/Typography';
import Review1 from './Reviews/Review1';
import Review2 from './Reviews/Review2';

function ClientReviews() {
  return (
    <div id='review' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' ,minHeight:"100vh" ,height:'100vh' }}>
      <Typography  data-aos="fade-down" data-aos-delay='100' sx={{marginBottom:'10px', fontSize: { xs: '25px', md: '30px' }}} color={'white'} variant="h5" fontWeight='bold' fontFamily='Helvetica, Arial'>
       Recent Reviews
      </Typography>
      <Typography data-aos="fade-down" data-aos-delay='100' width='80%' sx={{ fontSize: { xs: '15px', md: '20px' },width: { xs: '80%', md: '50%' }, marginBottom:'15x'}} color={'rgba(255, 255, 255, 0.856)'} variant="h4" fontStyle='italic' fontFamily='Helvetica, Arial'>
      What does client says about my wprk.
      </Typography>  
        <Carousel controls={false} indicators={false} style={{ width: '100%' }}>
          <Carousel.Item>
<Review1/>

          </Carousel.Item>
          <Carousel.Item>
<Review2/>
          </Carousel.Item>
        </Carousel>
      </div>
  );
}

export default ClientReviews;