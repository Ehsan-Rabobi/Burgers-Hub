import { Box, Button, MenuItem, MenuList, Typography } from "@mui/material";
import React, { createRef } from "react";
import "boxicons";
import headerImg from "../assets/images/hero-bg.jpg";

export default function Header() {
 
  return (
    <>
      <Box position={"relative"} width={"100vw"} height={"100vh"}>
        <img
          src={headerImg}
          alt=""
          width={"100%"}
          height={"100%"}
          style={{ objectFit: "cover" }}
        />
        <Box
          width={"100%"}
          height={"80px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={5}
          position={"absolute"}
          left={0}
          top={0}
          color={"white"}
        >
          <Box width={"33%"}>
            <Typography
              textAlign={""}
              fontFamily={"cursive"}
              variant="h4"
              paddingLeft={9}
              sx={{ cursor: "pointer" }}
            >
              Logo
            </Typography>
          </Box>
          <MenuList
            sx={{
              display: "flex",
              width: "33%",
              justifyContent: "center",
            }}
          >
            <MenuItem
              sx={{
                fontSize: "14px",
                color: "#ffa600",
                "&:hover": { color: "#ffa600" },
              }}
            >
              HOME
            </MenuItem>
            <MenuItem
              sx={{ fontSize: "14px", "&:hover": { color: "#ffa600" } }}
            >
              MENU
            </MenuItem>
            <MenuItem
              sx={{ fontSize: "14px", "&:hover": { color: "#ffa600" } }}
            >
              ABOUT
            </MenuItem>
            <MenuItem
              sx={{ fontSize: "14px", "&:hover": { color: "#ffa600" } }}
            >
              BOOK TABLE
            </MenuItem>
          </MenuList>
          <Box
            display={"flex"}
            alignItems={"center"}
            gap={2}
            width={"33%"}
            justifyContent={"center"}
          >
            <Typography>
              <box-icon
                type="solid"
                name="user"
                color="white"
                style={{ cursor: "pointer" }}
              ></box-icon>
            </Typography>
            <Typography>
              <box-icon
                type="solid"
                name="cart"
                color="white"
                style={{ cursor: "pointer" }}
              ></box-icon>
            </Typography>
            <Typography>
              <box-icon
                name="search-alt-2"
                color="white"
                style={{ cursor: "pointer" }}
              ></box-icon>
            </Typography>
            <Button
              sx={{
                backgroundColor: "#ffa600",
                padding: "2px 6px",
                color: "white",
              }}
            >
              Order Online
            </Button>
          </Box>
        </Box>
        <Box position={"absolute"} left={70} top={150} display={'flex'} >
          <Box display={"flex"} flexDirection={"column"} gap={3} width={'1550px'}>
            <Typography
              variant="h4"
              sx={{ color: "#ffffff", fontFamily: "cursive" }}
            >
              Fast Food Restaurant
            </Typography>
            <Typography color="white">
              Doloremque, itaque aperiam facilis rerum, commodi, temporibus
              sapiente ad <br /> mollitia laborum quam quisquam esse error unde.
              Tempora ex doloremque, labore, <br /> sunt repellat dolore, iste
              magni quos nihil ducimus libero ipsam.
            </Typography>
            <Box>
              <Button
                sx={{
                  backgroundColor: "#ffa600",
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
          <Box display={"flex"} flexDirection={"column"} gap={3} width={'1550px'}>
            <Typography
              variant="h4"
              sx={{ color: "#ffffff", fontFamily: "cursive" }}
            >
              Fast Food 
            </Typography>
            <Typography color="white">
              Doloremque, itaque aperiam facilis rerum, commodi, temporibus
              sapiente ad <br /> mollitia laborum quam quisquam esse error unde.
              Tempora ex doloremque, labore, <br /> sunt repellat dolore, iste
              magni quos nihil ducimus libero ipsam.
            </Typography>
            <Box>
              <Button
                sx={{
                  backgroundColor: "#ffa600",
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
          <Box display={"flex"} flexDirection={"column"} gap={3} width={'1550px'}>
            <Typography
              variant="h4"
              sx={{ color: "#ffffff", fontFamily: "cursive" }}
            >
              Fast Food Restaurant
            </Typography>
            <Typography color="white">
              Doloremque, itaque aperiam facilis rerum, commodi, temporibus
              sapiente ad <br /> mollitia laborum quam quisquam esse error unde.
              Tempora ex doloremque, labore, <br /> sunt repellat dolore, iste
              magni quos nihil ducimus libero ipsam.
            </Typography>
            <Box>
              <Button
                sx={{
                  backgroundColor: "#ffa600",
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
