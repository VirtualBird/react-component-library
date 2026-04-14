import React from "react"

import {TestimonialContext} from "./Testimonial"

export default function TestimonialFooter({children, className, ...rest}){
    
    const {photo} = React.useContext(TestimonialContext)
    
    let classes = ""
    
    className ? classes += (" " + className) : undefined
    classes += (photo ? " with-pic" : " no-pic")
    
    return (
        <footer className={classes}>
            {children}
        </footer>
    )
}