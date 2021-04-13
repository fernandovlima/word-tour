import { Box, Image, ImageProps, Text } from '@chakra-ui/react';

interface CategoryProps extends ImageProps {
  text: string;
}

export function Category({ text, ...rest }: CategoryProps) {
  const { src, alt } = rest;
  return (
    <Box flexDirection="column" align="center" justify="center">
      <Image src={src} alt={alt} />
      <Text
        textAlign="center"
        fontSize="xl"
        fontWeight="semibold"
        color="gray.700"
        mt="4"
      >
        {text}
      </Text>
    </Box>
  );
}
