import 'animate.css';
import React from 'react';
import { Box, Highlight, Heading, Text,ChakraProvider } from '@chakra-ui/react';
import Typewriter from 'typewriter-effect';
import Btn from './Btn';
import TagBar from './TagBar';
import 'aos/dist/aos.css';
import TagLine from './TagLine';

export default function HomePage() {
  return (
    <ChakraProvider>
    <Box 
      sx={{
        maxWidth:'100%',
        display: "flex",
        textAlign: "left",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flexDirection:'column',
        marginBottom: '50px',
        marginLeft: { sm: '25px', md: '110px' }, 
      }}
      data-aos="fade-down"
      data-aos-delay='100'
      id='home'
    >
      <Box sx={{ width: { base: '95%', md: '70%' }, marginTop: ['5%', '5%'] }}> 
      <TagLine/>
        <Heading
          sx={{ fontSize: { base: '32px', md: '50px' }, textAlign: 'left', fontFamily: 'Helvetica, Arial' }}
          lineHeight="tall"
          className="animate__animated animate__fadeInUp"
          color='white'
        >
          Hi there,
          <br />
          <Highlight
            query={['Mahnoor Khushbakht']}
            styles={{ color: 'white', px: '4', py: '3', rounded: 'full', bg: '#6c58a3' }}
            className="animate__animated animate__bounce"
          >
            I'm Mahnoor Khushbakht
          </Highlight>
        </Heading>
        <Text
          sx={{ fontSize: { base: '32px', md: 'px' }, fontFamily: 'Helvetica, Arial' }}
          className="animate__animated animate__fadeInUp"
          color='white'
        >
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Website Developer")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Let's Grow Together!!")
                .start();
            }}
          />
        </Text>
        <Btn />
        <TagBar />
      </Box>
    </Box>
    </ChakraProvider>
  );
}
