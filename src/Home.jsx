import React from "react";
import img1 from "../src/images/img1.jpg"
import Common from "./Common";

const Home = () =>{
    return(
        <>
            <Common
            name="Grow your business with our brand"
            imgSrc={img1}
            visit="/service"
            btname="get started"
            />
        </>
    )
}

export default Home;