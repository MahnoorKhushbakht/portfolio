import { HStack, ChakraProvider, Tag, Box } from '@chakra-ui/react';

export default function TagBar() {
  return (
    <ChakraProvider>
      <Box maxWidth='100%' overflowX='auto'>
        <HStack spacing={2} flexWrap="wrap" width={{ base: '100%', md: '70%' }} padding={4}>
          {['Frontend', 'HTML', 'CSS', 'Javascript', 'React', 'NodeJs', 'ResponsiveDesign', 'Bootstrap', 'WebDevelopement', 'WebDesign', 'DeveloperPortfolio'].map((name) => (
            <Tag
              size='md'
              key={name}
              variant='solid'
              colorScheme='teal'
              padding={2}
              borderRadius='full'
              fontFamily='Helvetica, Arial'
              sx={{
                color: 'white',
                px: '4',
                py: '3',
                rounded: 'full',
                bg: '#6c58a3',
              }}
            >
              {name}
            </Tag>
          ))}
        </HStack>
      </Box>
    </ChakraProvider>
  );
}
