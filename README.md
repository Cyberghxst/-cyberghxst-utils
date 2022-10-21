This is a shitty package for my own use.
# @cyberghxst/utils
## Install
npm i @cyberghxst/utils

## Methods
- booleanify
- isBool
- print
- printWarn

## Setup
```js
const Util = require('@cyberghxst/utils');
const util = new Util();
```
## Examples
### .booleanify()
Params: (text)
<br> This method converts certain strings to booleans.
<br> Example:
<br> '1' to true,
<br> 'yes' to true,
<br> 'true' to true
```js
util.booleanify('yes'); //returns true
util.booleanify('no'); //returns false
```
### .isBool()
Params: (text)
<br> Checks if the provided text is a boolean.
Example:
```js
util.isBool('yes'); //returns true
util.isBool('hello'); //returns false
```
### .print()
Params: (text, color)
<br> This is a bullshit console.log but renamed
Available colors:
|----------------------|
| black                |
| red                  |
| green                |
| bold                 |
| sky                  |
| violet               |
| cyan                 |
| grey                 |
| pink                 |
| blue                 |
Example:
```js
util.print('Hello', 'cyan') //Logs 'Hello'.
```
### .printWarn()
Params: (text)
<br> This is print, but in red color.
Example:
```js
util.print('Err') //Logs 'Err'.
```