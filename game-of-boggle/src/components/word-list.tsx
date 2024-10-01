import { Box, Chip, Typography } from "@mui/material";

interface IWordListProps {
  wordList: string[];
  onRemove: (word: string) => void;
}

const WordList = ({ wordList, onRemove }: IWordListProps) => {
  return (
    <Box display="flex" flexDirection="column">
      <Typography>Word List</Typography>
      <Box
        display="flex"
        flexWrap="wrap"
        border={1}
        borderRadius={1}
      >
        {wordList.map((word) => {
          return (
            <Box px={2} py={2}>
              <Chip
                label={word}
                onDelete={() => {
                  onRemove(word);
                }}
                component="button"
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default WordList;
