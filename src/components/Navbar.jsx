import { Link } from "react-router-dom";

const Navbar = () =>{
    return(
        <div className="flex justify-center ">
        <nav className="w-3/4 h-16 bg-blue-900 text-gray-100 font-bold gap-2 rounded-full flex items-center justify-center">
            <Link to="/" className="text-white">Home</Link>
            <Link to="/speaker" className="ml-4 text-white">Speaker</Link>
            <Link to="/committee" className="ml-4 text-white">Committee</Link>
            <Link to="schedule" className="ml-4 text-white">Schedule</Link>
            <Link to="tracks" className="ml-4 text-white">Tracks</Link>
            <Link to="venue" className="ml-4 text-white">Venue</Link>
            <Link to="sponsors" className="ml-4 text-white">Sponsors</Link>
            <Link to="/submitabstract" className="ml-4 text-white">Submit Abstract</Link>
            <Link to="/contact" className="ml-4 text-white">Contact</Link>
            <Link to="/registration" className="ml-4 text-white">Register Now</Link>

        </nav>
        </div>
    )
}

export default Navbar;