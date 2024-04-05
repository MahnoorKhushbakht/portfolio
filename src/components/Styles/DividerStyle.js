import Divider from '@mui/material/Divider';

export default function DividerStyle({children,textAlign}) {
  return (
    <Divider
    sx={{
        '&::before, &::after':{
            content: '""',
            display: 'block',
            borderTop: '2px solid #fff' 
        }
    }}
    textAlign={textAlign}
>
{children}
        </Divider>
  );
}
