import * as React from 'react';
import Stack from '@mui/material/Stack';
import Card1 from './Cards/Card1';
import Card2 from './Cards/Card2';
import Card3 from './Cards/Card3';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';  
import Divider from '@mui/material/Divider';
import HeadinStyleSM from './HeadingStyleSM';
import HeadinStyleMD from './HeadingStyleMD';
import LayoutStyle from './LayoutStyle';

export default function Skills() {
  return (
<LayoutStyle>
      <Divider textAlign="right">
      <HeadinStyleMD>
        Skills
      </HeadinStyleMD>
      <HeadinStyleSM>         
       I possess a diverse skills including 
       </HeadinStyleSM>  
      </Divider>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="center"
          alignItems="center"
          // style={{ maxHeight: '100vh', overflowY: 'auto' }} 
          sx={{ margin: '0 2%' }}
        >
          <Card1 />
          <Card2 />
          <Card3 />
        </Stack>
        </LayoutStyle>
  );
}
