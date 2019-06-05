import React, { useState } from "react";
import Button from "@material-ui/core/Button";

function StateHook() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>You clicked {count} times</h3>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setCount(count + 1)}
      >
        Count
      </Button>
    </div>
  );
}

export default StateHook;
