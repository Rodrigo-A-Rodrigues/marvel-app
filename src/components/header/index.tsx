import { Flex, Img } from '@chakra-ui/react';
import React from 'react';

import Logo from '../../images/marvel.svg';
import MenuBar from './MenuBar';

export default function Header() {
  return(
    <Flex
      h="6rem"
      py="1.4rem"
      px="1.4rem"
      align="center"
      justifyContent="space-between"
    >
      <Img src={Logo} w="150px" />
      <MenuBar />
    </Flex>
  )
}