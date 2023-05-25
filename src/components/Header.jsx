import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import "../App.css"
import FormDialog from "./Form.jsx";

function Header() {

    const displayDesktop = () => {
        return <Toolbar className="App-header"><code>Datalinc</code><FormDialog /></Toolbar>
    }
  
    return (
        <header>
            <AppBar>{displayDesktop()}</AppBar>
        </header>
    );
}
export default Header;