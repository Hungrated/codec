function encode (str) {
  const alphabet = {
    'a': '.-',
    'b': '-...',
    'c': '-.-.',
    'd': '-..',
    'e': '.',
    'f': '..-.',
    'g': '--.',
    'h': '....',
    'i': '..',
    'j': '.---',
    'k': '-.-',
    'l': '.-..',
    'm': '--',
    'n': '-.',
    'o': '---',
    'p': '.--.',
    'q': '--.-',
    'r': '.-.',
    's': '...',
    't': '-',
    'u': '..-',
    'v': '...-',
    'w': '.--',
    'x': '-..-',
    'y': '-.--',
    'z': '--..',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.',
    '0': '-----',
    '$colon': '---...',
    '$comma': '--..--',
    '$semicolon': '-.-.-.',
    '$equal': '-...-',
    '$squote': '.----.',
    '$dquote': '.-..-.',
    '$question': '..--..',
    '$excmark': '-.-.--',
    '$uline': '..--.-',
    '$space': '/',
    '$slash': '-..-.',
    '$lparen': '-.--.',
    '$rparen': '-.--.-',
    '$dash': '-....-',
    '$dot': '.-.-.-',
    '$dollar': '...-..-',
    '$and': '.-...',
    '$at': '.--.-.'
  };
  const temp = str.toLowerCase().trim().replace(/\n/g, ' ');
  let encodedString = '';
  for (let i = 0; i < temp.length; i++) {
    let charFlag = '';
    switch (temp[i]) {
      case ':':
        charFlag = '$colon';
        break;
      case ',':
        charFlag = '$comma';
        break;
      case ';':
        charFlag = '$semicolon';
        break;
      case '=':
        charFlag = '$equal';
        break;
      case '\'':
        charFlag = '$squote';
        break;
      case '\"':
        charFlag = '$dquote';
        break;
      case '?':
        charFlag = '$question';
        break;
      case '!':
        charFlag = '$excmark';
        break;
      case '_':
        charFlag = '$uline';
        break;
      case ' ':
        charFlag = '$space';
        break;
      case '/':
        charFlag = '$slash';
        break;
      case '(':
        charFlag = '$lparen';
        break;
      case ')':
        charFlag = '$rparen';
        break;
      case '-':
        charFlag = '$dash';
        break;
      case '.':
        charFlag = '$dot';
        break;
      case '$':
        charFlag = '$dollar';
        break;
      case '&':
        charFlag = '$and';
        break;
      case '@':
        charFlag = '$at';
        break;
      default:
        if (/[a-z0-9]/.test(temp[i])) {
          charFlag = temp[i];
        } else {
          console.log(
            'encode error: unknown character at position ' + i + ': ' +
            (temp[i] === '\n' ? '\\n' : temp[i])
          );
          return 'encode error: unknown character';
        }
    }
    encodedString += alphabet[charFlag];
  }
  console.log(encodedString);
  return encodedString;
}

encode(`
The hunt for the puma began in a small village where a woman picking blackberries saw 'a large cat' only five yards away from her. It immediately ran away when she saw it, and experts confirmed that a puma will not attack a human being unless it is cornered. The search proved difficult, for the puma was often observed at one place in the morning and at another place twenty miles away in the evening. Wherever it went, it left behind it a trail of dead deer and small animals like rabbits. Paw prints were seen in a number of places and puma fur was found clinging to bushes. Several people complained of 'cat-like noises' at night and a businessman on a fishing trip saw the puma up a tree. 
`);
