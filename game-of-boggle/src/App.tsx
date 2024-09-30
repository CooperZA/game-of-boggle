import { useState } from "react";
import "./App.css";
import { Box, Button, TextField, Typography } from "@mui/material";
import WordList from "./components/word-list";
import findWordsInMatrix from "./game/find-words-in-matrix";

function GameOfBoggle() {
  // create 4x4 grid of inputs for letters, buttons for checking

  // const matrix: string[][] = [
  //   ["t", "r", "e", "s"],
  //   ["b", "e", "a", "t"],
  //   ["c", "a", "r", "s"],
  //   ["s", "e", "e", "t"],
  // ];

  const [matrix, setMatrix] = useState<string[][]>([
    ["t", "r", "e", "s"],
    ["b", "e", "a", "t"],
    ["c", "a", "r", "s"],
    ["s", "e", "e", "t"],
  ]);

  const [wordList, setWordList] = useState<string[]>([
    "tree",
    "bee",
    "see",
    "test",
    "set",
    "rest",
    "seat",
    "bat",
    "cat",
    "east",
    "bear",
    // "tear",
  ]);

  const [newWord, setNewWord] = useState<string>("");

  const onRemoveWordFromList = (word: string) => {
    const newWordList = [...wordList];
    newWordList.splice(newWordList.indexOf(word), 1);

    setWordList(newWordList);
  };

  /*
    Rules:
    
    - Words must be at least three letters in length.
    - Each letter after the first must be a horizontal, vertical, or diagonal neighbor of the one before it.
    - No individual letter cube may be used more than once in a word.
    - No capitalized or hyphenated words are allowed.
  
  */

  return (
    <Box className="App" padding="100px">
      {/* component to accept new matrix */}

      {/* display current word list, allow remove and add */}
      <WordList wordList={wordList} onRemove={onRemoveWordFromList} />
      <Box display="flex" px={2} py={2}>
        <TextField
          label="Add new word"
          onChange={(word) => {
            setNewWord(word.target.value);
          }}
          value={newWord}
        />
        <Button
          id="add-word-button"
          onClick={() => {
            setWordList([...wordList, newWord]);
          }}
        >
          {"Add Word"}
        </Button>
      </Box>
      {/* Check array */}
      <Button id="check-matrix-button" />

      <Box display="flex">
        <Box id="matches-box">
          <Typography>{"Words found in matrix: "}</Typography>
          {Array.from(findWordsInMatrix(matrix, wordList)).map((foundWord) => {
            return <Typography>{foundWord}</Typography>;
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default GameOfBoggle;
