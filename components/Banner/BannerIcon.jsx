import React from "react"

import { BannerContext } from "./Banner"

import { FaCheckCircle } from "react-icons/fa";
import { FaExclamationTriangle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

export default function BannerIcon(){
    
    const status = React.useContext(BannerContext)
    
    return (
        <div className="banner-icon">
            {status === "neutral" && <FaInfoCircle/>}
            {status === "error" && <FaTimesCircle/>}
            {status === "warning" && <FaExclamationTriangle/>}
            {status === "success" && <FaCheckCircle/>}
        </div>
    )
}