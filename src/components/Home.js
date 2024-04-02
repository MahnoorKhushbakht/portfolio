import 'animate.css';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Heading from './HomePage/Heading';
import 'aos/dist/aos.css';
export default function Home(){
    return(
        <div  data-aos="fade-up" id='home' >
         <ChakraProvider>
            <Heading/>
         </ChakraProvider>
         </div>
    )
}

