import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import DrawIcon from '@mui/icons-material/Draw';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import '../css/Services.css'
import 'aos/dist/aos.css';
function Card3() {



  return (

      <Card
        variant="outlined"
        sx={{
          flexGrow: 1,
          display: { xs: '400', md: '800' },
          backgroundColor: 'transparent',
          borderRadius: '16px',
          width: '90%',
        }}
        data-aos="fade-down" data-aos-delay='100' 

      >
      <CardContent>
                  <Fab style={{ backgroundColor: '#ED7D31', color:'#F6F1EE', marginBottom: '20px' }}>
                  <DrawIcon />
                  </Fab>
                  <Typography variant='h6' style={{ color: '#F6F1EE' , marginBottom: '10px' ,fontFamily:"'Courier New', Courier, monospace"}}>
                  Adaptability
                  </Typography>

<Typography variant='body1' style={{  color: '#F6F1EE',fontFamily:"'Courier New', Courier, monospace"  }}>
I adapt to changing project needs easily, ensuring success in dynamic environments.
      </Typography>



              </CardContent>
    </Card>

  );
}

export default Card3;