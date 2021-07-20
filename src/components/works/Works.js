import "./works.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import { useState } from "react";

const Works = () => {
  const [selected, setSelected] = useState("web");
  const list = [
    {
      id: "web",
      title: "Web App",
    },
  ];

  return (
    <div className="works" id="works">
      <h1>Works</h1>
      <ul>
        {list.map((item, index) => (
          <PortfolioList
            key={index}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        <a href="https://github.com/avrahamTaga/Music-Rise">
          <div className="item">
            <img src="assets/musicRise.png" alt="musicRise" />
            <h3>Music Rise</h3>
          </div>
        </a>
        <a href="https://taga-githubfinder.netlify.app/">
          <div className="item">
            <img src="assets/github-finder.png" alt="git-hub" />
            <h3>Github Finder</h3>
          </div>
        </a>
        <a href="https://app-budjet.herokuapp.com/">
          <div className="item">
            <img src="assets/budget.png" alt="budjet" />
            <h3>Budjet</h3>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Works;
