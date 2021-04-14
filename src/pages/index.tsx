import {
  Box,
  Divider,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Banner } from '../components/Banner';
import { Category } from '../components/Category';
import { Header } from '../components/Header';
import Slider from '../components/Slider';

export default function Home() {
  return (
    <Flex flexDirection="column" w="100%">
      <Header />

      <Banner />

      <Flex
        maxW={1440}
        w="100%"
        mx="auto"
        align="center"
        justify="center"
        flexDirection="column"
        py="24"
        px="16"
      >
        <VStack spacing="16" w="100%">
          <Flex justify="space-between" w="100%">
            <Category
              src="/img/cocktail.svg"
              alt="cocktail"
              text="vida noturna"
            />
            <Category
              src="/img/surf.svg"
              alt="prancha de surf e sol"
              text="praia"
            />
            <Category src="/img/building.svg" alt="building" text="moderno" />
            <Category src="/img/museum.svg" alt="museum" text="clássico" />
            <Category
              src="/img/earth.svg"
              alt="planeta terra"
              text="e mais..."
            />
          </Flex>
          <Divider
            w={90}
            alignSelf="center"
            border="4px"
            borderColor="gray.700"
          />
          <Text
            fontSize="4xl"
            maxWidth={800}
            textAlign="center"
            color="gray.700"
          >
            Vamos nessa?
            <br /> Então escolha seu continente
          </Text>
        </VStack>

        <Slider />
      </Flex>
    </Flex>
  );
}
