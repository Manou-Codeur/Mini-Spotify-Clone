import { useRef, useState } from "react";

import { millisToMinutes } from "../../../Assets/js/helperFunctions";

import { ReactComponent as StartIcon } from "../../../Assets/imgs/start.svg";
import { ReactComponent as PauseIcon } from "../../../Assets/imgs/pause.svg";
import "./title.scss";

const Title = ({ data }) => {
  const [playing, setPlaying] = useState(false);

  const audioNode = useRef();

  const togglePlay = () => {
    if (playing) audioNode.current.pause();
    else audioNode.current.play();
    setPlaying(prev => !prev);
  };

  return (
    <div className={playing ? "title current" : "title"}>
      <audio src={data.preview_url} ref={audioNode}></audio>
      {playing ? (
        <PauseIcon className="title__pauseIcon" onClick={togglePlay} />
      ) : (
        <StartIcon className="title__startIcon" onClick={togglePlay} />
      )}
      <span>{data.name}</span>
      <span>{millisToMinutes(data.duration_ms)}</span>
    </div>
  );
};

export default Title;
