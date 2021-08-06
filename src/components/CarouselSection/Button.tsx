import { Button, Icon } from '@chakra-ui/react';
import React, { ElementType } from 'react';

interface ButtonCarouselProps {
  iconArrow: ElementType;
}

export function ButtonCarousel({iconArrow} : ButtonCarouselProps) {
  return (
    <Button borderRadius="0" bg="Black" border="1px solid White" py="6" mx="2">
      <Icon as={iconArrow} fontSize={30} />
    </Button>
  )
}