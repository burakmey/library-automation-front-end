import { useState, useEffect } from "react";

function useDebounce(value, delay = 500) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => {
      console.log("setting new timeout");
      setDebounced(value);
    }, delay);
    return () => clearTimeout(id);
  }, [value, delay]);
  return debounced;
}

export default useDebounce;
