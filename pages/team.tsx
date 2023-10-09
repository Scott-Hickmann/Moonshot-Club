import { Box, Heading, SimpleGrid } from '@chakra-ui/react';

import Navigation from '../components/navigation';
import TeamMember from '../components/teamMember';

export default function Team() {
  return (
    <>
      <Navigation />
      <Box
        id="mission"
        w={{ base: '100%', md: '60%' }}
        mx="auto"
        maxW="1000px"
        p={5}
        my={5}
        bgColor="gray.700"
        borderRadius="10px"
        boxShadow="dark-sm"
      >
        <Heading pb={5}>Our Team</Heading>
        <SimpleGrid minChildWidth="120px" w="100%" gap={50} p={3}>
          <TeamMember name="Jason Lin" />
          <TeamMember name="Julia Gershon" />
          <TeamMember name="Elijah Kim" />
          <TeamMember name="Lawton Skaling" />
          <TeamMember name="Scott Hickmann" />
          <TeamMember name="Ginger Buck" />
          <TeamMember name="Sureen Heer" />
          <TeamMember name="Kaien Yang" />
          <TeamMember name="Ina Chun" />
          <TeamMember name="Edward Adams" />
          <TeamMember name="Kevin Li" />
          <TeamMember name="Schwinn Saereesitthipitak" />
          <TeamMember name="Andy Tang" />
          <TeamMember name="Archer Date" />
          <TeamMember name="Daniel Daek" />
          <TeamMember name="Ege Turan" />
        </SimpleGrid>
      </Box>
    </>
  );
}
