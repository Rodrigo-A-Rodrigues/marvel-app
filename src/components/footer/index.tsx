import { Box, Flex, Img, Input, InputGroup, InputRightAddon, SimpleGrid, Text, Link, IconButton } from '@chakra-ui/react';
import React from 'react';

import BlogImg from '../../images/blog.jpg'
import { FaFacebookSquare, FaInstagram, FaSpotify, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return(
    <Box
      bg="Black"
    >
      <Flex flex="2" pb="6rem" px={["1.5rem","11rem"]} justifyContent="space-around" flexDirection={["column", "row"]} >
        <Box w={["270px","410px"]} h={["180px","330px"]} bg="#ED1B24" align="center" justifyContent="center" mt="-20">
          <Text fontSize={["3xl","6xl"]} fontFamily="Oswald" fontWeight="bold" maxW="288px" mt="5">RECEBA AS NOVIDADES DA MARVEL</Text>
        </Box>
        <Box mt="24">
          <Text maxW="400px" fontSize="1.3rem" mb={["1.2rem", "1rem"]}>Cadastre-se para receber nossas notícias em primeira mão<Text as="span" color="red">!</Text></Text>
          <Box>
            <Text mb={["1rem",".5rem"]}>SEU MELHOR E-MAIL</Text>
            <InputGroup>
              <Input type="text" placeholder="Informe seu melhor e-mail" borderRadius="0" w="500px" h="60px" />
              <InputRightAddon children="ENVIAR" borderRadius="0" h="60px" w="120px" bg="red" align="center" justifyContent="center" />
            </InputGroup>
          </Box>
        </Box>
      </Flex>
      <Flex 
        flex="1" 
        bg="#222222"
        pt="4rem"
        pb={["2rem","5rem"]}
        px={["1rem","9rem"]}
        flexDirection={["column","row"]}
        align={["center", "initial"]}
      >
        <Text as="span" bg="red" py="2" px="3" fontSize="3xl" maxH="60px" w="50px" mb={["1rem", "2rem"]}>M</Text>
        <Box
          w="50%"
        >
          <SimpleGrid columns={2} spacing={10} mx={["1rem","4rem"]}>
            <Box>
              <Text as="h2" fontSize="1.3rem" mb="1rem">A Marvel</Text>
              <Flex flexDirection="column" color="gray.500">
                <Link>Sobre a Marvel</Link>
                <Link>Ajuda</Link>
                <Link>Carreiras</Link>
              </Flex>
            </Box>
            <Box>
              <Text as="h2" fontSize="1.3rem" mb="1rem">Mídia</Text>
              <Flex flexDirection="column" color="gray.500">
                <Link>Flimes</Link>
                <Link>Quadrinhos</Link>
                <Link>Programas de TV</Link>
                <Link>Jogos</Link>
              </Flex>
            </Box>
          </SimpleGrid>
        </Box>
        
        <Flex 
          w="50%"
          justifyContent="space-between"  
        >
          <Box>
            <Text as="h2" fontSize="1.3rem" mb="1rem">Última do blog</Text>
            <Flex>
              <Img src={BlogImg} w="100px" h="100px" objectFit="cover" />
              <Text ml=".5rem" maxW={["100px","150px"]}>Title of the blog post in 06 july, 2021</Text>
            </Flex>
            <Link to="/blog" textDecoration="underline" fontSize=".9rem" color="gray.500">Continuar Lendo</Link>
          </Box>

          <Box>
            <Text as="h2" fontSize="1.3rem" mb="1rem">Siga a Marvel</Text>
            <Flex>
              <Link mr="2">
                <IconButton
                  aria-label="Call Segun"
                  size="lg"
                  icon={<FaFacebookSquare fontSize="2.5rem" />}
                />
              </Link>
              <Link mr="2">
                <IconButton
                  aria-label="Call Segun"
                  size="lg"
                  icon={<FaSpotify fontSize="2.5rem" />}
                />
              </Link>
              <Link mr="2">
                <IconButton
                  aria-label="Call Segun"
                  size="lg"
                  icon={<FaInstagram fontSize="2.5rem" />}
                />
              </Link>
              <Link mr="2">
                <IconButton
                  aria-label="Call Segun"
                  size="lg"
                  icon={<FaYoutube fontSize="2.5rem" />}
                />
              </Link>
            </Flex>
          </Box>
        </Flex>
       
      </Flex>
    </Box>
  )
}