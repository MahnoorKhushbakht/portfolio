import * as React from 'react';
import Box from '@mui/material/Box';
import 'aos/dist/aos.css';
import Typography from '@mui/material/Typography';
import ProjectSM from './Project/ProjectsSM';
import ProjectMD from './Project/ProjectsMD';


export default function Projects() {

  return (
    <div id='projects' minHeight="100vh" height='100vh'>
     <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems:"center", flexDirection:"column"}} >
      <Typography  data-aos="fade-down" data-aos-delay='100' fontSize='25px' color={'white'} variant="h5" fontWeight='bold' marginBottom={'10px'} fontFamily='Helvetica, Arial'>
        My Web Projects
      </Typography>
      <Typography data-aos="fade-down" data-aos-delay='100' alignItems="center" width='80%' sx={{ fontSize: '15px',width: { xs: '80%', md: '50%' }}} color={'rgba(255, 255, 255, 0.856)'} variant="h4" fontStyle='italic' marginBottom={'15px'} fontFamily='Helvetica, Arial'>
      Projects done successfully for my Clients.
      </Typography>   
        <ProjectSM/>
     </Box>
     <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems:"center",flexDirection:"column"}} >
      <Typography  data-aos="fade-down" data-aos-delay='100' sx={{ fontSize:'30px' }} color={'white'} variant="h5" fontWeight='bold' marginBottom={'10px'} fontFamily='Helvetica, Arial'>
        My Web Projects
      </Typography>
      <Typography data-aos="fade-down" data-aos-delay='100' alignItems="center" width='80%' sx={{ fontSize:'20px', width: { xs: '80%', md: '50%' },marginBottom:'15px' }} color={'rgba(255, 255, 255, 0.856)'} variant="h4" fontStyle='italic' fontFamily='Helvetica, Arial'>
      Projects done successfully for my Clients.
      </Typography>   
        <ProjectMD/>
     </Box>
    </div>
  );
}
