import Container from '@mui/material/Container';
import React from "react";
import Navbar from "./Navbar";

export default function withLayout(Comp) {
    return props => {
        return (
            <>
                <Navbar />
                <Container>
                    <Comp {...(props)} />
                </Container>
            </>
        );
    };
}