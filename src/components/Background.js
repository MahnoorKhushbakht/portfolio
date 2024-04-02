import { Card, CardBody, Box, Image, Stack, Heading, Text, Button, ChakraProvider } from '@chakra-ui/react';
import gd from '../images/gd.jpeg';
import amz from '../images/amz.jpeg';
import wb from '../images/luckyShrub.JPG';
import 'aos/dist/aos.css';
export default function Background() {
    const data = [
        { src: gd, alt: 'Graphic Design', heading: 'Graphic Design', url: 'https://github.com/MahnoorKhushbakht/GraphicDesign/tree/master', text: 'Researched, Assisted and designed innovative ideas for brand development. Coordinated with clients to craft creative advertising content suitable for the target market.' },
        { src: wb, alt: 'Website Development', heading: 'Website Development', url: 'https://github.com/MahnoorKhushbakht/pe_portfolio_website', text: 'In my role as a web developer, I have accumulated valuable experience in crafting responsive and user-friendly web applications.' },
        { src: amz, alt: 'Virtual Assistant', heading: 'Virtual Assistant', url: 'https://github.com/MahnoorKhushbakht/Virtual-Assistant-Portfolio', text: 'Researched 20+ promising products as per KPIs set by the client. Calculated profit margin of the product after getting Quotation for the Supplier.' }
    ];

    return (
        <div id='background' height='100vh'>
            <ChakraProvider>
                <Box display="flex" justifyContent="center" flexDirection={{ base: 'column', sm: 'column', md: 'row' }} alignItems="center" minHeight="100vh" marginTop='130px' marginBottom='20px' spacing="4">
                    {data.map((item, index) => (
                        <Box key={index} mx={{ base: 'auto', md: '4' }} mb={{ base: '4', md: '0' }} ml={{ base: '8', md: '4' }} mr={{ base: '8', md: '4' }}>
                            <Card maxW='md' backgroundColor="transparent" data-aos="fade-up" data-aos-delay='50'>
                                <CardBody>
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        borderRadius='lg'
                                        maxH='200px' 
                                        width={index === 0 ? '250px' : 'auto'} 
                                        marginLeft='auto'  
                                        marginRight='auto' 
                                        display='block'    
                                    />
                                    <Stack mt='6' spacing='3'>
                                        <Heading size='md' style={{ color: '#F6F1EE', fontFamily: "'Courier New', Courier, monospace" }}>{item.heading}</Heading>
                                        <Text style={{ color: '#F6F1EE' }}>
                                            {item.text}
                                        </Text>
                                        <Button as='a' style={{ color: '#F6F1EE', backgroundColor: "#ED7D31" }} href={item.url} variant='solid' colorScheme='blue' target='_blank'>
                                            Learn More
                                        </Button>
                                    </Stack>
                                </CardBody>
                            </Card>
                        </Box>
                    ))}
                </Box>
            </ChakraProvider>
        </div>
    );
}
