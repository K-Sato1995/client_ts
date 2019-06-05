import React, { useState, useEffect } from "react";

const EffectHook = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    
  )
};
