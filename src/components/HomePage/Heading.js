import 'animate.css';
import React from 'react';
import {Box,Show} from '@chakra-ui/react';
import HeadingTextMD from './HeadingTextMD';
import HeadingTextSM from './HeadingTextSM';
import 'aos/dist/aos.css';
export default function Heading() {
    return (
        <div>
            <Box height="100vh" data-aos="fade-down" data-aos-delay='100'>
            <Box 
            display="flex"
            textAlign="center"
            alignItems="center"    
            marginBottom={50} 
            justifyContent="flex-start" >
      <Show breakpoint='(min-width: 600px)'>
      <HeadingTextMD/>
  
      </Show>
      </Box>
      <Show breakpoint='(max-width: 600px)'>
      <HeadingTextSM/>  
     </Show>
      </Box>
        </div>
    )
}