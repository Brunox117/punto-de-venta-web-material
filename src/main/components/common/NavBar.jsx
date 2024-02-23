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
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { Link } from 'react-router-dom';

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
    color: '#c4885d',
    fontSize: '5px', // Tamaño de fuente más grande
    fontWeight: 'bold', // Negritas
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
  },
  appBar: {
    backgroundColor: "#e8d8c8",
    height: '80px',
  },
  navButtonText: {
    marginTop: '20px',
    marginBottom: '20px',
    color: "#000",
    fontSize: '1.5em', // Tamaño de fuente más grande
    fontWeight: 'bold', // Negritas
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
    { title: 'Sucursales', path: '/sucursales' },
    { title: 'Sobre Nosotros', path: '/nosotros' },
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
      <AppBar position="static" className={classes.appBar} elevation={0}>
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item xs={6} md={2} className={classes.logoContainer}>
              <img src="https://firebasestorage.googleapis.com/v0/b/punto-de-venta-web-881ad.appspot.com/o/puntodeventaLOGO.png?alt=media&token=3aa59e83-d74b-42c1-b246-ec2817aee931" alt="Logo" style={{ height: '60px', marginRight: 'auto', marginLeft: '0px' }} />
            </Grid>
            <Hidden mdDown>
              <Grid item xs={6} md={7} style={{ textAlign: 'left'}}>
                <Button component={Link} to="/" style={{ color: '#c4885d' }} className={classes.navButton}>
                  <Typography className={classes.navButtonText}>Inicio</Typography>
                </Button>
                <Button component={Link} to="/productos" style={{ color: '#c4885d' }} className={classes.navButton}>
                  <Typography className={classes.navButtonText}>Productos</Typography>
                </Button>
                <Button component={Link} to="/abarrotips" style={{ color: '#c4885d' }} className={classes.navButton}>
                  <Typography className={classes.navButtonText}>AbarroTips</Typography>
                </Button>
                <Button component={Link} to="/sucursales" style={{ color: '#c4885d' }} className={classes.navButton}>
                  <Typography className={classes.navButtonText}>Sucursales</Typography>
                </Button>
                <Button component={Link} to="/nosotros" style={{ color: '#c4885d' }} className={classes.navButton}>
                  <Typography className={classes.navButtonText}>Sobre Nosotros</Typography>
                </Button>
              </Grid>
            </Hidden>
            <Hidden smDown>
              <Grid item xs={6} md={3} className={classes.phoneNumber}>
                <Typography variant="body1">123-456-7890</Typography>
                <IconButton>
                  <WhatsAppIcon style={{ color: '#c4885d' }} />
                </IconButton>
              </Grid>
            </Hidden>
            <Hidden mdUp>
              <Grid item xs={6} md={2} style={{ textAlign: 'right', marginBottom: "20px", marginTop: "20px"}}>
                <IconButton edge="start" aria-label="menu" onClick={toggleDrawer}>
                  <MenuIcon style={{ color: '#c4885d' }} />
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
