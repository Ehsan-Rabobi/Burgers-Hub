import { Box, Button, MenuItem, MenuList, Typography } from "@mui/material";
import React from "react";
import "boxicons";
import headerImg from '../assets/images/hero-bg.jpg'

export default function Header() {
  return (
    <>
      <Box sx={{
        backgroundImage:`${headerImg}`,
        width:"100vw",
        height:"100vh",
        backgroundPosition:'center',
        backgroundRepeat:"no-repeat",
        backgroundSize:'cover'
      }}>
        <Box
          width={"100%"}
          height={"70px"}
          bgcolor={"gray"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-around"}
        >
          <Box>
            <Typography fontFamily={"cursive"}>Logo</Typography>
          </Box>
          <MenuList sx={{
            display: "flex",
          }}>
            <MenuItem>HOME</MenuItem>
            <MenuItem>MENU</MenuItem>
            <MenuItem>ABOUT</MenuItem>
            <MenuItem>BOOK TABLE</MenuItem>
          </MenuList>
          <Box display={'flex'} alignItems={'center'}>
            <Typography>
              <box-icon type="solid" name="user"></box-icon>
            </Typography>
            <Typography>
              <box-icon type="solid" name="cart"></box-icon>
            </Typography>
            <Typography>
              <box-icon name="search-alt-2"></box-icon>
            </Typography>
            <Button>Order Online</Button>
          </Box>
        </Box>
        <Box></Box>
      </Box>
    </>
  );
}
