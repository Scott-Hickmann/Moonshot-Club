import { Box, Heading, Text } from '@chakra-ui/react';
import Navigation from '../components/navigation';

export default function Mission() {
  return (
    <>
      <Navigation />
      <Box id="mission" w={{ base: '100%', md: '60%' }} mx="auto" p={5}>
        <Heading pb={5}>What&apos;s Up With Moonshot?</Heading>
        <Text>
          Stanford Moonshot is the place for all forms of creativity to thrive:
          Want to ride a motorized couch around campus? Want to make customized
          cloaks for you and all your friends? How about using AI to make a chat
          bot to respond to all your messages for you? Have any other crazy
          project that you want to start but aren&apos;t sure how, or don&apos;t
          have the resources? Then this is the place for you!
        </Text>
      </Box>
    </>
  );
}
