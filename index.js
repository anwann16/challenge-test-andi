const sortAnagram = (arr) => {
  const char = arr.split("");

  for (let i = 0; i < char.length; i++) {
    for (let j = 0; j < char.length; j++) {
      if (char[i] < char[j]) {
        let temp = char[j];
        char[j] = char[i];
        char[i] = temp;
      }
    }
  }
  return char.join("");
};

const groupingAnagram = (words) => {
  const groups = [];

  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i];
    const sortedWord = sortAnagram(currentWord);

    let found = false;
    for (let j = 0; j < groups.length; j++) {
      const tempGroup = groups[j][0];
      if (tempGroup === sortedWord) {
        groups[j].push(currentWord);
        found = true;
        break;
      }
    }

    if (!found) {
      groups.push([sortedWord, currentWord]);
    }
  }

  for (let i = 0; i < groups.length; i++) {
    groups[i] = groups[i].slice(1);
  }
  return groups;
};

console.log(
  groupingAnagram(["cook", "save", "taste", "aves", "vase", "state", "map"])
);
