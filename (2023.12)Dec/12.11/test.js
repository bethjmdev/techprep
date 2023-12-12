function countCharacters(str) {
  let alphabet = {
    a: null,
    b: null,
    c: null,
    d: null,
    e: null,
    f: null,
    g: null,
    h: null,
    i: null,
    j: null,
    k: null,
    l: null,
    m: null,
    n: null,
    o: null,
    p: null,
    q: null,
    r: null,
    s: null,
    t: null,
    u: null,
    v: null,
    w: null,
    x: null,
    y: 1,
    z: null,
  };

  let newArray = [];

  for (let i = 0; i < alphabet.length; i++) {
    if (alphabet[i] !== null) {
      newArray.push(alphabet[i]);
    }
  }

  console.log(newArray);
}

// Call the function with a string
countCharacters("aba"); // Output should be {'a': 2, 'b': 1}
countCharacters(""); // Output should be {}
