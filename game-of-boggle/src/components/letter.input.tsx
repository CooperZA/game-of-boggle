import { MenuItem, Select } from "@mui/material";
import { useState } from "react";

const LetterInput = () => {
  const [letter, setLetter] = useState("");

  const onLetterChange = (value: string) => {
    setLetter(value.slice(0, 1));
  };

//   for (i = 65; i <= 90; i++) {
    // console.log(String.fromCharCode(i));
// }

  return <Select>
    <MenuItem />
  </Select>;
};

export default LetterInput;
