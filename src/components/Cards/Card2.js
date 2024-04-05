import Typography from '@mui/material/Typography';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import Fab from '@mui/material/Fab';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import '../css/Services.css'
import 'aos/dist/aos.css';
function Card2() {




  const textStyle = {
    fontFamily: 'Helvetica, Arial',
    color: 'white',
  };

  return (
    <Card
      variant="outlined"
      sx={{
        flexGrow: 1,
        display: { xs: '400', md: '800' },
        backgroundColor: 'transparent',
        width: '90%',
        border:'none'
      }}
      data-aos="fade-down" data-aos-delay='100' 
    >
      <CardContent>
      <Fab
          style={{
            backgroundColor: "#593ea3",
            color: "white",
            marginBottom: "20px",
          }}
        >
        <ScreenSearchDesktopIcon />
        </Fab>
        <Typography variant='h6' style={{ ...textStyle, marginBottom: '10px' }}>
        Time Management
        </Typography>
        <Typography variant='body1' style={textStyle}>
        I effectively manage my time to deliver high-quality results efficiently.
        </Typography>


      </CardContent>
    </Card>
  );
}

export default Card2;



