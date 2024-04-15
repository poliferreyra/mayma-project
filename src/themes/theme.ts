import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      "50": "#eefdfc",
      "100": "#d4f9f9",
      "200": "#aff2f2",
      "300": "#78e7e8",
      "400": "#3ad3d6",
      "500": "#1fbdc3",
      "600": "#1c939e",
      "700": "#1d7681",
      "800": "#20606a",
      "900": "#1f505a",
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
    },
  },
});

export default theme;
