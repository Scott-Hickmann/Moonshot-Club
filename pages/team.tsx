import { Box, Heading, Text } from '@chakra-ui/react';
import Navigation from '../components/navigation';

export default function Team() {
  return (
    <>
      <Navigation />
      <Box
        id="mission"
        w={{ base: '100%', md: '60%' }}
        mx="auto"
        maxW="1000px"
        p={5}
        my={5}
        bgColor="gray.700"
        borderRadius="10px"
        boxShadow="dark-sm"
      >
        <Heading pb={5}>Our Team</Heading>
        <Text>Coming soon!</Text>
      </Box>
    </>
  );
}
