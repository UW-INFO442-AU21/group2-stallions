import {
    AppBar,
    Toolbar,
    Button,
    IconButton,
    Drawer,
    Link,
    Grid,
    MenuItem
} from "@mui/material";
import { makeStyles } from '@mui/styles';
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState, useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";

const headersData = [
    {
        label: "Seattle Support",
        href: "/",
    },
    {
        label: "Pamphlets",
        href: "/pamphlets",
    },
    {
        label: "Information Resource",
        href: "/InformationResource",
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: "calc(91px)",
    },
    header: {
        padding: "10px",
        "@media (max-width: 900px)": {
            paddingLeft: 0,
        },
    },
    menuButton: {
        color: "#505279",
        fontSize: "12px",
        marginLeft: "38px",
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
    drawerContainer: {
        padding: "20px 30px",
    },
}));

export default function NavBar() {
    const classes = useStyles();

    const [state, setState] = useState({
      mobileView: false,
      drawerOpen: false,
    });

    const { mobileView, drawerOpen } = state;

    const location = useLocation();

    useEffect(() => {
      const setResponsiveness = () => {
        return window.innerWidth < 900
          ? setState((prevState) => ({ ...prevState, mobileView: true }))
          : setState((prevState) => ({ ...prevState, mobileView: false }));
      };

      setResponsiveness();

      window.addEventListener("resize", () => setResponsiveness());
    }, []);

    const displayDesktop = () => {
      return (
        <Toolbar className={classes.toolbar}>
          <Grid container justifyContent='flex-start'>{getMenuButtons()}</Grid>
        </Toolbar>
      );
    };

    const displayMobile = () => {
      const handleDrawerOpen = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: true }));
      const handleDrawerClose = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: false }));

      return (
        <Toolbar>
          <Grid container justifyContent='flex-start'>
            <Grid item>
              <IconButton
                {...{
                  color: "inherit",
                  "aria-label": "menu",
                  "aria-haspopup": "true",
                  onClick: handleDrawerOpen,
                }}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
          </Grid>
          <Drawer
            {...{
              anchor: "left",
              open: drawerOpen,
              onClose: handleDrawerClose,
            }}
          >
            <div className={classes.drawerContainer}>{getDrawerChoices()}</div>
          </Drawer>
        </Toolbar>
      );
    };

    const getDrawerChoices = () => {
      return headersData.map(({ label, href }) => {
        return (
          <Link
            {...{
              component: RouterLink,
              to: href,
              color: "inherit",
              style: { textDecoration: "none" },
              key: label,
            }}
          >
            <MenuItem>{label}</MenuItem>
          </Link>
        );
      });
    };


    const getMenuButtons = () => {
      return headersData.map(({ label, href }) => {
          const isActive = href === location.pathname;
        return (
          <Button
            {...{
              key: label,
              color: "inherit",
              to: href,
              component: RouterLink,
              className: classes.menuButton,
            }}
            variant={isActive ?  'outlined' : 'line'}
          >
            {label}
          </Button>
        );
      });
    };

    return (
      <div className={classes.root}>
        <AppBar className={classes.header}>
          {mobileView ? displayMobile() : displayDesktop()}
        </AppBar>
      </div>
    );
  }