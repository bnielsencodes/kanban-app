import { useState } from "react";

export default function Checkbox() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="checkbox">
      <input
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