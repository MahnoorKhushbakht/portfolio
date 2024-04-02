import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import project1 from '../images/project1.jpeg';
import project2 from '../images/project2.jpeg';
import { Container } from '@mui/material';
import { Carousel} from 'react-bootstrap';
import 'aos/dist/aos.css';
export default function ImgMediaCard() {
    const handlePortfolioClick = () => {
        window.open('https://promiseemmanuel.onrender.com/', '_blank');
      };
    
      const handleMarketingClick = () => {
        window.open('  https://neskomedia.onrender.com/', '_blank');
      };
      const handleGitPortfolioClick = () => {
        window.open('https://github.com/MahnoorKhushbakht/pe_portfolio_website', '_blank');
      };
    
      const handleGitMarketingClick = () => {
        window.open('https://github.com/MahnoorKhushbakht/marketing-agency', '_blank');
      };
  return (
    <div id='projects' height='100vh' maxHeight={'100vh'}>
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh"maxHeight={'100vh'} >
      <Carousel controls={false} indicators={true} style={{ width: '100%', maxWidth: '500px'}}>
          <Carousel.Item>
        <Container>
          <Card sx={{ maxWidth: 605, backgroundColor: '#ccccd8' }}>
            <CardMedia
              component="img"
              alt="project1"
              height="140"
              image={project1}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary" textAlign={'left'} fontFamily="'Courier New', Courier, monospace">
                <strong>Project Description:</strong> It is built using React.js for the frontend and Node.js for the backend. MongoDB is used for storing Contact Information.
                <br />
                <strong>Key Achievements:</strong> Created the website as per requirements.
                <br />
                <strong>Your Role:</strong> I was responsible for the entire development lifecycle, including design, frontend and backend development, and deployment.
              </Typography>
            </CardContent>
            <CardActions>
              <Button style={{fontFamily:"'Courier New', Courier, monospace"}}  size="small" onClick={handlePortfolioClick}>View</Button>
              <Button style={{fontFamily:"'Courier New', Courier, monospace"}}  size="small" onClick={handleGitPortfolioClick}>Learn More</Button>
            </CardActions>
          </Card>
        </Container>
        </Carousel.Item>
        <Carousel.Item>
        <Container>
          <Card sx={{ maxWidth: 605, backgroundColor: '#ebc521' }}>
            <CardMedia
              component="img"
              alt="project2"
              height="140"
              image={project2}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary" textAlign={'left'} fontFamily="'Courier New', Courier, monospace">
               
<strong>Project Description:</strong> Developed a web application utilizing React.js for the frontend and Node.js for the backend, with MongoDB serving as the database for Contact Information storage.
<br />
<strong>Key Achievements:</strong> Successfully designed and implemented the website to meet project specifications.
<br />
<strong>Your Role:</strong> Led the entire development lifecycle, encompassing design, frontend and backend development, and deployment, ensuring seamless execution from conception to delivery.
              </Typography>
            </CardContent>
            <CardActions>
              <Button style={{fontFamily:"'Courier New', Courier, monospace"}} size="small" onClick={handleMarketingClick}>View</Button>
              <Button style={{fontFamily:"'Courier New', Courier, monospace"}}  size="small" onClick={handleGitMarketingClick}>Learn More</Button>
            </CardActions>
          </Card>
        </Container>
        </Carousel.Item>
        </Carousel>
      </Box>
    </div>
  );
}
