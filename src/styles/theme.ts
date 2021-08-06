import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  color: {
    gray: {
      "900": "#181b23",
      "800": "#1f2029",
      "700": "#353646",
      "600": "#4b4d63",
      "500": "#616480",
      "400": "#797d9a",
      "300": "#9699b0",
      "200": "#b3b5c6",
      "100": "#d1d2dc",
      "050": "#eeeef2",
    },
    white: {
      "400": "#00000029",
      "300": "#0000000D",
      "200": "#F2F2F2",
      "100": "#FFFFFF"
    },
    pRed: {
      "500": "#ED1B24",
    },
    black: {
      "900": "#000000",
    },
  },
  fonts: {
    heading: 'Oswald',
    body: 'Open Sans',
  },
  styles: {
    global: {
      body: {
        bg: 'Black',
        color: 'gray.50'
      }
    }
  }
})