import React from "react";
import Navbar from "./Navbar";

export default function withLayout(Comp) {
    return props => {
        return (
            <>
                <Navbar />
                <Comp {...(props)} />
            </>
        );
    };
}