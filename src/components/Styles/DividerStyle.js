import Divider from '@mui/material/Divider';

export default function DividerStyle({children,textAlign}) {
  return (
    <Divider 
    sx={{
        '&::before, &::after':{
            display: 'block',
            borderTop: '2px solid white' 
        }
    }}
    textAlign='center'
>
{children}
        </Divider>
  );
}
