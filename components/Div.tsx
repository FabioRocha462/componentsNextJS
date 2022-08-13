import {ReactNode} from "react"

type div = {
    children: ReactNode
}

export default function divisor({children}:div){
    return <div>{children}</div>
}