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
import { deleteUser, deleteUserDetails, deleteToken } from "../../Store/masterSlice";
import { FaUser, FaMoneyBillTrendUp, FaBookBookmark } from "react-icons/fa6";
import { LuLogOut } from "react-icons/lu";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F3F6F7",
    },
    secondary: {
      main: "#EF233C",
    },
  },
});

function Navi() {

  const dispatch = useDispatch();

  const navigate = useNavigate();
  
  const { user } = useSelector((state) => state.master);

  console.log("from nav", user);


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
      timer: 3000,
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
      dispatch(deleteToken());
      navigate("/");
    }, 3000);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <FaServicestack size={32} />
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
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                2018
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
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                2018
              </Typography>
              <Box
                sx={{
                  ml: 6,
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                }}
                style={{ display: "flex", flexDirection: "row-reverse" }}
              >
                <Button
                  key="customer support"
                  sx={{
                    my: 2,
                    mr: 2,
                    color: "black",
                    display: "block",
                    fontFamily: "Baskervville', serif",
                    fontWeight: "700px",
                  }}
                  variant="contained"
                  color="primary"
                  onClick={() => navigate("/customer-support")}
                  className="nav-button"
                >
                  Support
                </Button>
                <Button
                  key="services"
                  variant="contained"
                  sx={{
                    my: 2,
                    mr: 2,
                    color: "black",
                    display: "block",
                    fontFamily: "Baskervville', serif",
                  }}
                  onClick={() => navigate("/category")}
                  className="nav-button"
                >
                  Services
                </Button>
              </Box>
              {user ? (
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        alt="Remy Sharp"
                        // src={ && user.picture}
                      />
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
                    <MenuItem key="profile" onClick={handleCloseUserMenu}>
                      <FaUser />
                      <Link
                        to="/profile"
                        style={{
                          textDecoration: "none",
                          color: "black",
                          marginLeft: "25px",
                        }}
                      >
                        <Typography textAlign="center">Profile</Typography>
                      </Link>
                    </MenuItem>
                    <MenuItem
                      key="payment-history"
                      onClick={handleCloseUserMenu}
                    >
                      <FaMoneyBillTrendUp />
                      <Link
                        to="/payment-history"
                        style={{
                          textDecoration: "none",
                          color: "black",
                          marginLeft: "25px",
                        }}
                      >
                        <Typography textAlign="center">
                          Payment History
                        </Typography>
                      </Link>
                    </MenuItem>
                    <MenuItem
                      key="Booked-Services"
                      onClick={handleCloseUserMenu}
                    >
                      <FaBookBookmark />
                      <Link
                        to="/booked-services"
                        style={{
                          textDecoration: "none",
                          color: "black",
                          marginLeft: "25px",
                        }}
                      >
                        <Typography textAlign="center">
                          Booked Services
                        </Typography>
                      </Link>
                    </MenuItem>
                    <MenuItem
                      key="logout"
                      onClick={eventLogout}
                      style={{
                        textDecoration: "none",
                        color: "black",
                        marginLeft: "2px",
                      }}
                    >
                      <LuLogOut style={{ marginRight: "25px" }} />
                      <Typography textAlign="center">Logout</Typography>
                    </MenuItem>
                  </Menu>
                </Box>
              ) : (
                <Button
                  key="Login"
                  sx={{ display: "block", fontFamily: "Baskervville', serif" }}
                  color="secondary"
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
export default Navi;