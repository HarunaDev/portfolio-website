import { Link } from "react-router-dom"

function CtaButton(prop) {
    return (
        <Link to={prop.url}>
            <button className={prop.styles} >{prop.text}</button>
        </Link>
    )
}

export default CtaButton