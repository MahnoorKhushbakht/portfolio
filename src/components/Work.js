import { Card, CardBody, Box, Image, Stack, Heading, Text, Button, ChakraProvider } from '@chakra-ui/react';
import gd from '../images/gd.jpeg';
import amz from '../images/amz.jpeg';
import wb from '../images/wb.JPG';

export default function Work() {
    const data = [
        { src: gd, alt: 'Graphic Design',heading:'Graphic Design' ,url: 'https://github.com/MahnoorKhushbakht/GraphicDesign/tree/master' ,text:' Researched, Assisted and designed innovative ideas for brand development. Coordinated with clients to craft creative advertising content suitable for the target market.'},
        { src: wb, alt: 'Website Development',heading:'Website Development', url: 'https://github.com/MahnoorKhushbakht/pe_portfolio_website',text:'In my role as a web developer, I have accumulated valuable experience in crafting responsive and user-friendly web applications.' },
        { src: amz, alt: 'Virtual Assistant',heading:'Virtual Assistant', url: 'https://github.com/MahnoorKhushbakht/Virtual-Assistant-Portfolio',text:'Researched 20+ promising products as per KPIs set by the client. Calculated profit margin of the product after getting Quotation for the Supplier.' }
    ];

    return (
        <div id='work' height='100vh'>
            <ChakraProvider>
                <Box display="flex" justifyContent="center" flexDirection={{ base:'column',sm: 'column', md: 'row' }} alignItems="center" minHeight="100vh" marginTop='130px' marginBottom='20px' spacing="4">
                    {data.map((item, index) => (
                        <Box key={index} mx={{ base: 'auto', md: '4' }} mb={{ base: '4', md: '0' }}>
                            <Card maxW='sm' backgroundColor="#4F4A45" >
                                <CardBody>
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        borderRadius='lg'
                                        maxH='200px' // setting max height for the image
                                        width={index === 0 ? '350px' : 'auto'} // adjust width for the gd image
                                    />
                                    <Stack mt='6' spacing='3'>
                                        <Heading size='md' style={{ color: '#F6F1EE', fontFamily:"'Courier New', Courier, monospace"}}>{item.heading}</Heading>
                                        <Text style={{ color: '#F6F1EE'}}>
                                        {item.text}
                                        </Text>
                                        <Button as='a' style={{ color: '#F6F1EE',backgroundColor: "#ED7D31"}}href={item.url} variant='solid' colorScheme='blue' target='_blank'>
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
