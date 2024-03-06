import { memo } from "react"

export const Small = memo(({ value }) => {
    console.log("me volvi generar")
    
    return (
        <small>{value}</small>
    )
})
