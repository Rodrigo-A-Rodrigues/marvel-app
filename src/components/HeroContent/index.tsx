import { Box, Flex, Img, Text } from '@chakra-ui/react';
import React from 'react';

import bannerImage from '../../images/banner.jpg';

export default function HeroContent() {
  return( 
    <Flex position="relative"> 
      <Box>
        <Box  bgColor="rgba(0,0,0, .5)" w="100%" h="100%" position="absolute"/>
        <Img src={bannerImage} alt="banner" w="100vw" h="80vh" objectFit="cover" bgPosition="top" />
      </Box>
      <Box pos="absolute" ml={["1rem","32"]} bottom={["-5","-20"]}>
        <Text fontSize={["2rem","7rem"]} fontWeight="bold" textTransform="uppercase" maxWidth={["250px","900px"]}>
          Conheça nossos personagens
        </Text>
      </Box>
    </Flex>
  );
}