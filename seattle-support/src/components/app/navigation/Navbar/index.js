import {
    AppBar,
    Toolbar,
    Button,
    IconButton,
    Drawer,
    Link,
    Grid,
    Typography,
} from "@mui/material";
import { makeStyles } from '@mui/styles';
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const headersData = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Pamphlets",
        href: "/pamphlets",
    },
    {
        label: "Information Resource",
        href: "/informationResource",
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
        fontFamily: "Poppins, sans-serif",
        color: "#505279",
        fontSize: "18px",
        marginLeft: "38px",
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
    drawerContainer: {
        padding: "20px 40px",
    },
}));

const NavBar = () => {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const drawer = () => {
        const handleDrawerOpen = () => setDrawerOpen(true);
        const handleDrawerClose = () => setDrawerOpen(false);
        return (
            <Toolbar>
                <IconButton
                    {...{
                        edge: "start",
                        color: "inherit",
                        "aria-label": "menu",
                        "aria-haspopup": "true",
                        onClick: handleDrawerOpen,
                    }}
                >
                    <MenuIcon />
                </IconButton>

                <Drawer
                    {...{
                        anchor: "left",
                        open: drawerOpen,
                        onClose: handleDrawerClose,
                    }}
                >
                    <div className={classes.drawerContainer}>{<NavbarContent />}</div>
                </Drawer>
            </Toolbar>
        );
    };

    const NavItems = () => {
        return headersData.map(({ label, href }) => {
            return (
                <Grid item>
                    <Link
                        {...{
                            component: RouterLink,
                            to: href,
                            color: "inherit",
                            style: { textDecoration: "none" },
                            key: label,
                        }}
                    >
                        <Button variant='text'>
                            <Typography>{label}</Typography>
                        </Button>
                    </Link>
                </Grid>
            );
        });
    };

    const NavbarContent = () => {
        return (
            <Grid container direction='column' alignItems='center' justifyContent='space-between'>
                <Grid item>
                    <Grid container spacing={4} justifyContent='center' alignItems='center' direction='column'>
                        <Grid item>
                            <Typography>Seattle Support</Typography>
                        </Grid>
                        <NavItems />
                    </Grid>
                </Grid>
            </Grid>
        );
    };

    return (
        <div className={classes.root}>
            <AppBar className={classes.header}>
                {drawer()}
            </AppBar>
        </div>
    );
};

export default NavBar;
