import { Button, Container, Heading, Stack, Text } from '@chakra-ui/react';

export default function TitleSection() {
  return (
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}
        >
          <Text as={'span'} color={'red.400'}>
            Stanford
          </Text>{' '}
          Moonshot Club 🚀
        </Heading>
        <Text
          color={'gray.500'}
          maxW={'3xl'}
          fontSize={{ base: 'lg', sm: 'md', lg: 'xl' }}
        >
          The Stanford Moonshot Club is a newly founded and quickly growing
          student organization. We drive inclusive tinkering by providing
          students with a collaborative environment, mentorship, and resources
          to get their dream engineering-related projects—or Moonshots—off the
          ground. We also inspire and educate the community through speaker
          events and educational workshops.
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'red'}
            bg={'red.400'}
            _hover={{ bg: 'red.500' }}
            as="a"
            href="https://forms.gle/sHHzFkP3XC9uQQyTA"
            target="_blank"
          >
            Join the Slack
          </Button>
          {/* <Button rounded={'full'} px={6}>
            Learn more
          </Button> */}
        </Stack>
      </Stack>
    </Container>
  );
}
