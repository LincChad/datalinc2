import { AppBar, Toolbar, Button } from "@mui/material";
import React from "react";
import "../App.css"

function Header() {

    const displayDesktop = () => {
        return <Toolbar className="App-header"><code>Datalinc</code><Button variant="contained">Sign Up</Button></Toolbar>
    }
  
    return (
        <header>
            <AppBar>{displayDesktop()}</AppBar>
        </header>
    );
}
export default Header;