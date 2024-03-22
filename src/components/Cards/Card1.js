import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import DevicesIcon from "@mui/icons-material/Devices";
import Fab from "@mui/material/Fab";
import '../css/Services.css'
function Card1() {



  return (

      <Card
        variant="outlined"
        className="animate__animated animate__flipInX card"
        sx={{
          flexGrow: 1,
          display: { xs: '400', md: '800' },
          backgroundColor: 'transparent',
          borderRadius: '16px',
          width: '90%',
        }}
      >
      <CardContent>
        <Fab
          style={{
            backgroundColor: "#ED7D31",
            color: "#F6F1EE",
            marginBottom: "20px",
          }}
        >
          <DevicesIcon />
        </Fab>
        <Typography variant="h6" style={{ color: '#F6F1EE', marginBottom: "10px", fontFamily:"'Courier New', Courier, monospace"}}>
        Attention to Detail
        </Typography>
        <Typography variant="body1" style={{ color: '#F6F1EE',fontFamily:"'Courier New', Courier, monospace" }}>
        I pay close attention to the finer points of web development, ensuring quality and precision in all tasks.
        </Typography>



      </CardContent>
    </Card>

  );
}

export default Card1;
