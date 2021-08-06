import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "./styles/theme"

import Header from "./components/header"
import HeroContent from "./components/HeroContent"
import CarouselSection from "./components/CarouselSection"
import ListHero from "./components/ListHero"
import Footer from "./components/footer"
import MarterSection from "./components/MasterSection"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Header />
    <HeroContent />
    <CarouselSection />
    <ListHero />
    <MarterSection />
    <Footer/>
  </ChakraProvider>
)
