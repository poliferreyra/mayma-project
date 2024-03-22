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

    secondary: {
      "50": "#f4faf3",
      "100": "#e4f5e3",
      "200": "#c8eac8",
      "300": "#9ed89d",
      "400": "#45a245",
      "500": "#5cb85c",
      "600": "#348534",
      "700": "#2c692d",
      "800": "#275428",
      "900": "#224523",
    },
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: "primary",
      },
    },
  },
});

export default theme;
