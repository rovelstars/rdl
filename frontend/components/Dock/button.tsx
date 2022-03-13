import type { ReactChild, ReactChildren } from "react"

export default function button(props: {
    mobile?: Boolean, color?: String, children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[], onClick?: any, allSize?: Boolean, id?: string, mid?: Boolean, name?: string
}) {
    return (
        <button
            className={`${(props.allSize) ? "" : (props.mobile) ? "hidden md:flex" : "md:hidden"} ${!props.mid ?
                `focus-visible:ring-4 focus-visible:ring-skyline/50 ${props.color || ''} group transition-all w-10 h-10 -translate-y-2 align-bottom p-2 hover:-translate-y-4 hover:scale-110 rounded-lg shadow-xl hover:rounded-2xl hover:shadow-2xl hover:focus:outline-none hover:focus:ring duration-300` :
                `focus-visible:ring-4 focus-visible:ring-skyline/50 rounded-lg ml-2 md:ml-0 group transition-all hover:rounded-2xl w-10 h-10 -translate-y-2 align-bottom hover:-translate-y-4 hover:scale-110 duration-300`}`}
            onClick={props.onClick}
            id={props.id}
            name={props.name}
        >
            {props.children}
        </button>
    )
}