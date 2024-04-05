import React from 'react';
import { Carousel } from 'react-bootstrap';
import Divider from '@mui/material/Divider';
import Review1 from './Reviews/Review1';
import Review2 from './Reviews/Review2';
import Review3 from './Reviews/Review3';
import HeadinStyleMD from './HeadingStyleMD';
import HeadinStyleSM from './HeadingStyleSM';
import LayoutStyle from './LayoutStyle';

function ClientReviews() {
  return (
   <LayoutStyle>
      <Divider textAlign="right">
     <HeadinStyleMD>
       Recent Reviews
       </HeadinStyleMD>
       <HeadinStyleSM>
      What does client says about my work.
      </HeadinStyleSM>
      </Divider>
        <Carousel controls={false} indicators={true} style={{ width: '100%' }}>
          <Carousel.Item>
<Review1/>

          </Carousel.Item>
          <Carousel.Item>
<Review2/>
          </Carousel.Item>
          <Carousel.Item>
<Review3/>
          </Carousel.Item>
        </Carousel>
        </LayoutStyle>
  );
}

export default ClientReviews;