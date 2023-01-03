import logoMobile from "../assets/logo-mobile.svg";
import chevronDownIcon from "../assets/icon-chevron-down.svg";

export default function HeaderLeft() {
  return (
    <div className="header--left">
      <img className="header--logo" src={logoMobile} alt="Kanban logo" />
      <p className="board-title">Platform Launch</p>
      <img
        className="chevron-icon"
        src={chevronDownIcon}
        alt="Chevron icon pointing down"
      />
    </div>
  );
}
