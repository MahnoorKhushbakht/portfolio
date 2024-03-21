import React from 'react';
import { CircularProgress, CircularProgressLabel, ChakraProvider, Box, Flex, Text } from '@chakra-ui/react';

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
            <div id='skills' style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Flex wrap="wrap" gap="30px" justify="center" align="center">
                    {skills.map((skill, index) => (
                        <Box key={index} p={5} display="flex" flexDirection="column" alignItems="center">
                            <CircularProgress value={skill.value} color='#ED7D31' size="80px">
                                <CircularProgressLabel color="#F6F1EE">{skill.value}%</CircularProgressLabel>
                            </CircularProgress>
                            <Text mt="4" fontSize="md" color="#F6F1EE">{skill.name}</Text> 
                        </Box>
                    ))}
                </Flex>
            </div>
        </ChakraProvider>
    );
}
