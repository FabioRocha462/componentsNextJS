type item = {
    text: string
}
export default function Item({text}:item){
    return (
        <li>{text}</li>

    )
}