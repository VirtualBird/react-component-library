import React from "react"

import { TooltipContext } from "./Tooltip"

export default function TooltipDetail({children}){
    
    const {style, color} = React.useContext(TooltipContext)
    console.log(color)
    return(
        <p className={`tooltip-detail ${style} ${color}`}>
            {children}
        </p>
    )
}