import React from "react";
import "./Services.css"
const ServicesCard=({item})=>{
    const {imgUrl,title,desc}=item
    return (
        <>
            <div className="services__item">
                <div className="services__img">
                    <img src={imgUrl} alt="img"/>
                </div>
                <h5>{title}</h5>
                <p>{desc}</p>
            </div>
        </>
    )
}

export default ServicesCard;