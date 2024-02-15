import {
  Button,
  Card,
  CardBody,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import enBuenasManos from "@/assets/enBuenasManos.png";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const {
    title,
    id,
    //photo_path: img,
    short_description: shortDescription,
  } = product;
  return (
    <Card boxShadow="lg" borderRadius={"2xl"}>
      <Image
        src={enBuenasManos}
        alt={title}
        borderTopRadius={"2xl"}
        height={"171px"}
        objectFit={"cover"}
      />
      <CardBody>
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          {/* dangerouslySetInnerHTML para renderizar la descripción HTML */}
          <Text dangerouslySetInnerHTML={{ __html: shortDescription }} />
        </Stack>
        <Divider mt={3} />
        <Button
          as={Link}
          to={`/details/${id}`}
          variant="ghost"
          colorScheme="blue"
        >
          Ver detalle
        </Button>
      </CardBody>
    </Card>
  );
};
