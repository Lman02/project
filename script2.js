if (4 == 9) {
    console.log('Ok!');
} else {
console.log('Error!');
}

const num = 102;
if (num < 49) {
    console.log('Error');
} else if (num > 100){
    console.log('Много');
} else {
    console.log('Ok!');
}

(num === 50) ? console.log('Ok!') : console.log('Error');

const num = 50;

switch (num) {
    case 49:
        console.log('неверно');
        break;
    case 100:
        console.log('неверно');
        break;
    case 51:
        console.log('верно');
        break;
    default:
        console.log('Не в этот раз');
        break;
}