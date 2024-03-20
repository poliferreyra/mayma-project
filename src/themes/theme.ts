import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    // Define tus colores personalizados aquí
    primary: {
      "50": "#fff1f2",
      "100": "#ffe0e1",
      "200": "#ffc6c9",
      "300": "#ff9ea2",
      "400": "#ff676e",
      "500": "#fc3740",
      "600": "#eb222b",
      "700": "#c51018",
      "800": "#a31118",
      "900": "#87151a",
    },
    secondary: {
      "50": "#f6fbea",
      "100": "#e9f5d2",
      "200": "#d5ebab",
      "300": "#b8dc7a",
      "400": "#97c845",
      "500": "#7fb032",
      "600": "#618c24",
      "700": "#4b6b20",
      "800": "#3d561e",
      "900": "#35491e",
    },
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: "primary",
      },

      variants: {
        // default: {
        //   bg: "primary.default",
        //   color: "white",
        //   _hover: {
        //     bg: "primary.800",
        //   },
        // },

        outline: {
          borderColor: "primary.500",
          border: "2px",
          color: "primary.500",
          _hover: {
            borderColor: "primary.800",
            color: "primary.800",
            bg: "transparent",
          },
        },
        secondary: {
          bg: "secondary.400",
          color: "white",
          _hover: {
            bg: "secondary.600",
          },
        },
      },
    },
  },
});

export default theme;
