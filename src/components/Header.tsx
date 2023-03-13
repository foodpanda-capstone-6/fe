import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SideDrawer from "./SideDrawer";
import { useNavigate } from "react-router-dom";
import React from "react";

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  username: string | null;
}

const test = "asd";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Header: React.FC<HeaderProps> = ({
  title,
  setIsAuthenticated,
  username,
}) => {
  const navigate: (path: string) => void = useNavigate();

  return (
    <React.Fragment>
      <Toolbar
        sx={{
          backgroundColor: "#FF2B85",
          color: "#FFFFFF",
        }}
      >
        <SideDrawer setIsLogin={setIsAuthenticated} username={username} />
        <Typography
          onClick={() => navigate("/")}
          variant="h6"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 2 }}
        >
          {title}
        </Typography>
        <FavoriteBorderIcon />
      </Toolbar>
      <Toolbar
        sx={{
          backgroundColor: "#FF2B85",
          color: "#FFFFFF",
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase fullWidth placeholder="Search shops & restaurants" />
        </Search>
      </Toolbar>
    </React.Fragment>
  );
};

export default Header;
