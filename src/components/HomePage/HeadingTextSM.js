import { 
    Box,
    Highlight,
    Heading,
    Text,
} from '@chakra-ui/react';
import Typewriter from 'typewriter-effect';
import Btn from '../Btn';
export default function HeadingText_SM(){
    return(
    <>
     <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    textAlign="center"
    marginTop="100px"
  >
    <Box maxW="25rem">
      <Box maxW="20rem">
        <Heading
          lineHeight="tall"
          fontFamily='Helvetica, Arial'
          className="animate__animated animate__fadeInUp"
          color='white' 
        >
      <Text
        style={{ fontSize: '35px'}}
        className="animate__animated animate__fadeInUp"
        color='white' 
        fontFamily='Helvetica, Arial'
    >
       Hi there,
    </Text>
          <Highlight
            style={{ fontSize: '35px' }}
            query={['Khushbakht']}
            styles={{  color:'white' , px: '3', py: '2', rounded: 'full', bg: '#6c58a3'}}
            className="animate__animated animate__bounce"
            fontFamily='Helvetica, Arial'
          >
          I'm Mahnoor Khushbakht
          </Highlight>
        </Heading>
        <Text
          style={{ fontSize: '25px' }}
          fontSize="lg"
          className="animate__animated animate__fadeInUp"
          color='white' 
          fontFamily='Helvetica, Arial'
        >
<Typewriter marginTop='5px'
 onInit={(typewriter) => {
     typewriter
         .typeString("Website Developer")
         .pauseFor(1000)
         .deleteAll()
         .typeString("Let's Grow Together!!")
         .start();
 }}

/>
        </Text>
        <Box
    display='flex'
    justifyContent='center'
    flexDirection='column'
    alignItems='center'>
<Btn/>
</Box>

      </Box>
    </Box>
  </Box>
    </>
    )
}