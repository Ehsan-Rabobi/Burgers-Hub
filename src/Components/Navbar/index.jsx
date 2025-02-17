import { Box, Button, MenuItem, MenuList, Typography } from "@mui/material";
import React from "react";
import "boxicons";
import { LunchDining } from "@mui/icons-material";
import 'animate.css';

export default function Navbar() {
  return (
    <>
      <Box bgcolor={"#ff6600"} width={"100%"} height={"70px"} display={"flex"} alignItems={"center"} justifyContent={"center"} gap={5} color={"white"}
      >
        <Box width={"25%"} paddingLeft={5} >
          <img src={"assets/images/hamburger (1).png"} className="animate__animated animate__flash animate__infinite animate__slower" alt="" style={{  width: "50px",height: "50px" , color:"white"}}
          />
          {/* <LunchDining fontSize='large' className="animate__animated animate__heartBeat animate__infinite animate__slower"/> */}
        </Box>
        <MenuList sx={{display: "flex",width: "33%",justifyContent: "center"}}>
          <MenuItem sx={{ fontSize: "14px", color: "white", "&:hover": { color: "#ffffff90", backgroundColor: "transparent", textShadow: "0 0 15px white" }}}>
            HOME
          </MenuItem>
          <MenuItem sx={{ fontSize: "14px", color: "white", "&:hover": { color: "#ffffff90", backgroundColor: "transparent", textShadow: "0 0 15px white", }, }}
          >
            MENU
          </MenuItem>
          <MenuItem sx={{ fontSize: "14px", color: "white", "&:hover": { color: "#ffffff90", backgroundColor: "transparent", textShadow: "0 0 15px white", }, }}
          >
            ABOUT
          </MenuItem>
          <MenuItem sx={{ fontSize: "14px", color: "white", "&:hover": { color: "#ffffff90", backgroundColor: "transparent", textShadow: "0 0 15px white", } }}
          >
            BOOK TABLE
          </MenuItem>
        </MenuList>
        <Box display={"flex"} alignItems={"center"} gap={2} width={"33%"} justifyContent={"center"}
        >
          <Typography >
            <box-icon type="solid"  size="20px" name="user" color="white" style={{ cursor: "pointer"  }}
            ></box-icon>
          </Typography>
          <Typography>
            <box-icon type="solid" size="20px" name="cart" color="white" style={{ cursor: "pointer" }}
            ></box-icon>
          </Typography>
          <Typography>
            <box-icon name="search-alt-2" size="20px" color="white" style={{ cursor: "pointer" }}
            ></box-icon>
          </Typography>
          <Button sx={{ backgroundColor: "#ffffff", padding: "2px 6px", color: "#ff6600", }}
          >
            Order Online
          </Button>
        </Box>
      </Box>
    </>
  );
}
