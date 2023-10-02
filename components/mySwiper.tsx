/* eslint-disable react/jsx-key */
import 'swiper/swiper-bundle.css';

import { Box, HStack, Image } from '@chakra-ui/react';
import { Ref, useEffect, useRef } from 'react';
import Swiper from 'react-id-swiper';

const MySwiper = () => {
  const ref = useRef({
    swiper: {
      slideNext: () => undefined,
      slidePrev: () => undefined,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      slideTo: (index: number) => undefined,
      activeIndex: 0,
      slides: []
    }
  });

  useEffect(() => {
    const goNext = () => {
      const swiper = ref.current?.swiper;
      if (swiper) {
        if (swiper.activeIndex === swiper.slides.length - 1) {
          console.log('reset', swiper);
          swiper.slideTo(0);
        } else {
          swiper.slideNext();
        }
      }
    };

    const interval = setInterval(() => {
      goNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [ref]);

  const swiperChildren = [
    <Image
      src="/vids/couchvid.gif"
      alt="couch vid"
      h="100%"
      borderRadius={8}
    />,
    <Box
      height="100%"
      width="100%"
      padding={8}
      backgroundColor={'white'}
      borderRadius={8}
    >
      <iframe
        style={{ width: '100%', height: '100%' }}
        src="https://stanforddaily.com/2023/04/16/meet-stanford-moonshot-club-the-ones-behind-the-viral-motorized-couch/"
        title="daily article"
      />
    </Box>,
    <Image
      src="/images/astrotalk.jpg"
      alt="astro talk"
      fit="fill"
      borderRadius={8}
    />,
    <Box
      height="100%"
      width="100%"
      padding={8}
      backgroundColor={'white'}
      borderRadius={8}
    >
      <iframe
        style={{ width: '100%', height: '100%' }}
        src="https://stanforddaily.com/2023/01/25/a-moonshot-story-qa-with-ceo-astro-teller/"
        title="astro teller daily article"
      />
    </Box>,
    <Image
      src="/images/juliadice.jpg"
      alt="julia dice"
      fit="fill"
      borderRadius={8}
    />,
    <Image
      src="/images/buildseshpic.jpg"
      alt="build sesh pic"
      fit="fill"
      borderRadius={8}
    />
  ];

  return (
    // add solid white border
    <Box
      // h="500px"
      w="800px"
      maxW="100%"
      overflow="hidden"
      position="relative"
      boxShadow="lg"
      margin="auto"
    >
      {/* bugs out when there's only 1 element */}
      <Swiper ref={ref as unknown as Ref<HTMLDivElement>}>
        {swiperChildren.map((child, index) => (
          <HStack
            key={index}
            w="700px"
            h="700px"
            maxW={'100%'}
            margin="auto"
            justify="center"
            borderRadius={50}
          >
            {child}
          </HStack>
        ))}
      </Swiper>
    </Box>
  );
};

export default MySwiper;
