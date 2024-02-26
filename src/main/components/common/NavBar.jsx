import React from "react";
import { Link } from "react-router-dom";
import { Menu, WhatsApp } from "@mui/icons-material";
import {
  AppBar,
  Button,
  Drawer,
  Grid,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";

const NavButton = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(3),
  transition: "transform 0.2s",
  "&:hover": {
    transform: "scale(1.1)",
  },
}));

const PhoneNumber = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  color: "#c4885d",
  fontSize: "1.5em",
  fontWeight: "bold",
}));

const LogoContainer = styled(Grid)({
  display: "flex",
  alignItems: "center",
  justifyContent: "left",
});

const AppBarStyled = styled(AppBar)({
  backgroundColor: "#e8d8c8",
  height: "80px",
});

const DrawerPaperStyled = styled(Drawer)(({ theme }) => ({
  width: 240,
}));

export const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navLinks = [
    { title: "Inicio", path: "/" },
    { title: "Productos", path: "/productos" },
    { title: "AbarroTips", path: "/abarrotips" },
    { title: "Sucursales", path: "/sucursales" },
    { title: "Sobre Nosotros", path: "/nosotros" },
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
    <div>
      <AppBarStyled position="static" elevation={0}>
        <Toolbar>
          <Grid container alignItems="center">
            <LogoContainer item xs={6} md={2}>
              <Link to="/">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/punto-de-venta-web-881ad.appspot.com/o/puntodeventaLOGO.png?alt=media&token=3aa59e83-d74b-42c1-b246-ec2817aee931"
                  alt="Logo"
                  style={{
                    height: "60px",
                    marginRight: "auto",
                    marginLeft: "0px",
                  }}
                />
              </Link>
            </LogoContainer>
            <Hidden mdDown>
              <Grid item xs={6} md={7} style={{ textAlign: "left" }}>
                {navLinks.map((link, index) => (
                  <NavButton
                    key={index}
                    component={Link}
                    to={link.path}
                    style={{ color: "#c4885d" }}
                  >
                    <Typography variant="h6">{link.title}</Typography>
                  </NavButton>
                ))}
              </Grid>
              <PhoneNumber item xs={6} md={3}>
                <Typography variant="body1">123-456-7890</Typography>
                <IconButton>
                  <WhatsApp style={{ color: "#c4885d" }} />
                </IconButton>
              </PhoneNumber>
            </Hidden>
            <Hidden mdUp>
              <Grid
                item
                xs={6}
                md={2}
                style={{
                  textAlign: "right",
                  marginBottom: "20px",
                  marginTop: "20px",
                }}
              >
                <IconButton
                  edge="start"
                  aria-label="menu"
                  onClick={toggleDrawer}
                >
                  <Menu style={{ color: "#c4885d" }} />
                </IconButton>
                <DrawerPaperStyled
                  anchor="right"
                  open={drawerOpen}
                  onClose={toggleDrawer}
                >
                  {listItems}
                </DrawerPaperStyled>
              </Grid>
            </Hidden>
          </Grid>
        </Toolbar>
      </AppBarStyled>
    </div>
  );
};
