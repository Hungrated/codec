function encode (_str) {
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
  const temp = _str.toLowerCase().trim().replace(/\n/g, ' ');
  const separator = ' ';
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
    encodedString += `${alphabet[charFlag]}${separator}`;
  }
  console.log(encodedString.slice(0, -1));
  return encodedString.slice(0, -1);
}

function decode(_str) {
  const matchingTree = [
    '',
    't', 'e',
    'm', 'n', 'a', 'i',
    'o', 'g', 'k', 'd', 'w', 'r', 'u', 's',
    '', '', 'q', 'z', 'y', 'c', 'x', 'b', 'j', 'p', '', 'l', '', '', 'v', 'h'
  ];
}

encode('tattoo tattoo');
