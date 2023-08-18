import 'swiper/swiper-bundle.css';

import { Box } from '@chakra-ui/react';
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
    }, 1000);
    return () => clearInterval(interval);
  }, [ref]);

  return (
    // add solid white border
    <Box
      border="1px solid white"
      borderRadius="lg"
      p={5}
      w="500px"
      overflow="hidden"
    >
      <Swiper ref={ref as unknown as Ref<HTMLDivElement>}>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
      </Swiper>
    </Box>
  );
};

export default MySwiper;
