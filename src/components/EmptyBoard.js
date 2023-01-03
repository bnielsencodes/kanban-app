export default function EmptyBoard() {
  return (
    <div className="empty-board">
      <p>This board is empty. Create a new column to get started.</p>
      <button className="addColumnBtn">
        <p>+ Add New Column</p>
      </button>
    </div>
  );
}
