import "./intro.scss";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { init } from "ityped";
import { useEffect, useRef } from "react";

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      backDelay: 1200,
      backSpeed: 50,
      showCursor: false,
      strings: ["Fronet-End", "Back-End", "Web Developer..."],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/avraham-taga.jpeg" alt="" />
        </div>
      </div>

      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Avraham Taga</h1>
          <h3>
            a Full Stack <span ref={textRef}></span>
          </h3>
          <a href="#about">
            <ArrowDownwardIcon className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
