import {
  Box,
  Button,
  Card,
  CardBody,
  Divider,
  Heading,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const numberOfLines = [4, 6, 8];

export const SkeletonCard = () => {
  return (
    <Card boxShadow="lg" borderRadius={"2xl"}>
      <Skeleton borderTopRadius={"2xl"} w="100%" mb={4} height={"171px"} />
      <CardBody>
        <Skeleton>
          <Heading mb={3} size={{ base: "xs", md: "sm" }}>
            Titulo
          </Heading>
        </Skeleton>

        <SkeletonText
          mt={3}
          mb={3}
          noOfLines={numberOfLines[Math.floor(Math.random() * 3)]}
          spacing="4"
          skeletonHeight="2"
        />
        <Divider />
        <Box display="flex" justifyContent="flex-end" p={2}>
          <Skeleton>
            <Button size={{ base: "xs", md: "sm" }}>Ver Más</Button>
          </Skeleton>
        </Box>
      </CardBody>
    </Card>
  );
};
