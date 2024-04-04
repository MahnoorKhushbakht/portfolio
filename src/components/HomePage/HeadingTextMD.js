import { 
    Box,
    Highlight,
    Heading,
    Text
} from '@chakra-ui/react';
import Typewriter from 'typewriter-effect';
import Btn from '../Btn';

export default function HeadingText_MD(){

return(
<>
<Box maxW="50rem" marginStart='110px'marginTop="120px" >
<Box maxW="50rem">
    <Heading
        style={{ fontSize: '42px', textAlign: 'left' ,fontFamily:'Helvetica, Arial'}}
        lineHeight="tall"
        className="animate__animated animate__fadeInUp"
        color='white' 
    >
           <Text
        style={{ fontSize: '50px', textAlign: 'left' }}
        className="animate__animated animate__fadeInUp"
        color='white' 

    >
       Hi there,
    </Text>
<Highlight
            query={['Mahnoor Khushbakht']}
            styles={{  color:'white' , px: '4', py: '3', rounded: 'full', bg: '#6c58a3' }}
            className="animate__animated animate__bounce"
        >
        I'm Mahnoor Khushbakht
        </Highlight>
  
    </Heading>
    <Text
        style={{ fontSize: '50px', textAlign: 'left' ,fontFamily:'Helvetica, Arial'}}
        className="animate__animated animate__fadeInUp"
        color='white' 
    >


<Typewriter 
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
<Btn/>

</Box>
</Box>
</>
)
    }