import React from "react"


export default function CardIcon({icon, iconColor}){
    return (
        <div className="brand-icon" style={{backgroundColor: iconColor}}>
            {icon}
        </div>
    )
}
