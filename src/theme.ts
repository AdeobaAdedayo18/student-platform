import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: 'dark',
  
}

const colors = {
  brand: {
    50: "#E5ECFF",
    100: "#B8CBFF",
    200: "#8AA9FF",
    300: "#5C87FF",
    400: "#2E66FF",
    500: "#0044FF",
    600: "#0036CC",
    700: "#002999",
    800: "#001B66",
    900: "#000E33",
  }
}

const theme = extendTheme({ 
  config,
  colors: colors
  
});

export default theme;