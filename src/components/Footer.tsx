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
    <Stack>
      <Container maxW={"1200"}>
        <Flex justifyContent="space-between" py="50px">
          <Box boxSize={"15%"}>
            <Image objectFit="cover" src={logo} alt="logo Mayma" />
          </Box>
          <HStack gap={3} align={"center"}>
            <SocialLinks url="https://wa.me/5493546565993" icon={FaWhatsapp} />
            <SocialLinks
              url="https://www.instagram.com/comunidadmayma/"
              icon={FaInstagram}
            />
            <SocialLinks
              url="https://www.facebook.com/ComunidadMayma/"
              icon={FaFacebook}
            />
            <SocialLinks
              url="https://www.linkedin.com/company/programa-mayma/"
              icon={FaLinkedin}
            />
            <SocialLinks
              url="https://www.linkedin.com/company/programa-mayma/"
              icon={FaYoutube}
            />
          </HStack>
        </Flex>
      </Container>

      <Container maxW={"1200"}>
        <Flex justifyContent="space-between">
          <Box>
            <Text>© 2017 Todos los derechos reservados</Text>
          </Box>
          <Box>
            <Link
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
