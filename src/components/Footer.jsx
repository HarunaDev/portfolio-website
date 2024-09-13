import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-background py-6 px-4 md:px-8 lg:px-24">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
        {/* Content Section */}
        <div className="mb-6 lg:mb-0">
          <h6 className="text-[#EEEEEE] text-sm md:text-base lg:text-lg font-thin mb-4 lg:mb-6 max-w-xs lg:max-w-md mx-auto lg:mx-0">
            My passion for clean design and consumer-focused solutions ensures that every project I work on meets both business goals and user needs.
          </h6>
          <small className="text-[#999999] text-xs md:text-sm lg:text-base">
            c Alvin Haruna | All rights reserved 2024
          </small>
        </div>

        {/* Links Section */}
        <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-6 text-[#999999]">
          <li>
            <Link to="#" className="hover:text-primary">Github</Link>
          </li>
          <li>
            <Link to="#" className="hover:text-primary">LinkedIn</Link>
          </li>
          <li>
            <Link to="#" className="hover:text-primary">Blog</Link>
          </li>
          <li>
            <Link to="#" className="hover:text-primary">Email</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
