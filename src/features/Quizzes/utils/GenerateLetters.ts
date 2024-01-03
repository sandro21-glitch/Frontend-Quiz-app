const generateLetters = (numOptions: number): string[] => {
  const letters = [];
  for (let i = 0; i < numOptions; i++) {
    const letter = String.fromCharCode(65 + i);
    letters.push(letter);
  }
  return letters;
};
