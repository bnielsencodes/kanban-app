import ScrollContainer from "react-indiana-drag-scroll";
import "react-indiana-drag-scroll/dist/style.css";

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
      </ScrollContainer>
    </div>
  );
}
