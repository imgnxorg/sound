import "./styles.css";
import React from "react";
import { Container, createRoot } from "react-dom/client";
import Page from "./page";

const domNode = document.getElementById("root") as Container;
// const children = <Page>{<></>}</Page>;

if (domNode) {
    const root = createRoot(domNode);
    root.render(
        <>
            <Page />
        </>
    );
} else {
    console.error("Root element not found");
}
