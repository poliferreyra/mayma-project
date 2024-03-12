import {
  Button,
  Card,
  CardFooter,
  Container,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useNavigate, useSearchParams } from "react-router-dom";

import { Filter } from "@/components/Filter";
import GoogleMap from "@/components/googleMaps/GoogleMap";
import { Pagination } from "@/components/Pagination";
import { ProductCard } from "@/components/ProductCard";
import { Carrousel } from "@/components/swiper/Carrousel";
import { getData } from "@/services/product.service";
import { Product } from "@/types";

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

  if (isLoading) return <Text>Loading...</Text>;
  if (isError) return <Text>Error fetching data</Text>;
  if (!products) return <Text>No data available</Text>;

  const productsEntities = products.data.map((product) => {
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
      <Carrousel />
      <GoogleMap markers={productsEntities} center={center} />

      {/* Si no hay mas productos/servicios no muestra filtros */}
      {products.data.length !== 0 && <Filter meta={meta} setMeta={setMeta} />}

      {/* No hay mas productos/servicios para mostrar */}
      {products.data.length === 0 && (
        <Card align="center" mt={5} p={9}>
          <Heading size="md"> No hay productos y/o servicios</Heading>
          <CardFooter>
            <Button
              size="md"
              onClick={handleBackToInit}
              color="white"
              borderRadius="20px"
              bg="#d43f3a"
            >
              Volver al inicio
            </Button>
          </CardFooter>
        </Card>
      )}

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 600: 2, 900: 3 }}>
        <Masonry gutter="15px">
          {products.data.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Masonry>
      </ResponsiveMasonry>

      {/* Se esconde paginado si no hay productos/servicios */}
      {products.data.length !== 0 && (
        <Pagination page={meta.page} meta={meta} setMeta={setMeta} />
      )}
    </Container>
  );
};
