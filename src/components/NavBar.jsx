import { Link } from "react-router-dom"

function NavBar() {
    return (
        <nav>
            <Link to="/">Haruna Alvin</Link>

            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/works">Works</Link></li>
            </ul>                            
        </nav>
    )
}

export default NavBar