import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

import logo from "../images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearch } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/browse");
      } else {
        dispatch(removeUser(null));
        navigate("/");
      }
    });
    // unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleSearchBarClick = () => {
    dispatch(toggleGptSearch());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
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
        <div className="flex items-center space-x-2">
          {user && (
            <>
              {showGptSearch && (
                <select name="" id="" onChange={handleLanguageChange}>
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <option key={lang.identifier} value={lang.identifier}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              )}
              <button
                onClick={handleSearchBarClick}
                className="py-2 px-4 rounded-lg text-white bg-purple-700 "
              >
                GPT Search
              </button>
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
