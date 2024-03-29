import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const Service = () =>{
    return(
        <>
            <div className="my-5">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row gy-4">
                    {
                        Sdata.map((currVal,ind)=>{
                            return <Card title={currVal.title} img={currVal.imgsrc} key={ind}/>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Service;