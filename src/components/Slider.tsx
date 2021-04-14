import { Image, Img } from '@chakra-ui/image';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';
import { useBreakpointValue } from '@chakra-ui/react';

SwiperCore.use([Navigation, Pagination, Scrollbar]);

function Slider() {
  const slides = [
    {
      id: 1,
      src: '/img/africa1.jpg',
      header: 'Africa',
      text: 'Natureza ',
    },
    {
      id: 2,
      src: '/img/africa1.jpg',
      header: 'Europa',
      text: 'O continente mais antigo.',
    },
    {
      id: 3,
      src: '/img/africa1.jpg',
      header: 'Europa',
      text: 'O continente mais antigo.',
    },
    {
      id: 4,
      src: '/img/africa1.jpg',
      header: 'Europa',
      text: 'O continente mais antigo.',
    },
    {
      id: 5,
      src: '/img/africa1.jpg',
      header: 'Europa',
      text: 'O continente mais antigo.',
    },
  ];

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const isMobileVersion = useBreakpointValue({
    base: false,
    sm: true,
  });

  return (
    <Flex w="100%" h={450} marginTop="16">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        pagination
        navigation
        tag="section"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Flex w="100%" position="relative" justify="center" align="center">
              <Img src={slide.src} w="100%" h={450} objectFit="cover" />
              <Box
                position="absolute"
                zIndex="1"
                align="center"
                justify="center"
              >
                <Text
                  as="h1"
                  color="gray.200"
                  fontWeight="700"
                  fontSize={['1.5rem', '2rem', '3rem']}
                  textAlign="center"
                  lineHeight={['1.75rem', '2.5rem', '3.5rem']}
                >
                  {slide.header}
                </Text>
                <Text
                  as="span"
                  color="gray.200"
                  fontWeight="700"
                  fontSize={['0.875rem', '1.125rem', '1.5rem']}
                  lineHeight={['1.075rem', '1.155rem', '2.95rem']}
                >
                  {slide.text}
                </Text>
              </Box>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
}
export default Slider;
