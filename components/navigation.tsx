import {
  Box,
  Button,
  Flex,
  HStack,
  Link,
  Stack,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';

import MoonshotLogo from './icons/moonshotLogo';

type NavLinkProps = React.PropsWithChildren<{
  href: string;
}>;

const routes = [
  { title: 'Home', link: '/' },
  { title: 'Our Projects', link: '/projects' },
  { title: 'Our Mission', link: '/mission' },
  { title: 'Our Team', link: '/team' }
] as const;

function NavLink({ href, children }: NavLinkProps): ReactElement {
  const router = useRouter();

  const url = new URL(`https://stanfordmoonshot.club${href}`);
  const active = url.pathname === router.pathname;

  const activeBgColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Link
      as={active ? 'span' : NextLink}
      href={href}
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700')
      }}
      background={active ? activeBgColor : 'none'}
    >
      {children}
    </Link>
  );
}

export default function Navigation(): ReactElement {
  const { isOpen } = useDisclosure();

  return (
    <Box
      px={4}
      borderBottomWidth={2}
      borderBottomColor={useColorModeValue('gray.200', 'gray.900')}
      position="sticky"
      top={0}
      width="full"
      zIndex={999}
      backdropFilter="blur(10px)"
    >
      <HStack h={16} align="center" justify="space-between" spacing={4}>
        <MoonshotLogo width={70} />
        <HStack
          as={'nav'}
          width="full"
          spacing={4}
          // display={{ base: 'none', md: 'flex' }}
          display="flex" // TODO fix mobile layout
        >
          {routes.map(({ title, link }) => (
            <NavLink key={title} href={link}>
              {title}
            </NavLink>
          ))}
        </HStack>
        <Flex alignItems="center" fontSize={{ base: 'sm', md: 'md' }}>
          <HStack spacing={4}>
            {/* <Button aria-label="Toggle color mode" onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button> 
            also disable darkmode in _app.tsx if you want to enable this button
            */}
            <Button
              variant="unstyled"
              fontWeight="medium"
              onClick={() => window.open('mailto:jasoncl@stanford.edu')}
            >
              Contact
            </Button>
            <Button
              variant="outline"
              onClick={() => window.open('https://forms.gle/sHHzFkP3XC9uQQyTA')}
            >
              Join our Slack!
            </Button>
          </HStack>
        </Flex>
      </HStack>
      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {routes.map(({ title, link }) => (
              <NavLink key={title} href={link}>
                {title}
              </NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
