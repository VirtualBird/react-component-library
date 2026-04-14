import React from "react"

import { TooltipContext } from "./Tooltip"

import { FaArchive } from "react-icons/fa";

export default function TooltipIcon({icon=<FaArchive/>}){
    const {style, color} = React.useContext(TooltipContext)
    return(
        <div className={`tooltip-icon ${style} ${color}`}>
            {icon}
        </div>
    )
}