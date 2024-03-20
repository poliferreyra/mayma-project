import {
  Alert,
  AlertTitle,
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  Container,
  Heading,
  HStack,
  Icon,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaLink, FaLocationDot } from "react-icons/fa6";
import { IoArrowBack } from "react-icons/io5";
import { LuHeartHandshake } from "react-icons/lu";
import { MdRunningWithErrors } from "react-icons/md";
import { RiTwitterXFill } from "react-icons/ri";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import GoogleMap from "@/components/googleMaps/GoogleMap";
import { SkeletonDetail } from "@/components/SkeletonDetail";
import { SocialLinks } from "@/components/SocialLinks";
import { getProductById } from "@/services/product.service";

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {
    data: product,
    isLoading,
    isError,
  } = useQuery(["product", id], () => getProductById(id ?? ""));
  const entity = product?.entity;

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const goBack = () => {
    navigate(-1);
  };

  // isError
  if (isError)
    return (
      <Stack
        h={"100vh"}
        color="white"
        justifyContent="center"
        alignContent="center"
      >
        <Alert status="error" bg={"primary.default"} height="100px">
          <MdRunningWithErrors size="30px" />
          <AlertTitle ml={4} fontSize="lg">
            Error al recuperar datos
          </AlertTitle>
        </Alert>
      </Stack>
    );

  const productsEntity = [
    {
      id: Number(id),
      bussinessName: entity?.bussiness_name,
      fantasyName: entity?.fantasy_name,
      lat: entity?.location_lat || 0,
      lng: entity?.location_lng || 0,
    },
  ];

  const center = {
    lat: entity?.location_lat || 0,
    lng: entity?.location_lng || 0,
  };

  return (
    <Container maxW={"1200"} mt={5}>
      <Button
        leftIcon={<IoArrowBack />}
        variant="link"
        colorScheme="null"
        onClick={goBack}
      >
        Volver
      </Button>

      {isLoading ? (
        <SkeletonDetail />
      ) : (
        <Stack>
          <GoogleMap markers={productsEntity} center={center} />
          <Card>
            <CardBody>
              <Heading size={{ base: "md", md: "lg" }}>
                {product?.title}
              </Heading>
            </CardBody>
          </Card>

          {/* Sobre nosotros */}
          <Card>
            <CardBody>
              <Stack divider={<StackDivider />} spacing="4">
                <Text fontSize="lg" fontWeight="bold">
                  Sobre Nosotros
                </Text>

                <Text pt="2" fontSize="md">
                  {entity?.about_us}
                </Text>
              </Stack>
              <Badge mt={4} fontSize="md" colorScheme="primary">
                {product?.product_type}
              </Badge>

              {/* <Tag
                mt={4}
                size="lg"
                bg="transparent"
                maxW="max-content"
                color="primary.600"
                border="1px"
              >
                {product?.product_type}
              </Tag> */}
            </CardBody>
          </Card>

          {/* Datos de la empresa */}
          <Card>
            <CardBody>
              <Stack divider={<StackDivider />} spacing="4">
                <HStack justifyContent={"space-between"}>
                  <Text fontSize="md" fontWeight="bold">
                    {entity?.fantasy_name}
                  </Text>

                  {/* Redes sociales */}
                  <HStack>
                    {entity?.web_profile && (
                      <SocialLinks
                        url={entity?.web_profile}
                        icon={<FaLink />}
                        aria-label={"Link"}
                      />
                    )}
                    {entity?.facebook_profile && (
                      <SocialLinks
                        url={entity?.facebook_profile}
                        icon={<FaFacebook />}
                        aria-label={"Link"}
                      />
                    )}
                    {entity?.instagram_profile && (
                      <SocialLinks
                        url={entity?.instagram_profile}
                        icon={<FaInstagram />}
                        aria-label={"Link"}
                      />
                    )}
                    {entity?.linkedin_profile && (
                      <SocialLinks
                        url={entity?.linkedin_profile}
                        icon={<FaLinkedin />}
                        aria-label={"Link"}
                      />
                    )}
                    {entity?.twitter_profile && (
                      <SocialLinks
                        url={entity?.twitter_profile}
                        icon={<RiTwitterXFill />}
                        aria-label={"Link"}
                      />
                    )}
                  </HStack>
                </HStack>
                {/* Direccion y tipo de empresa */}
                <Box>
                  <HStack>
                    <Icon as={FaLocationDot} />
                    <Text> {entity?.address}</Text>
                  </HStack>
                  <HStack>
                    <Icon as={LuHeartHandshake} />
                    <Text> {entity?.type.name}</Text>
                  </HStack>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        </Stack>
      )}
    </Container>
  );
};
