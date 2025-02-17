import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";

export default function Card() {
  return (
    <>
      <Stack
        marginTop={"85px"}
        width={"100%"}
        minHeight={"200px"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
        flexWrap={"wrap"}
        gap={6}
        padding={'0 20px'}
      >
        <Box
          width={"600px"}
          height={"240px"}
          bgcolor={"#222831"}
          display={"flex"}
          borderRadius={"8px"}
          padding={1}
          sx={{
            "&:hover img": {
              transform: "scale(1.2)",
              transition: "transform 0.2s ease-in-out",
            },
          }}
        >
          <Box
            width={"45%"}
            display={"flex"}
            justifyContent={"center"}
            height={"100%"}
            padding={1}
          >
            <Box
              width={"85%"}
              height={"100%"}
              sx={{
                border: "7px solid #ff6600",
                borderRadius: "100%",
                overflow: "hidden",
              }}
            >
              <img
                src={"/assets/images/o1.jpg"}
                alt=""
                width={"100%"}
                height={"100%"}
                style={{
                  borderRadius: "100%",
                  objectFit: "cover",
                  transition: "0.2s ease-in-out ",
                }}
              />
            </Box>
          </Box>
          <Box
            width={"55%"}
            height={"100%"}
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"column"}
            gap={1}
          >
            <Typography
              fontFamily={"cursive"}
              fontWeight={"bold"}
              fontSize={"18px"}
              color="white"
            >
              Tasty Thursdays
            </Typography>
            <Typography
              fontFamily={"cursive"}
              fontWeight={"bold"}
              color="white"
            >
              20% Off
            </Typography>
            <Button
              display={"flex"}
              sx={{
                backgroundColor: "#ff6600",
                marginTop: "15px",
                width: "200px",
                alignItems: "center",
                gap: "5px",
                padding: "16px 22px",
                borderRadius: "50px",
              }}
            >
              <Typography fontSize={"16px"} color="white">
                Oredr Now
              </Typography>
              <box-icon type="solid" name="cart" color={"white"}></box-icon>
            </Button>
          </Box>
        </Box>
        <Box
          width={"600px"}
          height={"240px"}
          bgcolor={"#222831"}
          display={"flex"}
          borderRadius={"8px"}
          padding={1}
          sx={{
            "&:hover img": {
              transform: "scale(1.2)",
              transition: "transform 0.2s ease-in-out",
            },
          }}
        >
          <Box
            width={"45%"}
            display={"flex"}
            justifyContent={"center"}
            height={"100%"}
            padding={1}
          >
            <Box
              width={"85%"}
              height={"100%"}
              sx={{
                border: "7px solid #ff6600",
                borderRadius: "100%",
                overflow: "hidden",
              }}
            >
              <img
                src={"/assets/images/o2.jpg"}
                alt=""
                width={"100%"}
                height={"100%"}
                style={{
                  borderRadius: "100%",
                  objectFit: "cover",
                  transition: "0.2s ease-in-out ",
                }}
              />
            </Box>
          </Box>
          <Box
            width={"55%"}
            height={"100%"}
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"column"}
            gap={1}
          >
            <Typography
              fontFamily={"cursive"}
              fontWeight={"bold"}
              fontSize={"18px"}
              color="white"
            >
              Pizza Days
            </Typography>
            <Typography
              fontFamily={"cursive"}
              fontWeight={"bold"}
              color="white"
            >
              15% Off
            </Typography>
            <Button
              display={"flex"}
              sx={{
                backgroundColor: "#ff6600",
                marginTop: "15px",
                width: "200px",
                alignItems: "center",
                gap: "5px",
                padding: "16px 22px",
                borderRadius: "50px",
              }}
            >
              <Typography fontSize={"16px"} color="white">
                Oredr Now
              </Typography>
              <box-icon type="solid" name="cart" color={"white"}></box-icon>
            </Button>
          </Box>
        </Box>
      </Stack>
    </>
  );
}
