import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import { Button, ChakraProvider} from '@chakra-ui/react';
import SocialNav from './SocialNav';
import ContactMe from './ContactMe';
export default function Footer() {
  const linkStyles = {
    color: 'white',
    fontSize: '18px',
    fontFamily: 'Helvetica, Arial',
    textDecoration: 'none', 
    padding: '5px',
    marginRight: '10px', // Add margin between links
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed           display='flex'
          justifyContent='center' alignItems='center'>
        <p  style={{ fontFamily: 'Helvetica, Arial', fontSize:'12px'}}>CONNECT WITH ME</p>
      <ChakraProvider>
        <Button
        size={{ base: 'md', md: 'lg' }}
          marginLeft='8px'
          fontFamily="Helvetica, Arial"
          sx={{
           background: '#6c58a3',
            color: 'white',
            '&:hover': {
              background: 'white',
              color: '#6c58a3',
            },
          }}
        >
  <a href="#contact" style={{ textDecoration: 'none', color: 'inherit' }}>
    Contact Me
    </a>
        </Button>
        </ChakraProvider>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: '10px 0' }}>
          <a href="#home" style={linkStyles}>Home</a>
          <a href="#background" style={linkStyles}>Experience</a>
          <a href="#contact" style={linkStyles}>Contact</a>
          <a href="#about" style={linkStyles}>About</a>
          <a href="#skills" style={linkStyles}>Skills</a>
          <a href="#services" style={linkStyles}>Services</a>
          <a href="#reviews" style={linkStyles}>Reviews</a>
        </div>
     <ContactMe/>
      </Container>
    </React.Fragment>
  );
}
