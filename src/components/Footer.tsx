import {
  Box,
  Container,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

import logo from "@/assets/logoMayma.png";

import { SocialLinks } from "./SocialLinks";

export const Footer = () => {
  return (
    <Stack
      mt={10}
      px={6}
      bg="#F8F8F8"
      //boxShadow="0px -4px 6px rgba(0, 0, 0, 0.1)"
    >
      <Container maxW={"1200"} pt={6}>
        <VStack gap={6}>
          <Box
            boxSize={{
              base: "40%",
              sm: "30%",
              md: "20%",
              lg: "15%",
              xl: "15%",
            }}
          >
            <Image objectFit="cover" src={logo} alt="logo Mayma" />
          </Box>

          {/* social icons */}
          <SimpleGrid columns={5} spacing={3}>
            <SocialLinks
              url="https://wa.me/5493546565993"
              color="#9E9E9E"
              icon={<FaWhatsapp />}
              _hover={{ color: "#1AD03F" }}
              aria-label={"Watsapp logo"}
            />
            <SocialLinks
              url="https://www.instagram.com/comunidadmayma/"
              color="#9E9E9E"
              icon={<FaInstagram />}
              _hover={{ color: "#F70593" }}
              aria-label={"instagram logo"}
            />
            <SocialLinks
              url="https://www.facebook.com/ComunidadMayma/"
              color="#9E9E9E"
              icon={<FaFacebook />}
              _hover={{ color: "#1773EA" }}
              aria-label={"Facebook logo"}
            />
            <SocialLinks
              url="https://www.linkedin.com/company/programa-mayma/"
              color="#9E9E9E"
              icon={<FaLinkedin />}
              _hover={{ color: "#0073B1" }}
              aria-label={"Linkedin logo"}
            />
            <SocialLinks
              url="https://www.linkedin.com/company/programa-mayma/"
              color="#9E9E9E"
              icon={<FaYoutube />}
              _hover={{ color: "#F70000" }}
              aria-label={"Youtube logo"}
            />
          </SimpleGrid>
          <Box>
            <Text color={"#9E9E9E"}>© 2017 Todos los derechos reservados</Text>
          </Box>
        </VStack>
      </Container>
    </Stack>
  );
};
