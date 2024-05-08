import React, { useEffect, useState } from "react";

const UseLocalStorage = (key, defaultvalue) => {
  const [value, setValue] = useState(() => {
    let currentValue;
    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultvalue)
      );
    } catch (err) {
      console.log(err);
      currentValue = defaultvalue;
    }
    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default UseLocalStorage;
