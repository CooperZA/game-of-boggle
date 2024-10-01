import { Box } from "@mui/material";
import Row from "./row";
import IOnLetterChangeProps from "./props-interfaces/on-letter-change.props";

interface IGameBoardProps extends IOnLetterChangeProps {
  matrix: string[][];
}

const GameBoard = ({ matrix, onLetterChange }: IGameBoardProps) => {
  return (
    <Box display="grid" padding={2}>
      {matrix.map((row, index) => {
        return (
          <Row
            letterArray={row}
            rowIndex={index}
            onLetterChange={onLetterChange}
          />
        );
      })}
    </Box>
  );
};

export default GameBoard;
