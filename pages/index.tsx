import { Box } from '@chakra-ui/react';

import Layout from '../components/layout';
import TitleSection from '../components/titleSection';

export default function HomePage() {
  return (
    <Layout
      title="Stanford Moonshot Club"
      description="Unleash your creativity"
    >
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
        opacity="0.3"
      />
      <Box
        zIndex={2}
        height="full"
        display="flex"
        flexDirection="column"
        overflow="auto"
      >
        <TitleSection />
      </Box>
    </Layout>
  );
}
