import React from "react";
import { AppBar, Box, InputBase, Toolbar, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { logoURL } from "../../constants/constant";
import { ExpandMore, Menu } from "@mui/icons-material";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";

const StyledToolBar = styled(Toolbar)`
  background: black;
  min-height: 56px !important;
  padding: 0 120px !important;
  justify-content: space-between;
  & > div {
    display: flex;
    align-item: center;
    cursor: pointer;
    & > p {
      font-size: 14px;
      font-weight: 600;
    }
    & > p {
      font-size: 14px;
      font-weight: 600;
    }
  }
`;

const InputSearchField = styled(InputBase)`
  background: #ffffff;
  height: 30px;
  width: 55%;
`;

const Logo = styled("img")({
  width: 64,
});

export const Header = () => {
  return (
    <AppBar>
      <StyledToolBar>
        <Logo src={logoURL} alt="logo" />
        <Box>
          <Menu />
          <Typography>Menu</Typography>
        </Box>
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
