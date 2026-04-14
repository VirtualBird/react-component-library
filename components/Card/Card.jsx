import React from "react"

import { FaCloudUploadAlt } from "react-icons/fa";

import CardIcon from "./CardIcon"
import CardTitle from "./CardTitle"
import CardDescription from "./CardDescription"
import CardContainer from "./CardContainer"

export default function Card({icon=<FaCloudUploadAlt/>, iconColor, title, children}){
    return (
        <div className="card">
            <CardIcon icon={icon} iconColor={iconColor}/>
            <CardContainer>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{children}</CardDescription>
            </CardContainer>
        </div>
    )
}