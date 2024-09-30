import { Box, Chip } from "@mui/material";

interface IWordListProps {
  wordList: string[];
  onRemove: (word: string) => void;
}

const WordList = ({ wordList, onRemove }: IWordListProps) => {
  return (
    <Box display="flex" flexWrap="wrap" maxWidth={"30%"} border={1} borderRadius={1}>
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
  );
};

export default WordList;
