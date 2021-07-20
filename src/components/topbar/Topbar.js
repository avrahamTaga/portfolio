import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            taga.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <a href="tel:+0546645499">0546645499</a>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <a href="mailto:tagaavraham12@gmail.com">tagaavraham12@gmail.com</a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
