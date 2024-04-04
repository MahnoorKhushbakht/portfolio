import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import DevicesIcon from "@mui/icons-material/Devices";
import Fab from "@mui/material/Fab";
import '../css/Services.css'
import 'aos/dist/aos.css';
function Card1() {



  return (

      <Card
        variant="outlined"
        sx={{
          flexGrow: 1,
          display: { xs: '400', md: '800' },
          backgroundColor: 'transparent',
          width: '90%',
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
          <DevicesIcon />
        </Fab>
        <Typography variant="h6" style={{ color: 'white', marginBottom: "10px", fontFamily:'Helvetica, Arial'}}>
        Attention to Detail
        </Typography>
        <Typography variant="body1" style={{ color: 'white',fontFamily:'Helvetica, Arial' }}>
       Diligent attention to detail ensures high-quality results.
        </Typography>



      </CardContent>
    </Card>

  );
}

export default Card1;
