import { forwardRef, useContext } from "react";

import historyContext from "./../../../contexts/historyContext";
import { ReactComponent as SearchIcon } from "../../../Assets/imgs/search-icon.svg";
import { ReactComponent as Logo } from "../../../Assets/imgs/logo.svg";

import "./navBar.scss";

const NavBar = forwardRef(({ onSearch }, ref) => {
  const history = useContext(historyContext);

  const goToSignIn = () => history.push("/auth");
  const goToSignUp = () => history.push("/auth/signUp");

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
        {true ? (
          <>
            <button onClick={goToSignUp}>Sign Up</button>
            <button onClick={goToSignIn}>Log In</button>
          </>
        ) : (
          <button>Log Out</button>
        )}
      </div>
      <div className="navBar__mobile">
        <button onClick={goToSignUp}>Sign Up</button>
        <button onClick={goToSignIn}>Log In</button>
      </div>
    </div>
  );
});

export default NavBar;
