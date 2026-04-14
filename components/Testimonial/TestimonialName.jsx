import React from "react"

import {TestimonialContext} from "./Testimonial"

export default function TestimonialName({children, className, ...rest}){
    
    const {photo} = React.useContext(TestimonialContext)
    
    let classes = "name"
    
    className ? classes += (" " + className) : undefined
    classes += (photo ? " with-pic" : " no-pic")
    
    return (
        <div className={classes} {...rest}>
            {children}
        </div>
    )
}