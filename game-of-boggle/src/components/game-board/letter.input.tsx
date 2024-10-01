import { Box, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import IOnLetterChangeProps from "./props-interfaces/on-letter-change.props";
import { alphabet } from "../../data/alphabet";

interface ILetterInput extends IOnLetterChangeProps {
  letter: string;
  letterIndex: number;
  rowIndex: number;
}

const LetterInput = ({
  letter,
  letterIndex,
  rowIndex,
  onLetterChange,
}: ILetterInput) => {
  const handleLetterChange = (event: SelectChangeEvent) => {
    onLetterChange(event.target.value.toString(), letterIndex, rowIndex);
  };

  return (
    <Box padding={1} display="flex" justifyContent="space-between">
      <Select value={letter} onChange={handleLetterChange}>
        {alphabet.map((letter) => {
          return <MenuItem value={letter}>{letter}</MenuItem>;
        })}
      </Select>
    </Box>
  );
};

export default LetterInput;
