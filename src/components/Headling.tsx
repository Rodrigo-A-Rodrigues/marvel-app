import React from 'react';
import { Text } from "@chakra-ui/react";

interface HeadlingProps{
  children: string;
}

export function Headling({children} : HeadlingProps) {
  return (
    <Text fontSize={["normal","4xl"]} fontWeight="bold" textTransform="uppercase" mb="3rem">
      {children}
    </Text>
  )
}