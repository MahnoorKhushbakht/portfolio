import * as React from 'react';
import Stack from '@mui/material/Stack';
import Card1 from './Cards/Card1';
import Card2 from './Cards/Card2';
import Card3 from './Cards/Card3';
import Container from '@mui/material/Container';
import 'aos/dist/aos.css';
export default function Skills() {
  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    marginBottom: '200px',
  };


  return (
    <div id="skills" sx={containerStyles}>
      <Container >
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="center"
          alignItems="center"
          maxHeight={'100vh'}
          sx={{ margin: '0 2%' }} 
        >
          <Card1 />
          <Card2 />
          <Card3 />
        </Stack>
      </Container>
    </div>
  );
}
