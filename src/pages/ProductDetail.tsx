import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  Heading,
  Stack,
  StackDivider,
  Tag,
  Text,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import GoogleMap from "@/components/googleMaps/GoogleMap";
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
      {product ? (
        <Stack>
          <GoogleMap markers={productsEntity} center={center} />
          <Box bg="red.200">
            <Heading>{product.title}</Heading>
          </Box>
          <Box>
            <Card bg="green.200">
              <CardHeader>
                <Heading size="sm">Sobre Nosotros</Heading>
              </CardHeader>

              <CardBody>
                <Stack divider={<StackDivider />} spacing="4">
                  <Box>
                    <Text pt="2" fontSize="sm">
                      {entity?.about_us}
                    </Text>
                  </Box>
                  <Box>
                    <Tag size="lg" variant="outline" colorScheme="blue">
                      {product.product_type}
                    </Tag>
                  </Box>
                </Stack>
              </CardBody>
            </Card>
          </Box>
          <Box>
            <Card bg="yellow.200">
              <CardBody>
                <Stack divider={<StackDivider />} spacing="4">
                  <Box>
                    <Text> {entity?.fantasy_name}</Text>
                  </Box>
                  <Box>
                    <Text> {entity?.address}</Text>
                    <Text> {entity?.type.name}</Text>
                  </Box>
                </Stack>
              </CardBody>
            </Card>
          </Box>
        </Stack>
      ) : (
        <Box>No se encontró el producto</Box>
      )}
    </Container>
  );
};
