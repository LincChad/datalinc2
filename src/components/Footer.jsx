import React from "react";


function Footer() {
    const date = new Date();
    const currentYear = date.getFullYear();
    return (
        <p>Copyright Datalinc {currentYear}</p>
    )
}



export default Footer;