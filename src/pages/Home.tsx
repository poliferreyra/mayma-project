import { Container } from "@chakra-ui/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { Map } from "@/components/googleMaps/Map";
import { ProductCard } from "@/components/ProductCard";
import { Carrousel } from "@/components/swiper/Carrousel";
import { products } from "@/services/products";

export const Home = () => {
  return (
    <Container maxW={"1200"} mt={5}>
      <Carrousel />
      <Map />

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="15px">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </Container>
  );
};
