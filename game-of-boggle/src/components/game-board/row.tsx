import { Box } from "@mui/material";
import LetterInput from "./letter.input";
import IOnLetterChangeProps from "./props-interfaces/on-letter-change.props";

interface IRowProps extends IOnLetterChangeProps {
  letterArray: string[];
  rowIndex: number;
}

const Row = ({ letterArray, rowIndex, onLetterChange }: IRowProps) => {
  return (
    <Box display="flex" flexDirection="row" px={2}>
      {letterArray.map((letter, index) => {
        return (
          <LetterInput
            letter={letter}
            rowIndex={rowIndex}
            letterIndex={index}
            onLetterChange={onLetterChange}
          />
        );
      })}
    </Box>
  );
};

export default Row;
