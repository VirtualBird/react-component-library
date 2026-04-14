import React from "react"

import {TestimonialContext} from "./Testimonial"

export default function TestimonialPhoto(){
    
    const {photo} = React.useContext(TestimonialContext)
    
    return (
        photo ? 
            <div className="photo-frame">
                <div className="photo container">
                    <img src={photo}/>
                </div>
            </div>
        :
            ""
        
    )
}