import { Box, Flex, Img, Text } from '@chakra-ui/react';
import React from 'react';

import FanCard from '../../images/fan-card.png';
import { ButtonRegister } from '../ButtonRegister';

export default function MarterSection() {
  return (
    <Box 
      h="100vh" 
      bg="white"
      align="center"
    >
      <Text as="h1" textTransform="uppercase" fontSize={["2rem","4rem"]} fontWeight="bold" color="black" mb=".3rem">marvel mastercard</Text>
      <Text as="p" fontSize={["1rem","1.3rem"]} color="gray.500" mb="3rem">Desbloqueie seus super poderes</Text>

      <Img src={FanCard} display={["none","initial"]} />

      <Flex flexDirection="column" align="center">
        <ButtonRegister back="red" buttonColor="white">Cadastre-se agora</ButtonRegister>
        <ButtonRegister back="transparent" buttonColor="red">entenda como funciona</ButtonRegister>
      </Flex>
    </Box>
  )
}