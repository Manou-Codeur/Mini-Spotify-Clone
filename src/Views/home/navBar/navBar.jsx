import { forwardRef } from "react";

import { ReactComponent as SearchIcon } from "../../../Assets/imgs/search-icon.svg";
import { ReactComponent as Logo } from "../../../Assets/imgs/logo.svg";

import "./navBar.scss";

const NavBar = forwardRef(({ onSearch }, ref) => {
  return (
    <div className="navBar" onKeyUp={onSearch}>
      <Logo className="navBar__logo" fill="white" />
      <div className="navBar__search">
        <SearchIcon className="navBar__searchIcon" fill="black" />
        <input
          type="text"
          className="navBar__searchInput"
          placeholder="Search for artist albums"
          ref={ref}
        />
      </div>
      <div className="navBar__btns">
        {true && (
          <>
            <button>Sign Up</button>
            <button>Log In</button>
          </>
        )}
        {false && <button>Log Out</button>}
      </div>
      <div className="navBar__menu">
        <button>Sign Up</button>
        <button>Log In</button>
      </div>
    </div>
  );
});

export default NavBar;
