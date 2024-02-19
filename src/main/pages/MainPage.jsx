import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
  IconButton,
  Grid,
  Hidden,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { Link } from 'react-router-dom';
import { MainRoutes } from "../router/MainRoutes";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navButton: {
    marginLeft: theme.spacing(3),
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  phoneNumber: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'right',
    color: '#333',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
  },
  appBar: {
    backgroundColor: "#fdcc49",
    height: '80px',
  },
  navButtonText: {
    color: "#000",
  },
  drawerPaper: {
    width: 240,
  },
}));

export const NavBar = () => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navLinks = [
    { title: 'Inicio', path: '/' },
    { title: 'Productos', path: '/productos' },
    { title: 'AbarroTips', path: '/abarrotips' },
    { title: 'Sobre Nosotros', path: '/about-us' },
  ];

  const listItems = (
    <List>
      {navLinks.map((link, index) => (
        <ListItem button key={index} component={Link} to={link.path}>
          <ListItemText primary={link.title} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item xs={6} md={2} className={classes.logoContainer}>
              <img src="src\assets\img\LOGO SIN FONDO VERSION NUEVA (1).png" alt="Logo" style={{ height: '60px', marginRight: 'auto', marginLeft: '0px' }} />
            </Grid>
            <Hidden mdDown>
              <Grid item xs={6} md={7} style={{ textAlign: 'left'}}>
                <Button component={Link} to="/" color="inherit" className={classes.navButton}>
                  <Typography className={classes.navButtonText}>Inicio</Typography>
                </Button>
                <Button component={Link} to="/productos" color="inherit" className={classes.navButton}>
                  <Typography className={classes.navButtonText}>Productos</Typography>
                </Button>
                <Button component={Link} to="/abarrotips" color="inherit" className={classes.navButton}>
                  <Typography className={classes.navButtonText}>AbarroTips</Typography>
                </Button>
                <Button component={Link} to="/about-us" color="inherit" className={classes.navButton}>
                  <Typography className={classes.navButtonText}>Sobre Nosotros</Typography>
                </Button>
              </Grid>
            </Hidden>
            <Hidden smDown>
              <Grid item xs={6} md={3} className={classes.phoneNumber}>
                <Typography variant="body1">123-456-7890</Typography>
                <IconButton color="inherit">
                  <WhatsAppIcon />
                </IconButton>
              </Grid>
            </Hidden>
            <Hidden mdUp>
              <Grid item xs={6} md={2} style={{ textAlign: 'right' }}>
                <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer}>
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor="right"
                  open={drawerOpen}
                  onClose={toggleDrawer}
                  classes={{ paper: classes.drawerPaper }}
                >
                  {listItems}
                </Drawer>
              </Grid>
            </Hidden>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export const MainPage = () => {
  return (
    <>
      <NavBar />
      <MainRoutes />
    </>
  );
};
