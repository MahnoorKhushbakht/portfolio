import { Card, CardHeader, CardBody, CardFooter,Flex,Avatar,IconButton,Box,Heading,Text,Button } from '@chakra-ui/react'
import { BiLike, BiChat,BiShare } from 'react-icons/bi'
import { BsThreeDotsVertical } from 'react-icons/bs';
import ClientImage from '../images/ClientImage.jpeg';
import { ChakraProvider } from '@chakra-ui/react';
import 'aos/dist/aos.css';
export default function Reviews(){
  return(
    <ChakraProvider>
  <div id="review" height="100vh" maxHeight={'100vh'}>
  <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" marginTop='100px'  marginBottom='20px'>
    <Card data-aos="fade-down" data-aos-delay='100' backgroundColor='#F6F1EE' sx={{width: { base: '85%', sm: '85%', md: '60%', lg: '50%' }}}>
  <CardHeader>
    <Flex spacing='2'>
      <Flex flex='1' gap='2' alignItems='left' flexWrap='wrap'>
        <Avatar  name='Promise Emmanuel' src={ClientImage} />

        <Box>
          <Heading size='sm' textAlign='left' fontFamily="'Courier New', Courier, monospace">Promise Emmanuel</Heading>
          <Text fontSize={{ base: "12px", md: "12px", lg: "16px" }}>Digital Marketer, Nigeria</Text>
        </Box>
      </Flex>
      <IconButton
        variant='ghost'
        colorScheme='gray'
        aria-label='See menu'
        icon={<BsThreeDotsVertical />}
      />
    </Flex>
  </CardHeader>
  <CardBody>
    <Text display='flex' alignContent='left' textAlign='left' fontSize={{ base: "14px", md: "14px", lg: "16px" }}>
    I'd like to give a special shout-out to Mahnoor khushbakht, who created a professional and eye-catching portfolio website. Her expertise and attention to detail were invaluable in creating a site that truly reflects my work and style. I'm so grateful for her help and I highly recommend her to anyone looking for website developer services.
    </Text>
  </CardBody>


  <CardFooter
    justify='space-between'
    flexWrap='wrap'
    sx={{
      '& > button': {
        maxW: '116px'
      },
    }}
  >
    <Button flex='1' variant='ghost' leftIcon={<BiLike />}>
      Like
    </Button>
    <Button flex='1' variant='ghost' leftIcon={<BiChat />}>
      Comment
    </Button>
    <Button flex='1' variant='ghost' leftIcon={<BiShare />}>
      Share
    </Button>
  </CardFooter>
</Card>
</Box>
</div>
</ChakraProvider>
  )
}