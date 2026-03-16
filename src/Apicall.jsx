import React, { useEffect, useState } from "react";
import Debounce from "./Debounce";

export default function Apicall() {
  const [val, setVal] = useState("");

  useEffect(() => {
    return Debounce(val);
  }, [val]);

  return (
    <div>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
    </div>
  );
}
