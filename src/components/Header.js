import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

import logo from "../images/logo.png";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  console.log(user?.photoURL, "user");
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute px-8 py-2 w-screen bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <div className="flex items-center">
        <img className="w-44" src={logo} alt="logo" />
        {user && (
          <nav className="ml-8">
            <ul className="flex space-x-6 text-white">
              <li>
                <Link to="/browse" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/tvshows" className="hover:text-gray-300">
                  TV Shows
                </Link>
              </li>
              <li>
                <Link to="/movies" className="hover:text-gray-300">
                  Movies
                </Link>
              </li>
              <li>
                <Link to="/new" className="hover:text-gray-300">
                  New & Popular
                </Link>
              </li>
              <li>
                <Link to="/mylist" className="hover:text-gray-300">
                  My List
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
      <div className="flex items-center space-x-4">
        {/* <button className="text-white hover:text-gray-300">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button> */}
        <div className="flex items-center space-x-2">
          {user && (
            <>
              <img
                className="w-8 h-8 rounded"
                src={user?.photoURL}
                alt="profile"
              />
              <button
                onClick={handleSignOut}
                className="text-white hover:text-gray-300"
              >
                Sign Out
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
