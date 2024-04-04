import React from 'react';
import { CircularProgress, CircularProgressLabel, ChakraProvider, Box, Flex, Text, Highlight } from '@chakra-ui/react';

export default function Rating() {
    const skills = [
        { name: "React", value: 80 },
        { name: "JavaScript", value: 85},
        { name: "CSS", value: 80},
        { name: "HTML", value: 85},
        { name: "Node.js", value: 70 },
        { name: "Next", value: 60},
    ];

    return (
        <ChakraProvider>
            <div id='skills' style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Text
                    style={{ textAlign: 'left', color: 'white', margin: '40px 0' }}
                    className="animate__animated animate__fadeInUp"
                    color='white'
                    fontSize={{ base: "25px", md: "40px", lg: "45px" }}
                >
                    <Highlight
                        query={['Skills']}
                        styles={{ color: 'white', px: '4', py: '3', rounded: 'full', bg: '#593ea3' }}
                        className="animate__animated animate__bounce"
                    >
                        My Skills
                    </Highlight>
                </Text>

                <Flex wrap="wrap" justify="center" align="center">
                    {skills.map((skill, index) => (
                        <Box key={index} p={5} display="flex" flexDirection="column" alignItems="center" width={{ small: '20%', md: '83%', lg: '80%' }}>
                            <CircularProgress determinate value={skill.value} color='#593ea3' size="50px">
                                <CircularProgressLabel color="white">{skill.value}%</CircularProgressLabel>
                            </CircularProgress>
                            <Text mt="4" fontSize="md" color="white">{skill.name}</Text>
                        </Box>
                    ))}
                </Flex>
            </div>
        </ChakraProvider>
    );
}
