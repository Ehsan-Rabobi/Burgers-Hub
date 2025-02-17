import { Box, Button, Typography } from "@mui/material";
import React from "react";

export default function Banner() {
  return (
    <>
      <Box
        position={"relative"}
        width={"100vw"}
        sx={{ height: "calc(100vh - 70px )" }}
      >
        <img
          src={"/assets/images/hero-bg.jpg"}
          alt=""
          width={"100%"}
          height={"100%"}
          style={{ objectFit: "cover" }}
        />
        <Box
          position={"absolute"}
          left={70}
          top={120}
          display={"flex"}
          flexDirection={"column"}
          gap={3}
          width={"1550px"}
        >
          <Box display={"flex"} flexDirection={"column"} gap={3}>
            <Typography
              variant="h4"
              sx={{ color: "#ffffff", fontFamily: "cursive" }}
            >
              Fast Food Restaurant
            </Typography>
            <Typography color="white" fontFamily={""}>
              Doloremque, itaque aperiam facilis rerum, commodi, temporibus
              sapiente ad <br /> mollitia laborum quam quisquam esse error unde.
              Tempora ex doloremque, labore, <br /> sunt repellat dolore, iste
              magni quos nihil ducimus libero ipsam.
            </Typography>
            <Box>
              <Button
                sx={{
                  backgroundColor: "#ff6600",
                  padding: "12px 26px",
                  color: "white",
                  borderRadius: "20px",
                  fontWeight: "bold",
                }}
              >
                Order Online
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
