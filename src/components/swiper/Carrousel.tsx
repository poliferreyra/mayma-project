// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";

import { Box, Button, Heading, Highlight } from "@chakra-ui/react";
import { Link } from "react-router-dom";
// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import slider1 from "@/assets/slider1.png";
import slider2 from "@/assets/slider2.jpg";

export const Carrousel = () => {
  return (
    <Swiper
      effect={"fade"}
      grabCursor={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      modules={[EffectFade, Navigation, Pagination, Autoplay]}
      className="mySwiper"
    >
      {/* slide corazón */}
      <SwiperSlide>
        <Box
          w="100%"
          h="300px"
          bgImage={`url(${slider1})`}
          bgSize={"cover"}
          objectFit={"cover"}
          bgPosition="top"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box>
            <Heading
              lineHeight={{ base: "0", md: "1" }}
              fontSize={{ base: "14px", md: "30px", lg: "35px" }}
            >
              <Highlight
                query="proyectos innovadores"
                styles={{
                  bg: "primary.500",
                  color: "white",
                  px: "1",
                  rounded: "5px",
                }}
              >
                Buscamos proyectos innovadores
              </Highlight>
            </Heading>

            <br />
            <Heading
              lineHeight={{ base: "0", md: "1" }}
              fontSize={{ base: "14px", md: "30px", lg: "35px" }}
            >
              de salud física y mental
            </Heading>
            <Button
              as={Link}
              to="https://mayma.lat/salud"
              target="_blank"
              rel="noopener noreferrer"
              size={{ base: "sm", md: "md" }}
              mt="24px"
            >
              Quiero + info
            </Button>
          </Box>
        </Box>
      </SwiperSlide>
      
      {/* slide grupo */}
      <SwiperSlide>
        <Box
          w="100%"
          h="300px"
          bgImage={`url(${slider2})`}
          bgSize={"cover"}
          objectFit={"cover"}
          bgPosition="center"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box>
            <Heading
              lineHeight={{ base: "0", md: "1" }}
              color="white"
              fontSize={{ base: "14px", md: "30px", lg: "35px" }}
            >
              <Highlight
                query="fortalecemos emprendedores"
                styles={{
                  bg: "secondary.400",
                  color: "white",
                  px: "1",
                  rounded: "5px",
                }}
              >
                Hace 17 años fortalecemos emprendedores
              </Highlight>
            </Heading>

            <br />
            <Heading
              lineHeight={{ base: "0", md: "1" }}
              color="white"
              fontSize={{ base: "14px", md: "30px", lg: "35px" }}
            >
              socioambientales de Lationoamérica
            </Heading>
            <Button
              as={Link}
              to="https://mayma.org.ar/hablemos?_gl=1*6so4g2*_ga*MTk0NzQ0ODMyLjE3MDcxNjEyMzU.*_ga_JZ7CXM01CB*MTcwNzIyNjk4NC4yLjEuMTcwNzIyODQxMC4wLjAuMA.."
              target="_blank"
              rel="noopener noreferrer"
              size={{ base: "sm", md: "md" }}
              colorScheme={"secondary"}
              mt="24px"
            >
              Hablemos
            </Button>
          </Box>
        </Box>
      </SwiperSlide>
    </Swiper>
  );
};
