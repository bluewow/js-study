import React from "react";
import { Header } from "./header";

export { Header };

const a = () => {
  const [value, setValue] = React.useState();
  return (
    <input
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
};

const value = useMemo(() => {
  return item.text;
}, [item.text]);

const _setValue = () => {
  inputRef.current.value = item.text;
};

useEffect(() => {
  inputRef.current.value = item.text;
}, [item.text]);
