import * as React from 'react';
import Stack from '@mui/material/Stack';
import Card1 from './Cards/Card1';
import Card2 from './Cards/Card2';
import Card3 from './Cards/Card3';
import HeadinStyleSM from './Styles/HeadingStyleSM';
import HeadinStyleMD from './Styles/HeadingStyleMD';
import LayoutStyle from './Styles/LayoutStyle';
import DividerStyle from './Styles/DividerStyle';

export default function Skills() {
  return (
<LayoutStyle id="skills">
      <DividerStyle textAlign="right">
      <HeadinStyleMD>
        Skills
      </HeadinStyleMD>
      <HeadinStyleSM>         
       I possess a diverse skills including 
       </HeadinStyleSM>  
       </DividerStyle>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ margin: '0 2%' }}
        >
          <Card1 />
          <Card2 />
          <Card3 />
        </Stack>
        </LayoutStyle>
  );
}
