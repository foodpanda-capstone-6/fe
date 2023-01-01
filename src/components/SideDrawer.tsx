import {
  Drawer,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Typography,
  AppBar,
  Toolbar,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const SideDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navigate: (path: string) => void = useNavigate();

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => setIsDrawerOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <AppBar position="static">
          <Toolbar
            sx={{
              backgroundColor: "#FF2B85",
              height: "8rem",
              color: "#FFFFFF",
            }}
          >
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    primaryTypographyProps={{ fontSize: "18px" }}
                    primary="Name"
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Corporate Account" />
                </ListItemButton>
              </ListItem>
            </List>
          </Toolbar>
        </AppBar>
        <Box p={2} width="300px" textAlign="center" role="presentation">
          <nav aria-label="sidebar options">
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Become a pandapro" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Order & reordering" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Profile" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Address" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Challenges & Rewards" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary="Vouchers"
                    onClick={() => {
                      navigate("/voucher/user");
                      setIsDrawerOpen(!isDrawerOpen);
                    }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Help Center" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Invite a Friend" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Settings" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Log out" />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Box>
      </Drawer>
    </>
  );
};

export default SideDrawer;
