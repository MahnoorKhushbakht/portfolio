import { Card, CardFooter,Box,Text,Button } from '@chakra-ui/react'
import { BiLike, BiChat,BiShare } from 'react-icons/bi'
import { ChakraProvider } from '@chakra-ui/react';
import 'aos/dist/aos.css';
export default function Reviews( {children}){
  return(
    <ChakraProvider>
  <div id="review" >
  <Box display="flex" marginTop={'15px'} justifyContent="center" alignItems="center" flexDirection="column" >
    <Card data-aos="fade-down" data-aos-delay='150' backgroundColor='#6c58a3' color='white' sx={{width: { base: '85%', sm: '85%', md: '60%', lg: '50%' }}}>
    {children}

  <CardFooter
    justify='space-between'
    flexWrap='wrap'
    sx={{
      '& > button': {
        maxW: '116px'
      },
    }}
  >
    <Button style={{color:'white',fontFamily:'Helvetica, Arial'}} flex='1' variant='ghost' leftIcon={<BiLike style={{color:'white'}} />}>
      Like
    </Button>
    <Button style={{color:'white',fontFamily:'Helvetica, Arial'}} flex='1' variant='ghost' leftIcon={<BiChat style={{color:'white'}}/>}>
      Comment
    </Button>
    <Button style={{color:'white',fontFamily:'Helvetica, Arial'}} flex='1' variant='ghost' leftIcon={<BiShare style={{color:'white'}}/>}>
      Share
    </Button>
  </CardFooter>
</Card>
</Box>
</div>
</ChakraProvider>
  )
}