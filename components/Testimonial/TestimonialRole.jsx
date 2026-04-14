import React from "react"

import {TestimonialContext} from "./Testimonial"

export default function TestimonialRole({children, className, ...rest}){
    
    const {photo} = React.useContext(TestimonialContext)
    
    let classes = "role"
    
    className ? classes += (" " + className) : undefined
    classes += (photo ? " with-pic" : " no-pic")
    
    return(
        <div className={classes} {...rest}>
            {children}
        </div>
    )
}