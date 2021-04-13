import { Flex, Image } from '@chakra-ui/react';

export function Header() {
  return (
    <Flex w="100%" h={100} justify="center" align="center" py={4}>
      <Image src="/img/logo.svg" />
    </Flex>
  );
}
