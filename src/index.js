const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};      
function decode(expr) {
    let arraySumbl = expr.match(/(.{1,10})/gim);
   
    for(let i = 0; i < arraySumbl.length; i++){
        arraySumbl[i] = arraySumbl[i].substring(arraySumbl[i].indexOf("1"));
        arraySumbl[i] = arraySumbl[i].replace(/10/g, '.'); 
        arraySumbl[i] = arraySumbl[i].replace(/11/g, '-'); 
        if(MORSE_TABLE[arraySumbl[i]]){
            arraySumbl[i] = MORSE_TABLE[arraySumbl[i]];
        } else {
            arraySumbl[i] = ' ';
        }
    }
    arraySumbl = arraySumbl.join('');
    return arraySumbl;
}
module.exports = {
    decode
}