import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import fetchData from "../../Utils/fetchData";
import "./styles.css";
import { Box, Button, Typography } from "@mui/material";

export default function Slider() {
  const [data, setData] = useState();
  // useEffect(()=>{
  //   (async()=>{
  //     try {
  //       const res = await fetch('https://pizza-and-desserts.p.rapidapi.com/pizzas', {
  //         method: 'GET',
  //         headers: {
  //           'x-rapidapi-key': 'b8b59189b5mshe41403545ddc58dp1b00bcjsn0d8cc8e064fe',
  //           'x-rapidapi-host': 'pizza-and-desserts.p.rapidapi.com'
  //         }
  //       })
  //       const data = await res.json()
  //       setData(data)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   })()
  // } , [])

  // const items = data?.map((e,index)=>{
  //   return(
  //     <SwiperSlide key={index}>
  //       <div className="slider-item">
  //         <img src={e.image} alt={e.name} />
  //       </div>
  //     </SwiperSlide>
  //   )
  // })
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        style={{ marginTop: "300px" , padding:"0 80px" }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination]}
      >
        <SwiperSlide className='card'>
          <img
            src="./assets/images/o1.jpg"
            alt=""
            style={{ borderRadius: "20px", overflow: "hidden" }}
          />
          <Box>
            <Typography>name</Typography>
            <Typography>description</Typography>
            <Typography>price</Typography>
            <Box>
              <Button>add to cart</Button>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide className='card'>
          <img src="./assets/images/o1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className='card'>
          <img src="./assets/images/o1.jpg" alt="" />
        </SwiperSlide>{" "}
        <SwiperSlide className='card'>
          <img src="./assets/images/o1.jpg" alt="" />
        </SwiperSlide>{" "}
        <SwiperSlide className='card'>
          <img src="./assets/images/o1.jpg" alt="" />
        </SwiperSlide>{" "}
        <SwiperSlide className='card'>
          <img src="./assets/images/o1.jpg" alt="" />
        </SwiperSlide>{" "}
        <SwiperSlide className='card'>
          <img src="./assets/images/o1.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
