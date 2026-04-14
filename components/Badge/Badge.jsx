import React from "react"

export default function Badge({children = "Badge", color = "default", variant = "default", className=""}){
    
    const colorClasses = ["gray", "red", "yellow", "green", "blue", "indigo", "purple", "pink"]
    const variantClasses = ["square", "pill"]
    
    // So this stuff would probably need a refactor
    
    //  If no color prop was passed down
    if (color === "default")
    {
        //  Check string of className passed down
        const classNameSplit = className.split(' ')
        //  And see if any color string passed in className matches something in colorClasses
        const colorFound = classNameSplit.find(item => colorClasses.includes(item) )
        
        console.log(colorFound)
        //  If no class name matching color preset was found, default to gray
        color = colorFound ? colorFound : "gray"
    }
    
    //  If no variant prop was passed down
    if (variant === "default")
    {
        //  Check string of className passed down
        const classNameSplit = className.split(' ')
        //  And see if any color string passed in className matches something in colorClasses
        const variantFound = classNameSplit.find(item => variantClasses.includes(item) )
        
        console.log(variantFound)
        //  If no class name matching color preset was found, default to gray
        variant = variantFound ? variantFound : "square"
    }
    
    const classes = ["badge", color, variant].join(" ")
    console.log(classes)
    
    return (
        <div className={classes}>
            {children}
        </div>
    )
}