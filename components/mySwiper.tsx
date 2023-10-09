import 'swiper/css';

import { Box, Image, useBreakpointValue } from '@chakra-ui/react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const MySwiper = () => {
  const swiperChildren = [
    <Image
      key="couch"
      src="/vids/couchvid.gif"
      alt="couch vid"
      borderRadius={8}
      minH={0}
      maxH="full"
    />,
    <Box
      key="article"
      width="full"
      height="full"
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
      key="astro"
      src="/images/astrotalk.jpg"
      alt="astro talk"
      fit="fill"
      minH={0}
      maxH="full"
      borderRadius={8}
    />,
    <Box
      key="astroarticle"
      width="full"
      height="full"
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
      key="julia"
      src="/images/juliadice.jpg"
      alt="julia dice"
      fit="fill"
      minH={0}
      maxH="full"
      borderRadius={8}
    />,
    <Image
      key="buildsesh"
      src="/images/buildseshpic.jpg"
      alt="build sesh pic"
      fit="fill"
      minH={0}
      maxH="full"
      borderRadius={8}
    />
  ];

  const sliderAlign = useBreakpointValue({ base: 'flex-start', md: 'center' });

  return (
    // add solid white border
    <Box
      overflow={{ base: 'initial', md: 'hidden' }}
      boxShadow="lg"
      flex={1}
      display="flex"
      justifyContent="flex-end"
      pb={{ base: 20, md: 0 }}
      height={{ base: 'full', md: 'auto' }}
      width="full"
    >
      <Swiper
        spaceBetween={10}
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        modules={[Autoplay]}
      >
        {swiperChildren.map((child, index) => (
          <SwiperSlide
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: sliderAlign,
              userSelect: 'none'
            }}
          >
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default MySwiper;
