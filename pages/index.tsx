import { Box } from '@chakra-ui/react';
import HeroSection from '../components/heroSection';
import Layout from '../components/layout';
import TitleSection from '../components/titleSection';

export default function HomePage() {
  return (
    <>
      <Box
        bgImage="/images/moonbg.png"
        bgSize="cover"
        bgPosition="center"
        height="100vh"
        zIndex={1}
        position="fixed"
        className="bruh"
        top={0}
        left={0}
        right={0}
        bottom={0}
        opacity="0.5"
      />
      <Box zIndex={99} position="relative">
        <Layout
          title="Stanford Moonshot Club"
          description="Unleash your creativity"
        >
          <TitleSection />
        </Layout>
      </Box>
    </>
  );
}
