import ColumnTitle from "./ColumnTitle";
import TaskList from "./TaskList";

export default function Column() {
  return (
    <div className="column">
      <ColumnTitle />
      <TaskList />
    </div>
  );
}
