import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer className="bg-background flex justify-between items-center py-6 px-48">
            <div>
                <h6 className="text-[#EEEEEE] text-sm font-thin mb-6 w-[400px]">My passion for clean design and consumer-focused solutions ensures that every project I work on meets both business goals and user needs.</h6>

                <small className="text-[#999999]">c Alvin Haruna | All rights reserved 2024</small>
            </div>

            <ul className="text-[#999999]">
                <Link to="#">
                    <li className="mb-2">Github</li>
                </Link>
                <Link to="#">
                    <li className="mb-2">Linkdin</li>
                </Link>
                <Link to="#">
                    <li className="mb-2">Blog</li>
                </Link>
                <Link to="#">
                    <li>Email</li>
                </Link>
            </ul>
        </footer>
    )
}

export default Footer