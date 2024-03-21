import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      "50": "#f0f7fe",
      "100": "#ddecfc",
      "200": "#c3dffa",
      "300": "#9acbf6",
      "400": "#6aaff0",
      "500": "#4e94ea",
      "600": "#3274de",
      "700": "#2a5fcb",
      "800": "#284ea5",
      "900": "#254483",
    },
    // primary: {
    //   "50": "#fff1f2",
    //   "100": "#ffe0e1",
    //   "200": "#ffc6c9",
    //   "300": "#ff9ea2",
    //   "400": "#ff676e",
    //   "500": "#fc3740",
    //   "600": "#eb222b",
    //   "700": "#c51018",
    //   "800": "#a31118",
    //   "900": "#87151a",
    // },
    secondary: {
      "50": "#f4faf3",
      "100": "#e4f5e3",
      "200": "#c8eac8",
      "300": "#9ed89d",
      "400": "#5cb85c",
      "500": "#45a245",
      "600": "#348534",
      "700": "#2c692d",
      "800": "#275428",
      "900": "#224523",
    },
    // secondary: {
    //   "50": "#f6fbea",
    //   "100": "#e9f5d2",
    //   "200": "#d5ebab",
    //   "300": "#b8dc7a",
    //   "400": "#97c845",
    //   "500": "#7fb032",
    //   "600": "#618c24",
    //   "700": "#4b6b20",
    //   "800": "#3d561e",
    //   "900": "#35491e",
    // },
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: "primary",
      },

      variants: {
        outline: {
          borderColor: "primary.500",
          border: "2px",
          color: "primary.500",
          _hover: {
            borderColor: "primary.600",
            color: "primary.600",
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
