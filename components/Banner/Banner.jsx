import React from "react"

import BannerIcon from "./BannerIcon"
import BannerTitle from "./BannerTitle"

const BannerContext = React.createContext()
export { BannerContext }

export default function Banner({children, status, title}){
    return (<>
    <BannerContext.Provider value={status}>
        <div className={`banner ${status}`}>
            <BannerIcon />
            <div className="content">
                <BannerTitle descriptionExists={children ? true:false}>{title}</BannerTitle>
                {children && <div className="description">{children}</div>}
            </div>
        </div>
    </BannerContext.Provider>
    </>)
}