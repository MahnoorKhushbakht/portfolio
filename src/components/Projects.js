import * as React from 'react';
import Box from '@mui/material/Box';
import 'aos/dist/aos.css';
import ProjectSM from './Project/ProjectsSM';
import ProjectMD from './Project/ProjectsMD';
import Divider from '@mui/material/Divider';
import HeadinStyleMD from './HeadingStyleMD';
import HeadinStyleSM from './HeadingStyleSM';
import LayoutStyle from './LayoutStyle';

export default function Projects() {
  return (
<LayoutStyle>
      <Divider textAlign="left">
<HeadinStyleMD>
          My Web Projects
          </HeadinStyleMD>
<HeadinStyleSM>
          Projects done successfully for my Clients.
          </HeadinStyleSM>
        </Divider>
        <Box
        sx={{
          display: { xs: 'flex', md: 'none' },
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent:'center',
        }}
      >  
        <ProjectSM />
      </Box>
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          alignItems: 'center',
          justifyContent:'center',
          flexDirection: 'column'
        }}
      >

        <ProjectMD />
      </Box>
      </LayoutStyle>
  );
}
