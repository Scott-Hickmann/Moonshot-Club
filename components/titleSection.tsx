import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Spacer,
  Stack,
  Text,
  useBreakpointValue,
  useToast,
  VStack
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import Tilt from 'react-parallax-tilt';

const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionBox = motion(Box);

const MySwiper = dynamic(() => import('./mySwiper'), { ssr: false });

export default function TitleSection() {
  const toast = useToast();
  const fontSize = useBreakpointValue({ base: '3xl', sm: '4xl', md: '6xl' });
  useEffect(() => {
    const timer = setTimeout(() => {
      toast({
        duration: 3000,
        position: 'bottom-right',
        isClosable: true,
        render: () => (
          <Box p={3}>
            <Image src="/images/bruh.png" h="400px" alt="Sample image" />
          </Box>
        )
      });
    }, 1000); // delay the toast by 1000ms (1 second)

    // Cleanup function to clear the timeout in case the component unmounts before the toast is shown
    return () => clearTimeout(timer);
  }, [toast]);

  return (
    <Container maxW={'7xl'} h="100%" py={20}>
      <Stack
        id="two-col"
        w="100%"
        justify="space-between"
        align="center"
        spacing={10}
        direction={{ base: 'column', lg: 'row' }}
      >
        <Box textAlign="left" maxW={{ md: '500px' }}>
          <MotionHeading
            pb={3}
            fontWeight="bold"
            fontSize={fontSize}
            lineHeight={'110%'}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Stanford Moonshot Club
          </MotionHeading>
          <MotionText
            fontSize={'lg'}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            pb="5"
          >
            We tinker with <b>robot arms</b>, <b>motorized couches</b>,{' '}
            <b>talking fish</b>, and some other things. We welcome all majors
            and backgrounds. Come join us!
          </MotionText>
          <HStack>
            <Button
              onClick={() => window.open('https://forms.gle/sHHzFkP3XC9uQQyTA')}
              bgColor="orange.500"
            >
              Join our Slack!
            </Button>
            <Button
              onClick={() =>
                window.open(
                  'https://docs.google.com/document/d/1XLyknbRcXWcBQS-BRnRrRTUF_A_wgspZla3pCkcOaIg/edit?usp=sharing',
                  '_blank'
                )
              }
            >
              See our projects
            </Button>
          </HStack>
          <Spacer h="10vh" />
        </Box>
        <VStack w={{ base: '100%', md: '50%' }} id="showcase" h="100%">
          {/* <Tilt>
            <MotionBox
              as="img"
              src="/vids/couchvid.gif"
              borderRadius="lg"
              maxH="70vh"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
            />
          </Tilt> */}
          <MySwiper />
        </VStack>
      </Stack>
    </Container>
  );
}
