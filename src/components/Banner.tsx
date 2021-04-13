import { Flex, Box, VStack, Text, Image } from '@chakra-ui/react';
import React from 'react';

export function Banner() {
  return (
    <Flex
      bgImage="url('/img/background.svg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      w="100%"
      h={['200px', '335px']}
    >
      <Flex
        maxW={1440}
        justify="space-between"
        w="100%"
        mx="auto"
        align="center"
        px="16"
      >
        <VStack spacing="6" align="flex-start" maxW={524}>
          <Text color="gray.100" fontWeight="500" fontSize={36}>
            5 Continentes, infinitas possibilidades.
          </Text>
          <Text color="gray.200" fontWeight="500" fontSize={20}>
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </VStack>
        <Image
          src="/img/airplane.svg"
          alt="airplane"
          mt={120}
          transform="rotate(3deg)"
        />
      </Flex>
    </Flex>
  );
}
