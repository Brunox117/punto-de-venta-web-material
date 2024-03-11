import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "@mui/icons-material";
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
import "../../../styles.css";
import { useDispatch } from "react-redux";
import { toggleMode } from "../../../store/slices/themeSlice";
import { useTheme } from "@emotion/react";

const NavButton = styled(Button)`
  && {
    font-size: 18px;
    color: #e1e1e1;
    font-family: inherit;
    font-weight: 800;
    cursor: pointer;
    position: relative;
    border: none;
    text-transform: uppercase;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: color;
    &:focus,
    &:hover {
      color: #fff;
    }
    &:focus:after,
    &:hover:after {
      width: 100%;
      left: 0%;
    }
    &:after {
      content: "";
      pointer-events: none;
      bottom: -2px;
      left: 50%;
      position: absolute;
      width: 0%;
      height: 2px;
      background-color: #ffffff;
      transition-duration: 400ms;
      transition-property: width, left;
    }
  }
`;

const PhoneNumber = styled(Grid)(({}) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  color: "#c4885d",
  fontSize: "1.1em",
  fontWeight: "bold",
  height: "60px",
  width: "120px",
}));

const LogoContainer = styled(Grid)({
  display: "flex",
  alignItems: "center",
  justifyContent: "left",
});

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  paddingTop: "25px",
  backgroundImage: `linear-gradient(to bottom, ${theme.palette.appbar.primary}, ${theme.palette.appbar.secondary})`,
  height: "120px",
}));

const DrawerPaperStyled = styled(Drawer)(({ theme }) => ({
  width: 240,
}));

const SliderContainer = styled(Grid)({
  display: "flex",
  alignItems: "right",
  justifyContent: "flex-end",
});

export const NavBar = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const toggleSlide = () => {
    dispatch(toggleMode());
  };
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navLinks = [
    { title: "Inicio", path: "/" },
    { title: "Productos", path: "/productos" },
    { title: "AbarroTips", path: "/abarrotips" },
    { title: "Sucursales", path: "/sucursales" },
  ];

  const listItems = (
    <List>
      {navLinks.map((link, index) => (
        <ListItem button key={index} component={Link} to={link.path}>
          <ListItemText primary={link.title} />
        </ListItem>
      ))}
      <ListItem button>
        <SliderContainer item md={2}>
          <label className="switch">
            <input type="checkbox" onClick={toggleSlide} />
            <span className="slider" />
          </label>
        </SliderContainer>
      </ListItem>
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
                    style={{ color: theme.palette.fonts.navbar }}
                  >
                    <Typography variant="h6">{link.title}</Typography>
                  </NavButton>
                ))}
              </Grid>
              <PhoneNumber item xs={6} md={3}>
                <SliderContainer item>
                  <label className="switch">
                    <input type="checkbox" onClick={toggleSlide} />
                    <span className="slider" />
                  </label>
                </SliderContainer>
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
                  <Menu style={{ color: "#F9F9F9" }} />
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
