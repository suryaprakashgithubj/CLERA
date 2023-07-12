import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
// import { ThemeProvider } from '@material-ui/core';
import { CssBaseline } from '@mui/material';
// import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';


const pages = ['Services', 'Login', 'Signup'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const theme = createTheme({
    palette: {
        primary: {
            main: "#2D3047",
        },
        secondary:{
            main:"#E7ECEF"
        }
    },
});

function Navbar() {

    const navigate = useNavigate();

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const { logout, loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        <ThemeProvider theme={theme}>
            {/* <CssBaseline /> */}
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, }} /> */}
                        <div>

                            <img src="public\images\CLERA.png" width={"25%"} borderRadius={"10px"}></img>
                        </div>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >

                        </Typography>

                        <Box sx={{ flexGrow: 1, bgcolor: "black", display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >

                        </Typography>
                        <Box sx={{ ml: 40, flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                            <Button
                                style={{marginLeft:"7px" , borderRadius:"15px" , color:"black"}}
                                key="services"
                                color='secondary'
                                variant='contained'
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                               Services
                            </Button>
                            {isAuthenticated ? (<Button
                                style={{marginLeft:"7px" , borderRadius:"15px" , color:"black"}}
                                key="logout"
                                variant='contained'
                                color='secondary'
                                onClick={() => logout()}
                                sx={{ my: 2, color: 'w  hite', display: 'block' }}
                            >
                                Logout
                            </Button>) :
                             (<Button 
                                style={{marginleft:"10px" , borderRadius:"15px" , color:"black"}}
                                variant='contained'
                                color='secondary'
                                key="login"
                                onClick={() => loginWithRedirect()}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                Login
                            </Button>)
                            }
                            <Button
                                style={{marginLeft:"10px" , borderRadius:"15px" , color:"black"}}
                                key="signup"
                                color='secondary'
                                variant='contained'
                                onClick={() => navigate('/signup')}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Sign up
                            </Button>

                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
}
export default Navbar;
