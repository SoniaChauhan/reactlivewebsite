import React from "react";
import erp from "../src/images/erp.jpg"
import Common from "./Common";

const About = () =>{
    return(
        <>
            <Common
            name="Welcome to About page"
            imgSrc={erp}
            visit="/contact"
            btname="contact now"
            />
        </>
    )
}

export default About;