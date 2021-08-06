import { Box, Flex, Img, SimpleGrid, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Headling } from './../Headling';

import { api } from '../../services/api';
import Pagination from '../Pagination';

const Limit = 18;

interface CharacterProps {
  id: string,
  name: string, 
  description: string,
  thumbnail: {
    path: string, 
    extension: string,
  }
}

interface RequestInfoPagination {
  total: number;
}

export default function ListHero() {
  const [character, setCharacter] = useState<CharacterProps[]>([]); 
  const [requestInfo, setRequestInfo] = useState<RequestInfoPagination>();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    api
      .get(`/characters?limit=${Limit}&offset=${offset}`)
      .then(response => {
        setRequestInfo(response.data.data);
        setCharacter(response.data.data.results)
      })
      .catch((error) => console.log(error));
  }, [offset])

  return (
    <Flex
      flexDirection="column"
      py={["3rem","10rem"]}
      px={["1rem","9rem"]}
      bg="White"
      color="Black"
    >
      <Headling>lista de personagens da marvel</Headling>
      <SimpleGrid columns={[2,3,6]} spacing={[10,5]} mx="auto">
        {character.map(character => {
          return (
            <Flex 
              w={["100px","170px"]}
              h={["105px","275px"]}
              flexDirection="column"
              position="relative"
              key={character.id}
            >
              <Img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} w="100%" h={["100px","195px"]} objectFit="cover" zIndex="1" />
              <Box position="absolute" zIndex="2" mt="2" ml="50%" transform="translateX(-50%)">
                <Text bg="black" color="white" align="center" flex="start" px="2">Movie</Text>
              </Box>
              <Box
                color="white" 
                bg="Black"
                h={["40px","70px"]}
                borderTop={["2px solid red","5px solid red"]}
              >
                <Text fontSize={[".9rem","1.2rem"]} mx={["1","3"]} my={["1","2"]} mb={["2", "1"]}>{character.name}</Text>
              </Box>
            </Flex>
          )
        })}
      </SimpleGrid>
      {requestInfo && (
        <Pagination 
          limit={Limit}
          total={requestInfo.total}
          offset={offset}
          setOffset={setOffset}
        />
      )}
    </Flex>
  )
}