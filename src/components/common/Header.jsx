import React, { useState } from "react";
import { AppBar, Box, InputBase, Toolbar, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { logoURL } from "../../constants/constant";
import { ExpandMore, Menu } from "@mui/icons-material";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";

// components
import { HeaderMenu } from "../HeaderMenu";

const StyledToolBar = styled(Toolbar)`
  background: black;
  min-height: 66px !important;
  padding: 0 110px !important;
  justify-content: space-between;
  & > * {
    padding: 0 12px;
  }

  & > div {
    display: flex;
    align-item: center;
    cursor: pointer;
    & > p {
      font-size: 14px;
      font-weight: 600;
    }
  }
  & > p {
    font-size: 14px;
    font-weight: 600;
  }
`;

const InputSearchField = styled(InputBase)`
  background: #ffffff;
  height: 30px;
  width: 55%;
  border-radius: 7px;
`;

const Logo = styled("img")({
  width: 64,
});

export const Header = () => {
  const [open, setOpen] = useState(null);

  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <AppBar>
      <StyledToolBar>
        <Logo src={logoURL} alt="logo" />
        <Box onClick={handleClick}>
          <Menu />
          <Typography>Menu</Typography>
        </Box>
        <HeaderMenu open={open} handleClose={handleClose} />
        <InputSearchField />
        <Typography>
          IMDb<Box component="span">Pro</Box>
        </Typography>
        <Box>
          <BookmarkAddedIcon />
          <Typography>WatchList</Typography>
        </Box>
        <Typography>sign In</Typography>
        <Box>
          <Typography>EN</Typography>
          <ExpandMore />
        </Box>
      </StyledToolBar>
    </AppBar>
  );
};
