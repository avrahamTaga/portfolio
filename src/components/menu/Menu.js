import "./menu.scss";

const Menu = ({ menuOpen, setMenuOpen }) => {
  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={closeMenu}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={closeMenu}>
          <a href="#about">About</a>
        </li>
        <li onClick={closeMenu}>
          <a href="#works">Works</a>
        </li>
        <li onClick={closeMenu}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
