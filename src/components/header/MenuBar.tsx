import { Flex } from '@chakra-ui/react';
import React from 'react';
import { ActiveLink } from '../ActiveLink';

export default function MenuBar() {
  return(
    <Flex as="nav" display={["none", "initial"]}>
      <ActiveLink address="/movies">FILMES</ActiveLink>
      <ActiveLink address="/comics" >QUADRINHOS</ActiveLink>
      <ActiveLink address="/tv">PROGRAMAS DE TV</ActiveLink>
      <ActiveLink address="/games">JOGOS</ActiveLink>
    </Flex>
  );
}