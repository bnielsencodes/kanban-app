import addIcon from "../assets/icon-add-task-mobile.svg";
import ellipsisIcon from "../assets/icon-vertical-ellipsis.svg";

export default function HeaderRight() {
  return (
    <div className="header--right">
      <div className="add-task-btn">
        <img className="add-icon" src={addIcon} alt="add task icon" />
      </div>
      <img
        className="ellipsis-btn"
        src={ellipsisIcon}
        alt="vertical ellipsis icon"
      />
    </div>
  );
}
