import Typography from '@mui/material/Typography';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import Fab from '@mui/material/Fab';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import '../css/Services.css'
import 'aos/dist/aos.css';
function Card2() {




  const textStyle = {
    fontFamily: "'Courier New', Courier, monospace",
    color: '#F6F1EE',
  };

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
      <Fab
          style={{
            backgroundColor: "#ED7D31",
            color: "#F6F1EE",
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



