import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import 'aos/dist/aos.css';
import project1 from '../images/project1.jpeg';
import project2 from '../images/project2.jpeg';
import { Grid } from '@mui/material';
import { Divider } from '@mui/material';
import Typography from '@mui/material/Typography';


export default function ImgMediaCard() {
  const handlePortfolioClick = () => {
    window.open('https://promiseemmanuel.onrender.com/', '_blank');
  };

  const handleMarketingClick = () => {
    window.open('https://neskomedia.onrender.com/', '_blank');
  };

  const handleGitPortfolioClick = () => {
    window.open('https://github.com/MahnoorKhushbakht/pe_portfolio_website', '_blank');
  };

  const handleGitMarketingClick = () => {
    window.open('https://github.com/MahnoorKhushbakht/marketing-agency', '_blank');
  };

  return (
    <div id='projects'>
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" minHeight="100vh">
      <Typography  data-aos="fade-down" data-aos-delay='100'  width='100%' sx={{ fontSize: { xs: '20px', md: '25px' }}} color={'white'} variant="h5" fontWeight='bold' marginBottom={'10px'} fontFamily="'Courier New', Courier, monospace">
        Projects
      </Typography>
      <Divider sx={{ backgroundColor: '#ED7D31' }} />

      <Typography data-aos="fade-down" data-aos-delay='100' width='50%' sx={{ fontSize: { xs: '15px', md: '20px' }}} color={'rgba(255, 255, 255, 0.856)'} variant="h4" fontStyle='italic' marginBottom={'10px'} fontFamily="'Courier New', Courier, monospace">
      Develop a dynamic and responsive website with modern design elements.
      </Typography>
        <Grid container spacing={1} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={6}>
            <Card  data-aos="fade-down" data-aos-delay='100' sx={{ maxWidth: '80%', backgroundColor: '#ccccd8', margin: 'auto' }}>
              <CardMedia
                component="img"
                alt="project1"
                height="240"
                image={project1}
              />
              <CardActions>
                <Button style={{ fontFamily: "'Courier New', Courier, monospace" }} size="small" onClick={handlePortfolioClick}>View</Button>
                <Button style={{ fontFamily: "'Courier New', Courier, monospace" }} size="small" onClick={handleGitPortfolioClick}>Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card data-aos="fade-down" data-aos-delay='100' sx={{maxWidth: '80%', backgroundColor: '#ebc521', margin: 'auto' }}>
              <CardMedia
                component="img"
                alt="project2"
                height="240"
                image={project2}
              />
              <CardActions>
                <Button style={{ fontFamily: "'Courier New', Courier, monospace" }} size="small" onClick={handleMarketingClick}>View</Button>
                <Button style={{ fontFamily: "'Courier New', Courier, monospace" }} size="small" onClick={handleGitMarketingClick}>Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
