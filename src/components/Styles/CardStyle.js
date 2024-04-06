import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import '../css/Card.css'
import 'aos/dist/aos.css';
function CardStyle({children}) {



  return (

      <Card
        variant="outlined"
        sx={{
          flexGrow: 1,
          display: { xs: '400', md: '800' },
          backgroundColor: 'transparent',
          width: '60%',
          border:'none'
        }}
        data-aos="fade-down" data-aos-delay='100' 
      >
      <CardContent>
      {children}
      </CardContent>
    </Card>

  );
}

export default CardStyle;
