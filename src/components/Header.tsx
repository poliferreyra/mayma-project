import { Box, Container, Image, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import logo from "../assets/logoMayma.png";

export const Header = () => {
  return (
    <Stack boxShadow="md">
      <Container
        maxW={{
          base: "100%",
          sm: "540px",
          md: "720px",
          lg: "960px",
          xl: "1200px",
        }}
      >
        <Link to="/">
          <Box display={"flex"} justifyContent={"center"}>
            <Image
              boxSize={{
                base: "40%",
                sm: "30%",
                md: "20%",
                lg: "15%",
                xl: "15%",
              }}
              objectFit="cover"
              src={logo}
              alt="logo Mayma"
            />
          </Box>
        </Link>
      </Container>
    </Stack>
  );
};
