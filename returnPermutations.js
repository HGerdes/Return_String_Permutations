//returns all possible combinations of a string recursively

let findCombos = (str) => {
    let combos = [];

    if (str.length < 2) {
      return str;
    }

    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      let remainingChars = str.slice(0, i) + str.slice(i + 1, str.length);

      for (let combo of findCombos(remainingChars)) {
        combos.push(char + combo)
      }
    }
    return combos;
  }
