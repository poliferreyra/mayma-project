import {
  Button,
  Card,
  CardBody,
  Divider,
  Heading,
  Image,
  Link,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link as LinkRouter } from "react-router-dom";

import enBuenasManos from "@/assets/enBuenasManos.png";
import { Product } from "@/types";
import { IMG_EXTENSIONS } from "@/utils/utils";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const {
    title,
    id,
    photo_path: img,
    short_description: shortDescription,
    entity,
  } = product;

  const isValidImg = IMG_EXTENSIONS.some((ext) => img?.includes(ext));

  return (
    <Card boxShadow="lg" borderRadius={"2xl"}>
      {import.meta.env.PROD && isValidImg && (
        <Image
          src={`${import.meta.env.VITE_STORAGE_URL}${img}`}
          alt={title}
          borderTopRadius={"2xl"}
          height={"171px"}
          objectFit={"cover"}
        />
      )}
      {import.meta.env.DEV && (
        <Image
          src={enBuenasManos}
          alt={title}
          borderTopRadius={"2xl"}
          height={"171px"}
          objectFit={"cover"}
        />
      )}

      <CardBody>
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          {/* dangerouslySetInnerHTML para renderizar la descripción HTML */}
          <Text dangerouslySetInnerHTML={{ __html: shortDescription }} />
        </Stack>
        <Divider mt={3} />

        <Stack mt="6" direction="row" align={"center"}>
          <Link
            isExternal
            size="sm"
            fontWeight={"500"}
            color={"secondary.500"}
            href={entity?.web_profile}
          >
            {entity.fantasy_name}
          </Link>

          <Spacer />
          <Button
            as={LinkRouter}
            to={`/details/${id}`}
            colorScheme="secondary"
            size={{ base: "sm", md: "md" }}
          >
            Más Info
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
};
