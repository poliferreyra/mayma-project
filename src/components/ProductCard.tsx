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

interface ProductCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const ProductCard = (props: ProductCardProps) => {
  return (
    <Card boxShadow="lg" borderRadius={"2xl"}>
      <CardBody>
        <Image src={props.image} alt={props.title} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{props.title}</Heading>
          <Text>{props.description}</Text>
        </Stack>
        <Divider mt={3} />
        <Button
          as={Link}
          to={`/details/${props.id}`}
          variant="ghost"
          colorScheme="blue"
        >
          Ver detalle
        </Button>
      </CardBody>
    </Card>
  );
};
