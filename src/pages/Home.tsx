import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Card,
  CardFooter,
  Container,
  Heading,
  Skeleton,
  Stack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MdRunningWithErrors } from "react-icons/md";
import { useQuery } from "react-query";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useNavigate, useSearchParams } from "react-router-dom";

import { Filter } from "@/components/Filter";
import GoogleMap from "@/components/googleMaps/GoogleMap";
import { Pagination } from "@/components/Pagination";
import { ProductCard } from "@/components/ProductCard";
import { SkeletonCard } from "@/components/SkeletonCard";
import { Carrousel } from "@/components/swiper/Carrousel";
import { getData } from "@/services/product.service";
import { Product } from "@/types";
import { createArray } from "@/utils/utils";

export const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [meta, setMeta] = useState({
    page: Number(searchParams.get("page")) || 1,
    title: searchParams.get("title") || "",
    description: searchParams.get("description") || "",
    productTypes: searchParams.get("productTypes") || "",
  });

  const {
    data: products,
    isLoading,
    isError,
  } = useQuery(["products", meta], () => getData(meta));

  useEffect(() => {
    const upDatedParams: { [key: string]: string } = {
      page: meta.page.toString(),
    };

    if (meta.title) {
      upDatedParams.title = meta.title;
    }
    if (meta.description) {
      upDatedParams.description = meta.description;
    }

    if (meta.productTypes) {
      upDatedParams.productTypes = meta.productTypes;
    }

    setSearchParams(upDatedParams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [meta]);

  const handleBackToInit = () => {
    navigate("/", { state: { page: 1 } }); // Esto navega a la ruta "/" y pasa { page: 1 } como estado/parametro

    const updatedMeta = {
      ...meta,
      page: 1,
      title: "",
      description: "",
      productTypes: "",
    };
    setMeta(updatedMeta);
  };

  if (isError)
    return (
      <Stack
        h={"100vh"}
        color="white"
        justifyContent="center"
        alignContent="center"
      >
        <Alert status="error" bg={"primary.600"} height="100px">
          <MdRunningWithErrors size="30px" />
          <AlertTitle ml={4} fontSize="lg">
            Error al recuperar datos
          </AlertTitle>
        </Alert>
      </Stack>
    );

  const productsEntities = products?.data.map((product) => {
    return {
      id: product.entity.id,
      bussinessName: product.entity.bussiness_name,
      fantasyName: product.entity.fantasy_name,
      lat: product.entity.location_lat,
      lng: product.entity.location_lng,
    };
  });
  // Coordenadas promedio BsAs - Santa Fe
  const center = { lat: -33.1185, lng: -59.5408 };

  return (
    <Container maxW={"1200"} mt={5}>
      {isLoading ? (
        <Skeleton>
          <Box w="100%" h={"300px"} />
        </Skeleton>
      ) : (
        <Carrousel />
      )}

      <GoogleMap markers={productsEntities} center={center} />

      {/* Si no hay mas productos/servicios no muestra filtros */}
      {products?.data.length !== 0 && (
        <Filter meta={meta} setMeta={setMeta} isLoading={isLoading} />
      )}

      {/* No hay mas productos/servicios para mostrar */}
      {products?.data.length === 0 && (
        <Card align="center" mt={5} p={9}>
          <Heading size="md"> No hay productos y/o servicios</Heading>
          <CardFooter>
            <Button onClick={handleBackToInit}>Inicio</Button>
          </CardFooter>
        </Card>
      )}

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 600: 2, 900: 3 }}>
        <Masonry gutter="15px">
          {isLoading
            ? createArray(9).map((e) => <SkeletonCard key={e} />)
            : products?.data.map((product: Product) => (
                <ProductCard key={product.id} product={product} />
              ))}
        </Masonry>
      </ResponsiveMasonry>

      {/* Se esconde paginado si no hay productos/servicios */}
      {products?.data.length !== 0 && (
        <Pagination
          page={meta.page}
          meta={meta}
          setMeta={setMeta}
          isLoading={isLoading}
        />
      )}
    </Container>
  );
};
