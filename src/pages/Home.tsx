import { Container, SimpleGrid } from "@chakra-ui/react";

import { Map } from "@/components/googleMaps/Map";
// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/services/products";

export const Home = () => {
  return (
    <Container maxW={"1200"}>
      <Map />

      <SimpleGrid columns={3} spacing={5} mt={3}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            description={product.description}
            image={product.image}
          />
        ))}
      </SimpleGrid>
    </Container>

    // <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
    //   <Masonry>
    //     {products.map((product) => (
    //       <ProductCard
    //         key={product.id}
    //         title={product.title}
    //         description={product.description}
    //         image={product.image}
    //       />
    //     ))}
    //   </Masonry>
    // </ResponsiveMasonry>
  );
};
