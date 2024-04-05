import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import { Button, ChakraProvider} from '@chakra-ui/react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
export default function Footer() {
  const linkStyles = {
    color: 'white',
    fontSize: { base: '12px', md: '18px' },
    fontFamily: 'Helvetica, Arial',
    textDecoration: 'none', 
    padding: '5px',
    marginRight: { base: '2px', md: '10px' }, 
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed           display='flex'
          justifyContent='center' alignItems='center'>
      <ChakraProvider>
        <Button
        size={{ base: 'md', md: 'lg' }}
          marginLeft='8px'
          fontFamily="Helvetica, Arial"
          sx={{
           background: 'white',
            color: '#6c58a3',
            '&:hover': {
              background: '#6c58a3',
              color: 'white',
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
        </div>
  <p  style={{ fontFamily: 'Helvetica, Arial', fontSize:'14px'}}><MailOutlineIcon /> mahnoorkhushakht@gmail.com</p>
  <p  style={{ fontFamily: 'Helvetica, Arial', fontSize:'14px'}}>@ 2023 Copyright</p>
  <p  style={{ fontFamily: 'Helvetica, Arial', fontSize:'14px'}}>Created By Mahnoor Khushbakht</p>
      </Container>
    </React.Fragment>
  );
}
