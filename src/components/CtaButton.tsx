import { Link } from "react-router-dom"

interface CtaButtonProps {
    url : string,
    styles? : string,
    text : string,
}

const CtaButton = ({url, styles, text} : CtaButtonProps) : JSX.Element => {
    return (
        <Link to={url}>
            <button className={styles} >{text}</button>
        </Link>
    )
}

export default CtaButton