import { Box } from '@chakra-ui/react';

import Navigation from '../components/navigation';

export default function Projects() {
  return (
    <Box height="100vh">
      <Navigation />
      <iframe
        src="https://docs.google.com/document/d/1XLyknbRcXWcBQS-BRnRrRTUF_A_wgspZla3pCkcOaIg/edit?usp=sharing"
        title="kitchen"
        height="100%"
        width="100%"
      />
    </Box>
  );
}
