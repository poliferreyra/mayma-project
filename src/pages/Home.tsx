import { Container, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useSearchParams } from "react-router-dom";

import GoogleMap from "@/components/googleMaps/GoogleMap";
import { Pagination } from "@/components/Pagination";
import { ProductCard } from "@/components/ProductCard";
import { Carrousel } from "@/components/swiper/Carrousel";
import { getData } from "@/services/product.service";
import { Product } from "@/types";

export const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [meta, setMeta] = useState({
    page: Number(searchParams.get("page")) || 1,
    title: "",
    description: "",
    productTypes: "",
    to: 18,
  });

  const {
    data: products,
    isLoading,
    isError,
  } = useQuery(["products", meta], () => getData(meta));

  useEffect(() => {
    const upDateParams = {
      page: meta.page.toString(),
    };

    setSearchParams(upDateParams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [meta, searchParams]);

  // Calcula la cantidad de paginas
  const calcTotalPage = meta.to / 9;
  console.log(calcTotalPage);

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

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 600: 2, 900: 3 }}>
        <Masonry gutter="15px">
          {products.data.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
      <Pagination
        page={meta.page}
        totalPage={calcTotalPage}
        meta={meta}
        setMeta={setMeta}
      />
    </Container>
  );
};
