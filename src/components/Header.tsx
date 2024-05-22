import {
  Box,
  Center,
  Container,
  Divider,
  Flex,
  Image,
  Link,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import { Link as LinkRouter } from "react-router-dom";

import logo from "../assets/logoMayma.png";

export const Header = () => {
  return (
    <Stack boxShadow="md">
      <Container maxW={"1200"}>
        <SimpleGrid columns={2} alignItems="center">
          <LinkRouter to="/">
            <Image
              boxSize={{
                base: "40%",
                md: "35%",
                xl: "25%",
              }}
              objectFit="cover"
              src={logo}
              alt="logo Mayma"
            />
          </LinkRouter>

          {/* Sitio y contacto */}
          <Box>
            <Flex justifyContent={"flex-end"} align="center" gap={3}>
              <Link
                href="https://mayma.lat/inicio"
                target="blank"
                color={"primary.400"}
                fontSize={{ base: "10px", sm: "15px", md: "17px" }}
              >
                Sitio institucional
              </Link>
              <Center height="15px">
                <Divider orientation="vertical" borderWidth="1px" />
              </Center>

              <Link
                href="https://wa.me/5493546565993"
                target="blank"
                color={"primary.400"}
                fontSize={{ base: "10px", sm: "15px", md: "17px" }}
              >
                Contacto
              </Link>
            </Flex>
          </Box>
        </SimpleGrid>
      </Container>
    </Stack>
  );
};
