export default function icon(props: { css?: String }) {
    return (<i className={`fad group-hover:rotate-[360deg] duration-1000 text-2xl select-none w-full ${props.css}`}></i>)
}