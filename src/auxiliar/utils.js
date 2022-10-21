const { booleans, colors, verdaderos } = require('./constants.js');
class Util {
    constructor(color, source, text) {
        this.color = color;
        this.source = source;
        this.text = text;
    }
    //Booleanify
    booleanify(source) {
        if(!source) return this.print('Error: Missing text provided.', 'RED');
        let res = verdaderos.some(arrayValue => source.toLowerCase() === arrayValue);
        return res;
    }
    //Boolean validator.
    isBool(source) {
        let checker = (array, source) => {
            return array.some(arrayValue => source === arrayValue)
        }
        return checker(booleans, source);
    }
    //Print color validator.
    isValidConsoleColor(color) {
        if(!color) return console.log(colors['RED'] + "Error: Missing color provided." + "\x1b[0m");
        let result = color.toUpperCase() in colors;
        return result;
    }
    //Prints a text.
    print(text, color) {
        if(!text) return this.print('Error: Missing text provided.', 'RED');
        if(!color || color == undefined) this.print('Error: Missing color provided.', 'RED');
        if(this.isValidConsoleColor(color) === false) return this.print('Error: Invalid print color provided.', 'RED');
        return console.log(colors[color.toUpperCase()] + text + "\x1b[0m");
    }
    //Print warn.
    printWarn(text) {
        if(!text) return this.print('Error: Missing text provided.', 'RED');
        return this.print(text, 'RED');
    }
    //no sé, alguna mierda random.
    paimon() {
        this.print('...Ringing', 'blue');
        this.print('Oh, hi there Paimon! :D', 'bold');
        this.print('Suck my balls.', 'sky');
        this.print('Lumine: D:', 'bold');
    }

}

module.exports = Util;