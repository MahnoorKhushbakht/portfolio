import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import BackgroundExp from './BackgroundExp';

const CenteredContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
});

const Container = styled('div')({
  position: 'relative',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  borderRadius: '10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});




export default function AboutMe() {
  return (
    <div id='about' minHeight='100vh'>
    <CenteredContainer>
      <Container>
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'center',
            width:'60%',
            height:'80%',
            alignItems: 'center',
          }}
        >

          <BackgroundExp/>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'flex', md: 'none' },
            justifyContent: 'center',
            height:'100%',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <BackgroundExp />
        </Box>
      </Container>
    </CenteredContainer>
    <div className='text-center p-4' style={{ backgroundColor: '#4f4a452a', color:'#d6d6d6'}}>
       <p style={{fontSize:'16px'}}>© 2023 Copyright</p>
       <p style={{fontSize:'16px'}}>Created By Mahnoor Khushbakht</p>
    </div>
    </div>
  );
}
