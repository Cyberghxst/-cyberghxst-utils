const booleans = [true, false, 'true', 'false', 1, 0, '1', '0', 'yes', 'no'];
const verdaderos = [true, 'true', 1, '1', 'yes'];
const falsos = [false, 'false', 0, '0', 'no'];
const colors = {
    "BLACK": "\x1b[30m",
    "RED": "\x1b[31m",
    "GREEN": "\x1b[32m",
    "BOLD": "\x1b[33m",
    "SKY": "\x1b[34m",
    "VIOLET": "\x1b[35m",
    "CYAN": "\x1b[36m",
    "GREY": "\x1b[90m",
    "PINK": "\x1b[05m",
    "BLUE": "\x1b[96m"
};
module.exports = {
    booleans,
    colors,
    falsos,
    verdaderos
}