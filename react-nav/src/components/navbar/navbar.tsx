import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Box,
  useMediaQuery,
  Drawer,
} from "@mui/material";
import { AccountCircle, Adb, Menu as MenuIcon } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import AuthButtons from "./AuthButtons";
import { useAuth } from "../../context/useAuth";

interface NavbarProps {
  links: { label: string; path: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const { token, setToken } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [open, setOpen] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const isMobile = useMediaQuery("(max-width: 600px)");

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setToken(null);
  };

  const renderLinks = () => (
    <Box sx={{ display: "flex", flexDirection: isMobile ? "column" : "row" }}>
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          style={({ isActive }) => ({
            color: isActive ? "#FFD700" : isMobile ? "black" : "white",
            margin: isMobile ? "10px 0" : "0 15px",
            fontSize: "1.2rem",
            textDecoration: "none",
            backgroundColor: "transparent",
            padding: "10px 15px",
            transition: "all 0.3s ease",
          })}
        >
          {link.label}
        </NavLink>
      ))}
    </Box>
  );

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ display: "flex", alignItems: "center" }}>
          <Adb sx={{ fontSize: "2rem", mr: 2 }} />
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={() => toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>

            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={() => toggleDrawer(false)}
            >
              <Box
                sx={{
                  width: 250,
                  display: "flex",
                  flexDirection: "column",
                  padding: 2,
                }}
              >
                {renderLinks()}
              </Box>
            </Drawer>
          </>
        ) : (
          renderLinks()
        )}
        <Box sx={{ flexGrow: 1 }} />
        {token ? (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
              <MenuItem onClick={handleMenuClose}>My Account</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>{" "}
            </Menu>
          </Box>
        ) : (
          <AuthButtons /> 
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
