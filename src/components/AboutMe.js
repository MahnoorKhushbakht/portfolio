import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import BackgroundExp from './BackgroundExp';
import ProfileImage from './images/ProfileImage.png';
import Typography from '@mui/material/Typography';
import SocialIcon from './SocialIcon';
import Footer from './Footer';

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

const Image = styled('img')(({ theme }) => ({
  borderRadius: '50%',
  width: theme.breakpoints.values.xs === '100px' ? '100px' : '200px',
  height: theme.breakpoints.values.xs === '100px' ? '100px' : '200px',
  margin: '5px 5px',
}));


export default function AboutMe() {
  return (
    <div id='about'>
      <CenteredContainer>
        <Container>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection:'column',
              alignItems: 'center',
              width: { xs: '70%', md: '50%' },
              height: '60%',
            }}
          >
                  <Image src={ProfileImage} alt="Profile Image" />
        <Typography  data-aos="fade-down" data-aos-delay='100' sx={{ fontSize: { xs: '20px', md: '25px' }}} color={'white'} variant="h5" fontWeight='bold' marginBottom={'10px'} fontFamily='Helvetica, Arial'>
        About Me
      </Typography>
            <BackgroundExp />
            <SocialIcon/>
          </Box>
        </Container>
      </CenteredContainer>
      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', color:'#d6d6d6'}}>
         <Footer/>
      </div>
    </div>
  );
}
