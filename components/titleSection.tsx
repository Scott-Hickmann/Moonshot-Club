import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  useToast
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const MySwiper = dynamic(() => import('./mySwiper'), { ssr: false });

export default function TitleSection() {
  const toast = useToast();
  const fontSize = useBreakpointValue({ base: '3xl', sm: '4xl', md: '6xl' });
  useEffect(() => {
    const timer = setTimeout(() => {
      if (localStorage.getItem('toast') === 'true') return; // never toast em twice
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
      localStorage.setItem('toast', 'true');
    }, 1000); // delay the toast by 1000ms (1 second)

    // Cleanup function to clear the timeout in case the component unmounts before the toast is shown
    return () => clearTimeout(timer);
  }, [toast]);

  return (
    <Container
      maxW={'7xl'}
      py={20}
      flex={1}
      display="flex"
      alignItems="stretch"
      overflow={{ base: 'auto', md: 'hidden' }}
    >
      <Stack
        width="full"
        justify={{ base: 'flex-start', md: 'space-evenly' }}
        align={{ base: 'center', md: 'stretch' }}
        spacing={10}
        direction={{ base: 'column', md: 'row' }}
      >
        <Box flex={1} textAlign="left" margin={6} alignSelf="center" px={2}>
          <Box maxW="500px">
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
              and backgrounds. Come build with us!
            </MotionText>
            <HStack>
              <Button
                onClick={() =>
                  window.open('https://forms.gle/sHHzFkP3XC9uQQyTA')
                }
                bgColor="orange.500"
              >
                Join our club!
              </Button>
              <Button
                onClick={() =>
                  window.open(
                    'https://docs.google.com/document/d/1ud3LKEHNIb6js8K_9OPFvJnOFqJ0EUFFvD0iBptjxHI/edit',
                    '_blank'
                  )
                }
              >
                Email us
              </Button>
            </HStack>
          </Box>
        </Box>
        <MySwiper />
      </Stack>
    </Container>
  );
}
