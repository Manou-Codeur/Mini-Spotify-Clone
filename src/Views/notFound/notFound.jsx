import { ReactComponent as Logo } from "../../Assets/imgs/logo.svg";

import "./notFound.scss";

const NotFound = () => {
  return (
    <div className="notFound">
      <Logo className="notFound__logo" fill="black" />
      <h1>Oops...PAGE NOT FOUND!</h1>
      <button>HOME</button>
    </div>
  );
};

export default NotFound;
