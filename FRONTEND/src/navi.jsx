import React, { useState } from "react";
import Swal from "sweetalert2";
import { Button, ThemeProvider } from "@mui/material";
import { FaServicestack } from "react-icons/fa6";
import { createTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import CssBaseline from "@mui/material/CssBaseline";

import { deleteUser, deleteUserDetails } from "./Store/masterSlice";
import { FaUser, FaMoneyBillTrendUp, FaBookBookmark } from "react-icons/fa6";
// import { useSelector } from 'react-redux';
// import { LuLogOut } from "react-icons/lu";
// import U from './p';

const theme = createTheme({
  palette: {
    primary: {
      main: "#F3F6F7",
    },
    secondary: {
      main: "#031D44",
    },
  },
});

function Navba() {

  const dispatch = useDispatch();

  const navigate = useNavigate();
  
  const { users } = useSelector((state) => state.master);

  console.log("from nav", users);


  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const eventLogout = () => {
    let timerInterval;
    Swal.fire({
      title: "Successfully LoggedOut !",
      html: "Redirecting in <b></b> milliseconds.",
      timer: 500,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
    setTimeout(() => {
      dispatch(deleteUser());
      dispatch(deleteUserDetails());
      navigate("/login");

      dispatch(deleteToken());
      navigate("/");
    }, 3000);
  };


  const { userDetails } = useSelector(store => store.master);

  // const userName = userDetails.firstName; 


  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" color="secondary">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              {/* <FaServicestack size={32} /> */}
              <Typography
                variant="h3"
                noWrap
                component="a"
                href="/"
                sx={{
                  ml: 2,
                  fontSize: 50,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  textDecoration: "none",
                }}
              >
                <img src="images/CLERA.png" width={"33%"}></img>
              </Typography>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="#"
                sx={{
                  mr: 1,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "secondary",
                  textDecoration: "none",
                }}
              >
                CLERA
              </Typography>
              <Box
                sx={{
                  ml: 6,
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                }}
                style={{ display: "flex", flexDirection: "row-reverse" }}
              >
              </Box>
              {users.length != 0 ? (
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              
                      <Avatar
                        alt="Remy Sharp"
                      />
                      {/* <U/> */}
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <MenuItem key="Profile" onClick={handleCloseUserMenu}>
                      {/* <FaUser /> */}
                      <Link
                        to="/user"
                        style={{
                          textDecoration: "none",
                          color: "black",
                          marginLeft: "25px",
                        }}
                      >
                        <Typography textAlign="center">Profile</Typography>
                      </Link>
                    </MenuItem>
                
                    <MenuItem key="/" onClick={handleCloseUserMenu}>
                      {/* <FaUser /> */}
                      <Link
                        to="/"
                        style={{
                          textDecoration: "none",
                          color: "black",
                          marginLeft: "25px",
                        }}
                      >
                        <Typography textAlign="center">Home</Typography>
                      </Link>
                    </MenuItem>
                
                    <MenuItem
                      key="Contact"
                      onClick={handleCloseUserMenu}
                    >
                      {/* <FaBookBookmark /> */}
                      <Link
                        to="/contact"
                        style={{
                          textDecoration: "none",
                          color: "black",
                          marginLeft: "25px",
                        }}
                      >
                        <Typography textAlign="center">
                          Contact Us
                        </Typography>
                      </Link>
                    </MenuItem>
                    <MenuItem
                      key="Booked-Services"
                      onClick={handleCloseUserMenu}
                    >
                      {/* <FaBookBookmark /> */}
                      <Link
                        to="/services"
                        style={{
                          textDecoration: "none",
                          color: "black",
                          marginLeft: "25px",
                        }}
                      >
                        <Typography textAlign="center">
                          Services
                        </Typography>
                      </Link>
                    </MenuItem>
                    <MenuItem
                      key="Feedback"
                      onClick={handleCloseUserMenu}
                    >
                      {/* <FaBookBookmark /> */}
                      <Link
                        to="/feed"
                        style={{
                          textDecoration: "none",
                          color: "black",
                          marginLeft: "25px",
                        }}
                      >
                        <Typography textAlign="center">
                          Feedback
                        </Typography>
                      </Link>
                    </MenuItem>
                    
                    <MenuItem
                      key="logout"
                      onClick={eventLogout}
                      style={{
                        textDecoration: "none",
                        color: "black",
                        marginLeft: "25px",
                      }}
                    >
                      {/* <LuLogOut style={{ marginRight: "25px" }} /> */}
                      <Typography textAlign="center">Logout</Typography>
                    </MenuItem>
                  </Menu>
                </Box>
              ) : (
                <Button
                  key="Login"
                  sx={{ display: "block", fontFamily: "Baskervville', serif" }}
                  color="primary"
                  variant="contained"
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </>
  );
}
export default Navba;