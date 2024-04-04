
import {CardHeader, CardBody,IconButton,Box,Heading,Text,Flex } from '@chakra-ui/react'
import { BsThreeDotsVertical } from 'react-icons/bs';
import 'aos/dist/aos.css';
import Reviews from '../ReviewsTemp';
export default function Reviews3(){
  return(
    <Reviews>
<CardHeader>
<Flex spacing='2'>
  <Flex flex='1' gap='2' alignItems='left' flexWrap='wrap'>
   

    <Box>
      <Heading size='sm' textAlign='left' fontFamily='Helvetica, Arial'>Promise Emmanuel</Heading>
      <Text fontSize={{ base: "12px", md: "12px", lg: "16px" }}>Digital Marketer, Nigeria</Text>
    </Box>
  </Flex>
  <IconButton
    variant='ghost'
    colorScheme='gray'
    aria-label='See menu'
    icon={<BsThreeDotsVertical style={{color:'white'}}/>}
  />
</Flex>
</CardHeader>
<CardBody>
<Text display='flex' alignContent='left' textAlign='left' fontSize={{ base: "14px", md: "14px", lg: "16px" }}>
I'd like to give a special shout-out to Mahnoor khushbakht, who created a professional and eye-catching portfolio website. Her expertise and attention to detail were invaluable in creating a site that truly reflects my work and style. I'm so grateful for her help and I highly recommend her to anyone looking for website developer services.
</Text>
</CardBody>
</Reviews>
  )}