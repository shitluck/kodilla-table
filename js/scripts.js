var femaleNames = ['Asia', 'Kasia', 'Ola', 'Agata'];
var maleNames = ['Maciek', 'Grzegorz', 'Marcin', 'Michał'];

var allNames = femaleNames.concat(maleNames);

console.log(allNames);

var newName = 'Bogdan';

var indexOfNewName = allNames.indexOf(newName);
console.log('szukana wartość znajduje się na ' + indexOfNewName + ' pozycji tablicy');

if (allNames.indexOf(newName) === -1) {
    allNames.push(newName);
} else {
    alert('Takie imie jest już na tablicy');
    console.log('Takie imie jest już na tablicy');
}