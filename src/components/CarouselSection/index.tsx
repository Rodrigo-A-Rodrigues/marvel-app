import { Box, Flex, Img, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import { api } from '../../services/api';

import { Headling } from '../Headling';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'
import { ButtonCarousel } from './Button';

const Limit = 5;

interface CharacterProps {
  id: string,
  name: string, 
  description: string,
  thumbnail: {
    path: string, 
    extension: string,
  }
}

export default function CarouselSection() {  
  const [character, setCharacter] = useState<CharacterProps[]>([]); 

  useEffect(() => {
    api
      .get(`/characters?limit=${Limit}`)
      .then(response => {
        setCharacter(response.data.data.results)
      })
      .catch((error) => console.log(error));
  }, [])


  return (
    <Flex 
      flexDirection="column"
      py={["3rem","10rem"]}
      px={["1rem","9rem"]}
    >
      <Flex justifyContent="space-between">
        <Headling>personagens em destaque</Headling>
        <Flex>
          <ButtonCarousel iconArrow={FaAngleLeft}/>
          <ButtonCarousel iconArrow={FaAngleRight}/>
        </Flex>
      </Flex>
      <Flex>
        {character.map(character => {
          return (
            <Flex 
              w="240px"
              h="275px"
              bg="ButtonShadow"
              borderBottom="5px solid #ED1B24"
              position="relative"
              mr="1.9rem"
              key={character.id}
            >
              <Img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} w="100%" h="auto" zIndex="1" />
              <Box position="absolute" h="100%" zIndex="2" ml="50%" transform="translateX(-50%)">
                <Text bg="black" align="center" flex="start" mt="2">Movie</Text>
                <Text fontSize="1.2rem">{character.name}</Text>
              </Box>
            </Flex>
          )
        })}
      </Flex>
    </Flex>
  )
}