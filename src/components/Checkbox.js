import { useState } from "react";

export default function Checkbox() {
  const [checked, setChecked] = useState(false);

  function toggleChecked() {
    setChecked(!checked);
  }

  return (
    <div className="checkbox">
      <input
        className={checked ? "checked" : null}
        onClick={toggleChecked}
        type="checkbox"
        name=""
        id="checkbox-id"
      />
      <label className="checkbox--label" htmlFor="checkbox">
        Research competitor pricing and business models
      </label>
    </div>
  );
}
