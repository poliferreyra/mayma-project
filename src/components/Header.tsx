import { Box, Container, Image, Stack } from "@chakra-ui/react";

import logo from "../assets/logoMayma.png";

export const Header = () => {
  return (
    <Stack boxShadow="md">
      <Container maxW={"1200"}>
        <Box>
          <Image boxSize="15%" objectFit="cover" src={logo} alt="logo Mayma" />
        </Box>
      </Container>
    </Stack>
  );
};
