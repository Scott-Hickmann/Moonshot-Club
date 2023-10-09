import { Box, Center, Heading, Text } from '@chakra-ui/react';

import Layout from '../components/layout';

export default function Mission() {
  return (
    <Layout
      title="Stanford Moonshot Club"
      description="Unleash your creativity"
    >
      <Center flex={1}>
        <Box
          id="mission"
          w={{ base: '100%', md: '60%' }}
          mx="auto"
          maxW="1000px"
          p={5}
          m={{ base: 2, sm: 5 }}
          bgColor="gray.700"
          borderRadius="10px"
          boxShadow="dark-sm"
        >
          <Heading pb={5}>Our Mission</Heading>
          <Text>
            We drive inclusive tinkering by providing students with a
            collaborative environment, mentorship, and resources to get their
            dream engineering-related projects—or Moonshots—off the ground. We
            also inspire and educate the community through speaker events and
            educational workshops.
          </Text>
        </Box>
      </Center>
    </Layout>
  );
}
