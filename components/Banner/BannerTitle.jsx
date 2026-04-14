import React from "react"

import { BannerContext } from "./Banner"

export default function BannerTitle({children, descriptionExists}){
    
    const status = React.useContext(BannerContext)
    let addBold = false
    
    if (status === "error" && !descriptionExists)
    {
        addBold = true
    }
    
    return <div className="title" style={addBold ? { fontWeight:700 } : {}}>
        {children ? 
            children 
        : 
            <>
                {status === "neutral" && "Update available"}
                {status === "error" && "There is a problem with your application"}
                {status === "warning" && "Attention"}
                {status === "success" && "Congratulations!"}
            </>
        }
    </div>
}