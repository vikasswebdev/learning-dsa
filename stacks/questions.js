// 4. How to check whether parentheses are valid?

function leftToRight(char) {
  switch (char) {
    case "(":
      return ")";
    case "[":
      return "]";
    case "{":
      return "}";
  }
}

const isValid = function (s) {
  if (!s) {
    return true;
  }

  // array can be used as a stack
  const stack = [];
  const len = s.length;

  for (let i = 0; i < len; i++) {
    // cache
    const ch = s[i];

    if (ch === "(" || ch === "{" || ch === "[") {
      stack.push(leftToRight(ch));
    } else {
      // If the stack is not empty and the
      // openning parenthesis at the top of the stack does not
      // match the current character, it is invalid.
      if (!stack.length || stack.pop() !== ch) {
        return false;
      }
    }
  }

  // If all parentheses can be matched successfully,
  // then the final stack should be empty
  return !stack.length;
};

// console.log("isValid", isValid("this is my string"));
