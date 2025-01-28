import { useState } from "react";
import "./App.css";
import { Box, Button, TextField, Typography } from "@mui/material";
import WordList from "./components/word-list";
import findWordsInMatrix from "./game/find-words-in-matrix";
import GameBoard from "./components/game-board/game-board";
import { generateRandomChar } from "./helpers/generate-random-char";
import { WORD_LIST } from "./data/word-list";

function GameOfBoggle() {
  const generateMatrix = (): string[][] => {
    const BOARD_X_LIMIT = 4;
    const BOARD_Y_LIMIT = 5;

    return Array.from({ length: BOARD_X_LIMIT }, () =>
      // Array(BOARD_Y_LIMIT).fill("").map((a) => a.concat(generateRandomChar()))
      Array.from({ length: BOARD_Y_LIMIT }, () => {
        return generateRandomChar();
      })
    );
  };

  // const [matrix, setMatrix] = useState<string[][]>([
  //   ["f", "r", "e", "s", "a"],
  //   ["b", "e", "a", "t", "a"],
  //   ["c", "a", "r", "s", "a"],
  //   ["s", "e", "e", "t", "a"],
  // ]);
  const [matrix, setMatrix] = useState<string[][]>(generateMatrix());

  // const [wordList, setWordList] = useState<string[]>(WORD_LIST);

  const [newWord, setNewWord] = useState<string>("");

  const [wordList, setWordList] = useState<string[]>(WORD_LIST);

  const onRemoveWordFromList = (word: string) => {
    const newWordList = [...WORD_LIST];
    newWordList.splice(newWordList.indexOf(word), 1);

    setWordList(newWordList);
  };

  const onLetterChange = (letter: string, xAxis: number, yAxis: number) => {
    const newMatrix = [...matrix];
    newMatrix[yAxis][xAxis] = letter;
    setMatrix(newMatrix);
  };

  const onAddWord = () => {
    setWordList([...wordList, newWord]);
    // setWordList();
    setNewWord("");
  };

  return (
    <Box className="App" padding="100px" height={"100vh"}>
      <Typography variant="h1" pb={5}>
        Word Game
      </Typography>
      <GameBoard matrix={matrix} onLetterChange={onLetterChange} />
      <Box display="flex" flexDirection="row" justifyContent="space-evenly">
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
            <Button id="add-word-button" onClick={onAddWord}>
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
