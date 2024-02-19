import { Container, Text } from "@chakra-ui/react";
import { useQuery } from "react-query";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { Map } from "@/components/googleMaps/Map";
import { ProductCard } from "@/components/ProductCard";
import { Carrousel } from "@/components/swiper/Carrousel";
import { getData } from "@/services/product.service";
import { Product } from "@/types";

export const Home = () => {
  const { data: products, isLoading, isError } = useQuery("products", getData);

  if (isLoading) return <Text>Loading...</Text>;
  if (isError) return <Text>Error fetching data</Text>;
  if (!products) return <Text>No data available</Text>;

  const mapMarkups = {
    lat: -34.6037,
    lng: -58.3816,
  };

  return (
    <Container maxW={"1200"} mt={5}>
      <Carrousel />
      <Map markups={mapMarkups} />

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 600: 2, 900: 3 }}>
        <Masonry gutter="15px">
          {products.data.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </Container>
  );
};
