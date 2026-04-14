import React from "react"

import {TestimonialContext} from "./Testimonial"

export default function TestimonialQuote({children, className, ...rest}){
    
    const {photo} = React.useContext(TestimonialContext)
    
    let classes = "quote"
    
    className ? classes += (" " + className) : undefined
    classes += (photo ? " with-pic" : " no-pic")
    
    return (
        <p className={classes} {...rest}>
            {children}
        </p>
    )
}