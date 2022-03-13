import type { ReactChild, ReactChildren } from "react"

export default function List(props:{children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[]}){
    return (
        <ul role="list" className="p-10">
            {props.children}
        </ul>
    )
}