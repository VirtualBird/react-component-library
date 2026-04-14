import React from "react"

import { TooltipContext } from "./Tooltip"

export default function TooltipTitle({children}){
    const {style, color} = React.useContext(TooltipContext)
    
    return(
        <h2 className={`tooltip-title ${style} ${color}`}>{children}</h2>
    )
}