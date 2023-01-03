import ScrollContainer from "react-indiana-drag-scroll";
import "react-indiana-drag-scroll/dist/style.css";
import TaskBoard from "./TaskBoard";

export default function Main() {
  return (
    <div className="main">
      <ScrollContainer
        className="scroll-container"
        nativeMobileScroll={true}
        vertical={false}
        hideScrollbars={true}
        mouseScroll={{
          inertia: false,
        }}
      >
        <TaskBoard />
      </ScrollContainer>
    </div>
  );
}
