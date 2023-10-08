// components/TeamMember.tsx
import { Box, Image, Text, Center } from "@chakra-ui/react";

type TeamMemberProps = {
  imageSrc?: string;
  name: string;
};

const TeamMember: React.FC<TeamMemberProps> = ({ imageSrc, name }) => {
  // Fallback to default image if imageSrc is not provided
  const imageUrl = imageSrc ? imageSrc : "/images/emptyprofile.jpg";
  return (
    <Center flexDirection="column" p={4}>
      <Box
        w="150px"
        h="150px"
        mb={2}
        overflow="hidden"
        borderRadius="lg"
        boxShadow="md"
      >
        <Image src={imageUrl} alt={name} objectFit="cover" w="100%" h="100%" />
      </Box>
      <Text textAlign="center" fontSize="lg" fontWeight="medium" h={4}>
        {name}
      </Text>
    </Center>
  );
};

export default TeamMember;
