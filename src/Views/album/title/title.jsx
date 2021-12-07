import "./title.scss";

import { ReactComponent as StartIcon } from "../../../Assets/imgs/start.svg";
import { ReactComponent as PauseIcon } from "../../../Assets/imgs/pause.svg";

const Title = ({ on }) => {
  return (
    <div className={on ? "title current" : "title"}>
      {on ? (
        <PauseIcon className="title__pauseIcon" />
      ) : (
        <StartIcon className="title__startIcon" />
      )}
      <span>Title 1</span>
      <span>2:47</span>
    </div>
  );
};

export default Title;
