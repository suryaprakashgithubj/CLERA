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
// import Menu from '@mui/material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
// import { ThemeProvider } from '@material-ui/core';
import { CssBaseline } from '@mui/material';
// import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteUser, deleteUserDetails } from './Store/masterSlice';
import PrimarySearchAppBar from './pro'

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

    const dispatch = useDispatch(); 

    const {users} = useSelector((state) => state.master)
    console.log(users)

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

    const eventlogout = () => {
        dispatch(deleteUser());
        dispatch(deleteUserDetails())
        navigate('/login');
    }


    
    return (
        <ThemeProvider theme={theme}>
            {/* <CssBaseline /> */}
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, }} /> */}
                        <div>

                            <img src="public\images\CLERA.png" width={"25%"} ></img>
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
                                key="signup"
                                color='secondary'
                                variant='contained'
                                onClick={() => navigate('/')}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                HOME
                            </Button>
                            <Button
                                style={{marginLeft:"7px" , borderRadius:"15px" , color:"black"}}
                                key="services"
                                color='secondary'
                                variant='contained'
                                onClick={()=>navigate('/services')}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                               Services
                            </Button>
                            {users.length !== 0 ? (<Button
                                style={{marginLeft:"7px" , borderRadius:"15px" , color:"black"}}
                                key="logout"
                                variant='contained'
                                color='secondary'
                                onClick={eventlogout}
                                sx={{ my: 2, color: 'w  hite', display: 'block' }}
                            >
                                Logout
                            </Button>) :
                             (<Button 
                                style={{marginLeft: "7px" , borderRadius:"15px" , color:"black"}}
                                variant='contained'
                                color='secondary'
                                key="login"
                                onClick={() =>navigate('/login')}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                Login
                            </Button>)
                            }
                           
                            <Button
                                style={{marginLeft:"7px" , borderRadius:"15px" , color:"black"}}
                                color='secondary'
                                variant='contained'
                                key="contact"
                                onClick={() => navigate('/contact')}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Contact
                            </Button>
                            <Button
                                style={{marginLeft:"7px" , borderRadius:"15px" , color:"black"}}
                                key="signup"
                                color='secondary'
                                variant='contained'
                                onClick={() => navigate('/signup')}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Sign up
                            </Button>
                       </Box>
                            <PrimarySearchAppBar/>
                       
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
}
export default Navbar;








9