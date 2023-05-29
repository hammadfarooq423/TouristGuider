import React from "react";
import ServicesCard from "./Services_card";
import weatherImg from "../../../../images/weather.png"
import guidImage from "../../../../images/guide.png"
import customizationImg from "../../../../images/customization.png"
import { Col } from "react-bootstrap";
const servicesData=[
    {
        imgUrl:weatherImg,
        title:"calculate Weather",
        desc:" including temperature, humidity, atmospheric pressure, wind speed, and direction"
    },{
        imgUrl:guidImage,
        title:"Best tour guide ",
        desc:"  great tour who creates a memorable and immersive experience for them."
    }
    ,{
        imgUrl:customizationImg,
        title:"customization",
        desc:" By offering customized tours, tour operators and guides can create unique and memorable experiences for their guests"
    }
]
const ServicesList=({subtitle})=>{
    return (
        <>
           {
            servicesData.map((item, index)=>{
                return (
                    <Col lg="3" key={index}>
                        <ServicesCard item={item}/>
                    </Col>
                )
            })
           }
        </>
    )
}

export default ServicesList;