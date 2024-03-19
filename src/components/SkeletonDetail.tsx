import {
  Box,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
  Tag,
} from "@chakra-ui/react";

const numberOfLines = [4, 8, 12];

export const SkeletonDetail = () => {
  return (
    <Stack mt="300px">
      <SkeletonText noOfLines={1} as="span" skeletonHeight="6" width="80%" />

      {/* Sobre nosotros */}
      <Card>
        <CardHeader width="20%">
          <SkeletonText noOfLines={1} as="span" />
        </CardHeader>
        <CardBody>
          <Stack spacing="4">
            <SkeletonText
              mt={3}
              mb={3}
              noOfLines={numberOfLines[Math.floor(Math.random() * 3)]}
              spacing="2"
              skeletonHeight="2"
            />
          </Stack>
          <Skeleton width="10%" borderRadius="5px" display="inline-block">
            <Tag>Servicio</Tag>
          </Skeleton>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <Stack spacing="4">
            <HStack justifyContent={"space-between"}>
              <SkeletonText noOfLines={1} width="20%" as="span" />
              <SkeletonCircle size="10" />
            </HStack>

            <Box>
              <HStack mb="2">
                <SkeletonCircle size="2" />
                <SkeletonText noOfLines={1} width="30%" as="span" />
              </HStack>
              <HStack>
                <SkeletonCircle size="2" />
                <SkeletonText noOfLines={1} width="25%" as="span" />
              </HStack>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Stack>
  );
};
