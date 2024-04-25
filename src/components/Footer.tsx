import {
  Box,
  Center,
  Container,
  HStack,
  Image,
  Link,
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
import { FaXTwitter } from "react-icons/fa6";

import logoMayma from "@/assets/logoMayma.png";

import { FonselpLogo } from "./FonselpLogo";
import { SocialLinks } from "./SocialLinks";

export const Footer = () => {
  return (
    <Stack mt={10} px={2} bg="#F8F8F8">
      <Container maxW={"1200"} py={6} bg="">
        <SimpleGrid columns={2} spacing={10}>
          {/* Mayma */}
          <VStack>
            <Center
              boxSize={{
                base: "75%",
                sm: "50%",
                md: "40%",
              }}
            >
              <Image objectFit="cover" src={logoMayma} alt="logo Fonselp" />
            </Center>

            {/* social icons */}
            <SimpleGrid columns={5} spacing={1} py={6}>
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
              <Text
                align={"center"}
                color={"#9E9E9E"}
                fontSize={{ base: "xs", md: "md" }}
              >
                © 2017 Todos los derechos reservados
              </Text>
            </Box>
          </VStack>

          {/* Fonselp */}
          <VStack>
            <Center
              boxSize={{
                base: "60%",
                sm: "35%",
                md: "25%",
              }}
              mt={3}
            >
              <FonselpLogo />
            </Center>

            {/* social icons */}
            <SimpleGrid
              columns={3}
              spacing={1}
              justifyContent={"center"}
              py={8}
            >
              <SocialLinks
                url="https://www.facebook.com/fonselp"
                color="#9E9E9E"
                icon={<FaFacebook />}
                _hover={{ color: "#1773EA" }}
                aria-label={"Facebook logo"}
              />
              <SocialLinks
                url="https://www.linkedin.com/company/fonselp/"
                color="#9E9E9E"
                icon={<FaLinkedin />}
                _hover={{ color: "#0073B1" }}
                aria-label={"Linkedin logo"}
              />
              <SocialLinks
                url="https://twitter.com/FonselpC"
                color="#9E9E9E"
                icon={<FaXTwitter />}
                _hover={{ color: "#000000" }}
                aria-label={"Twitter logo"}
              />
            </SimpleGrid>

            <HStack gap={4} textAlign={"center"}>
              <Link
                href="https://comprasocial.fonselp.org/legal-disclaimer"
                isExternal
                textDecoration={"none"}
                color={"#9E9E9E"}
                fontSize={{ base: "xs", md: "md" }}
              >
                Terminos de uso
              </Link>

              <Link
                href="https://comprasocial.fonselp.org/privacy-policy"
                isExternal
                textDecoration={"none"}
                color={"#9E9E9E"}
                fontSize={{ base: "xs", md: "md" }}
              >
                Política de privacidad
              </Link>
            </HStack>
          </VStack>
        </SimpleGrid>
      </Container>
    </Stack>
  );
};
