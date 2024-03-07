import { Menu, MenuItem } from "@mui/material";
import React from "react";

export const HeaderMenu = ({ open, handleClose }) => {
  const openMenu = Boolean(open);
  return (
    <Menu
      id="demo-positioned-menu"
      anchorEl={open}
      open={openMenu}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <MenuItem onClick={handleClose}>Popular</MenuItem>
      <MenuItem onClick={handleClose}>Top Rated</MenuItem>
      <MenuItem onClick={handleClose}>Upcoming</MenuItem>
    </Menu>
  );
};
