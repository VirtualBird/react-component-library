import React from "react"

import { FaArchive } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

import TooltipIcon from "./TooltipIcon"
import TooltipDetail from "./TooltipDetail"
import TooltipTitle from "./TooltipTitle"

const TooltipContext = React.createContext()
export { TooltipContext }

export default function Tooltip({children, icon, style, color, title, text}){
    return(
        <TooltipContext.Provider value={{style, color}}>
        <div className="tooltip">{children}
            <span className={`tooltip-body ${style} ${color}`}>
                <TooltipIcon icon={icon}/>
                <div className="tooltip-main">
                        <TooltipTitle>{title}</TooltipTitle>
                        <TooltipDetail>{text}</TooltipDetail>
                </div>
                <TooltipIcon icon={<FaTimes/>}/>
            </span>
        </div>
        </TooltipContext.Provider>
    )
}