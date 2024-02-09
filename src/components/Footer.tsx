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
          <Box boxSize={"20%"}>
            <Image objectFit="cover" src={logo} alt="logo Mayma" />
          </Box>

          {/* social icons */}
          <SimpleGrid columns={5} spacing={3}>
            <SocialLinks
              url="https://wa.me/5493546565993"
              isRound={true}
              variant="outline"
              border={"2px"}
              color="#9E9E9E"
              size='sm'
              fontSize="15px"
              icon={<FaWhatsapp />}
              _hover={{ color: "#1AD03F" }}
              aria-label={""}
            />
            <SocialLinks
              url="https://www.instagram.com/comunidadmayma/"
              isRound={true}
              variant="outline"
              border={"2px"}
              color="#9E9E9E"
              size='sm'
              fontSize="15px"
              icon={<FaInstagram />}
              _hover={{ color: "#F70593" }}
              aria-label={""}
            />
            <SocialLinks
              url="https://www.facebook.com/ComunidadMayma/"
              isRound={true}
              variant="outline"
              border={"2px"}
              color="#9E9E9E"
              size='sm'
              fontSize="15px"
              icon={<FaFacebook />}
              _hover={{ color: "#1773EA" }}
              aria-label={""}
            />
            <SocialLinks
              url="https://www.linkedin.com/company/programa-mayma/"
              isRound={true}
              variant="outline"
              border={"2px"}
              color="#9E9E9E"
              size='sm'
              fontSize="15px"
              icon={<FaLinkedin />}
              _hover={{ color: "#0073B1" }}
              aria-label={""}
            />
            <SocialLinks
              url="https://www.linkedin.com/company/programa-mayma/"
              isRound={true}
              variant="outline"
              border={"2px"}
              color="#9E9E9E"
              size='sm'
              fontSize="15px"
              icon={<FaYoutube />}
              _hover={{ color: "#F70000" }}
              aria-label={""}
            />
          </SimpleGrid>
          <Box>
            <Text color={"#9E9E9E"}>© 2017 Todos los derechos reservados</Text>
          </Box>
        </VStack>
      </Container>

      <Container maxW={"1200"} py={6}>
        {/* <Flex justifyContent="space-between">
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
        </Flex> */}
      </Container>
    </Stack>
  );
};
