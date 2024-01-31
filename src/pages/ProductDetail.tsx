import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import { products } from "@/services/products";

export const ProductDetail = () => {
  const { id } = useParams<{ id: string  }>();

  // ❌ chequear el error
   const productIdAsNumber = parseInt(id || "No exite producto");

  const product = products.find((p) => p.id === productIdAsNumber);

  return (
    <Container>
      {product ? (
        <Box>
          <Heading>{product.title}</Heading>
          <Image src={product.image} alt={product.title} />
          <Text>{product.description}</Text>
        </Box>
      ) : (
        <Box>No se encontró el producto</Box>
      )}
    </Container>
  );
};
