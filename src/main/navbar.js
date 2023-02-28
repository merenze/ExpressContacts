import React from "react";
import { createRoot } from "react-dom/client";
import NavBar from "../components/navbar/navbar";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

const root = createRoot(document.getElementById("navbar"));

root.render(<NavBar />);