import ellipsisIcon from "../assets/icon-vertical-ellipsis.svg";

export default function TaskModal() {
  return (
    <div className="task-modal">
      <div className="task-modal--title-container">
        <p className="task-modal--title">
          Research pricing points of various competitors and trial different
          business models
        </p>
        <img src={ellipsisIcon} alt="veritcal ellipsis icon" />
      </div>
      <p className="task--description">
        We know what we're planning to build for version one. Now we need to
        finalize the first pricing model we'll use. Keep iterating the subtasks
        until we have a coherent proposition.
      </p>
    </div>
  );
}
