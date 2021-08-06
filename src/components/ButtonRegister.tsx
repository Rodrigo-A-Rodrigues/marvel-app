import { Button } from '@chakra-ui/react';
import React from 'react';

interface ButtonProps {
  back: string;
  buttonColor: string;
  children: string;
}

export function ButtonRegister({ back, buttonColor, children } : ButtonProps) {
  return(
    <Button
      bg={back}
      color={buttonColor}
      w={["200px" ,"325px"]} 
      h={["40px","60px"]} 
      borderRadius="0"
      textTransform="uppercase"
    >
      {children}
    </Button>
  )
}