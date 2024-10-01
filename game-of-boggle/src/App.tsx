import { useEffect, useState } from "react";
import "./App.css";
import { Box, Button, TextField, Typography } from "@mui/material";
import WordList from "./components/word-list";
import findWordsInMatrix from "./game/find-words-in-matrix";
import GameBoard from "./components/game-board/game-board";

function GameOfBoggle() {
  const [matrix, setMatrix] = useState<string[][]>([
    ["f", "r", "e", "s"],
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
    "cat",
    "east",
    "bear",
    "fear",
  ]);

  const [newWord, setNewWord] = useState<string>("");

  const onRemoveWordFromList = (word: string) => {
    const newWordList = [...wordList];
    newWordList.splice(newWordList.indexOf(word), 1);

    setWordList(newWordList);
  };

  const onLetterChange = (letter: string, xAxis: number, yAxis: number) => {
    const newMatrix = [...matrix];
    newMatrix[yAxis][xAxis] = letter;
    setMatrix(newMatrix);
  };

  return (
    <Box className="App" padding="100px" height={"100vh"}>
      <Typography variant="h1" pb={5}>
        Word Game
      </Typography>
      <Box display="flex" flexDirection="row" justifyContent="space-evenly">
        <GameBoard matrix={matrix} onLetterChange={onLetterChange} />
        <Box display="flex" flexDirection="column" alignContent="center">
          <WordList wordList={wordList} onRemove={onRemoveWordFromList} />
          <Box
            display="flex"
            flexDirection="row"
            px={2}
            py={2}
            alignItems="center"
          >
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
                setNewWord("");
              }}
            >
              {"Add Word"}
            </Button>
          </Box>
        </Box>
        <Box display="flex">
          <Box id="matches-box">
            <Typography>{"Words found in matrix: "}</Typography>
            {Array.from(findWordsInMatrix(matrix, wordList)).map(
              (foundWord) => {
                return <Typography>{foundWord}</Typography>;
              }
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default GameOfBoggle;
