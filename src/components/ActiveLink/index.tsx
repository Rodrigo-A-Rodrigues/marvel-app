import { Link } from '@chakra-ui/react';
import React from 'react';

interface LinkProps {
  address: string;
  children: string;
  option?: string;
}

export function ActiveLink({ address, option, children }: LinkProps) {
  return (
    <Link to={ address } mx="2rem" my={option}>
      { children }
    </Link>
  )
}