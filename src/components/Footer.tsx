import {
  Box,
  Container,
  Flex,
  HStack,
  Image,
  Link,
  Stack,
  Text,
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
      boxShadow="0px -4px 6px rgba(0, 0, 0, 0.1)"
    >
      <Container maxW={"1200"} pt={6}>
        <Flex justifyContent="space-between">
          <Box boxSize={"15%"}>
            <Image objectFit="cover" src={logo} alt="logo Mayma" />
          </Box>
          {/* social icons */}
          <HStack gap={2} align={"center"}>
            <SocialLinks
              url="https://wa.me/5493546565993"
              icon={FaWhatsapp}
              size="25px"
              color="#9E9E9E"
              _hover={{ color: "#1AD03F" }}
            />
            <SocialLinks
              url="https://www.instagram.com/comunidadmayma/"
              icon={FaInstagram}
              size="25px"
              color="#9E9E9E"
              _hover={{ color: "#F70593" }}
            />
            <SocialLinks
              url="https://www.facebook.com/ComunidadMayma/"
              icon={FaFacebook}
              size="25px"
              color="#9E9E9E"
              _hover={{ color: "#1773EA" }}
            />
            <SocialLinks
              url="https://www.linkedin.com/company/programa-mayma/"
              icon={FaLinkedin}
              size="25px"
              color="#9E9E9E"
              _hover={{ color: "#0073B1" }}
            />
            <SocialLinks
              url="https://www.linkedin.com/company/programa-mayma/"
              icon={FaYoutube}
              size="25px"
              color="#9E9E9E"
              _hover={{ color: "#F70000" }}
            />
          </HStack>
        </Flex>
      </Container>

      <Container maxW={"1200"} py={6}>
        <Flex justifyContent="space-between">
          <Box>
            <Text color={"#9E9E9E"}>© 2017 Todos los derechos reservados</Text>
          </Box>
          <Box>
            <Link
              color={"#9E9E9E"}
              href="https://mayma.org.ar/terminos-y-condiciones-programa-mayma2021?_gl=1*prqus4*_ga*MTQ2MDM1MDI4Mi4xNzA1Njc5NzUx*_ga_JZ7CXM01CB*MTcwNjAyMDMzNS4yLjEuMTcwNjAyMjEwMS4wLjAuMA.."
              isExternal
            >
              Términos y Condiciones
            </Link>
          </Box>
        </Flex>
      </Container>
    </Stack>
  );
};
