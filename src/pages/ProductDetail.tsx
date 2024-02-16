import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import enBuenasManos from "@/assets/enBuenasManos.png";
import { getProductById } from "@/services/product.service";

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: product,
    isLoading,
    isError,
  } = useQuery(["product", id], () => getProductById(id ?? ""));

  if (isLoading) return <Text>Loading...</Text>;
  if (isError) return <Text>Error fetching data</Text>;
  if (!product) return <Text>No data available</Text>;

  return (
    <Container>
      {product ? (
        <Box>
          <Heading>{product.title}</Heading>
          <Image src={enBuenasManos} alt={product.title} />
          <Text dangerouslySetInnerHTML={{ __html: product.description }} />
        </Box>
      ) : (
        <Box>No se encontró el producto</Box>
      )}
    </Container>
  );
};
