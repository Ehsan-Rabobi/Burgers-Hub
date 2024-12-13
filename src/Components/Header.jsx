import { Box, Button, MenuItem, MenuList, Typography } from "@mui/material";
import React from "react";
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
              textAlign={"center"}
              fontFamily={"cursive"}
              variant="h4"
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
            <MenuItem sx={{ fontSize: "14px", color: "#ffa600" }}>
              HOME
            </MenuItem>
            <MenuItem sx={{ fontSize: "14px" }}>MENU</MenuItem>
            <MenuItem sx={{ fontSize: "14px" }}>ABOUT</MenuItem>
            <MenuItem sx={{ fontSize: "14px" }}>BOOK TABLE</MenuItem>
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
        <Box></Box>
      </Box>
    </>
  );
}
