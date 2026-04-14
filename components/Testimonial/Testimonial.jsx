import React from "react"

import TestimonialName from "./TestimonialName"
import TestimonialRole from "./TestimonialRole"
import TestimonialFooter from "./TestimonialFooter"
import TestimonialQuote from "./TestimonialQuote"
import TestimonialPhoto from "./TestimonialPhoto"
import TestimonialWorkcation from "./TestimonialWorkcation"

import { FaQuoteLeft } from "react-icons/fa";

const TestimonialContext = React.createContext()
export { TestimonialContext }

export default function Testimonial({photo, quote, name, role, color}){
    
    function addQuotesToString(str)
    {
        const newStr = "\""+str+"\""
        return newStr
    }
    
    return (
        <TestimonialContext.Provider value={{photo, quote, name, role}}>
            <div className={`testimonial ${photo ? "with-pic":"no-pic"}`} >
                <TestimonialPhoto/>
                <div className={`container ${photo ? "with-pic":"no-pic"}`}>
                    {photo ?
                        <div className="icon">
                            <FaQuoteLeft/>
                        </div>
                    :
                        <TestimonialWorkcation/>
                    }
                    <TestimonialQuote>
                        {photo ? quote : addQuotesToString(quote)}
                    </TestimonialQuote>
                    <TestimonialFooter>
                        <TestimonialName>{name}</TestimonialName>
                        {photo ? "" : <div className="footer-divider">/</div>}
                        <TestimonialRole>{role}</TestimonialRole>
                    </TestimonialFooter>
                </div>
            </div>
        </TestimonialContext.Provider>
    )
}