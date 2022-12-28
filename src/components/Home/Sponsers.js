import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper";
export default function Sponsers() {
  const logos = [
    "https://pngimg.com/uploads/amazon/amazon_PNG25.png",
    "/slack.png",
    "/skype.png",
    "/capgemini.png",
    "/Kiwi.png",
    "/SNOW.png",
  ];
  return (
    <Box w="90%" m="auto" py="40px">
      <Swiper
        // spaceBetween={30}
        // slidesPerView={5}
        autoplay={{
          delay: 2000,
        }}
        // onSlideChange={() => console.log("slide change")}
        // loop={true}
        // onSwiper={(swiper) => console.log(swiper)}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        {logos.map((logo) => (
          <SwiperSlide>
            <Box
              w="100%"
              h="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Image src={logo} h="40px" />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
