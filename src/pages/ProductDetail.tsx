import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  Heading,
  HStack,
  Icon,
  Stack,
  StackDivider,
  Tag,
  Text,
} from "@chakra-ui/react";
import { FaLink, FaLocationDot } from "react-icons/fa6";
import { IoArrowBack } from "react-icons/io5";
import { LuHeartHandshake } from "react-icons/lu";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import GoogleMap from "@/components/googleMaps/GoogleMap";
import { SocialLinks } from "@/components/SocialLinks";
import { getProductById } from "@/services/product.service";

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: product,
    isLoading,
    isError,
  } = useQuery(["product", id], () => getProductById(id ?? ""));
  const entity = product?.entity;

  if (isLoading) return <Text>Loading...</Text>;
  if (isError) return <Text>Error fetching data</Text>;
  if (!product) return <Text>No data available</Text>;

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
      <Link to="/">
        <HStack>
          <Icon as={IoArrowBack} />
          <Text> Volver</Text>
        </HStack>
      </Link>
      {product ? (
        <Stack>
          <GoogleMap markers={productsEntity} center={center} />

          <Heading>{product.title}</Heading>

          {/* Sobre nosotros */}
          <Card>
            <CardHeader>
              <Heading size="md">Sobre Nosotros</Heading>
            </CardHeader>
            <CardBody>
              <Stack divider={<StackDivider />} spacing="4">
                <Box>
                  <Text pt="2" fontSize="sm">
                    {entity?.about_us}
                  </Text>
                </Box>
                <Tag
                  size="lg"
                  bg="transparent"
                  maxW="max-content"
                  color="primary.default"
                  border="1px"
                >
                  {product.product_type}
                </Tag>
              </Stack>
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
                  <SocialLinks
                    url={entity?.web_profile}
                    icon={<FaLink />}
                    aria-label={"Link"}
                  />
                </HStack>

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
      ) : (
        <Box>No se encontró el producto</Box>
      )}
    </Container>
  );
};
