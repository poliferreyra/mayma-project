import { Container } from "@chakra-ui/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { Map } from "@/components/googleMaps/Map";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/services/products";

export const Home = () => {
  return (
    <Container maxW={"1200"}>
      <Map />

      {/* <SimpleGrid columns={3} spacing={5} mt={3}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            description={product.description}
            image={product.image}
          />
        ))}
      </SimpleGrid> */}

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
