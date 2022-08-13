import {ReactNode} from "react"

type lista = {
    children: ReactNode
}

export default function Lista({children}:lista){
    return <ul>{children}</ul>
}